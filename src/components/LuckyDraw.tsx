import { useState } from "react";
import { INVITATION } from "../config";
import { Bow, Heart } from "./decorations";
import "../styles/lucky-draw.css";

export function LuckyDraw() {
  const { luckyDraw } = INVITATION;
  const [drawn, setDrawn] = useState<number | null>(null);
  const [key, setKey] = useState(0);
  const draw = () => {
    setDrawn((current) => {
      const next = current === null ? 0 : (current + 1) % luckyDraw.wishes.length;
      return next;
    });
    setKey((current) => current + 1);
  };
  const isDrawn = drawn !== null;

  return (
    <section className="lucky-section" aria-labelledby="lucky-title">
      <header className="section-head">
        <h2 id="lucky-title">{luckyDraw.title}</h2>
        <p className="section-sub">{luckyDraw.sub}</p>
      </header>
      <div className="lucky-board">
        <div className="lucky-card-stack" aria-live="polite">
          {luckyDraw.hints.map((hint, index) => (
            <span key={hint} className={`lucky-mini-card lucky-mini-card--${index + 1}`} aria-hidden="true">{hint}</span>
          ))}
          <article className={`lucky-card ${isDrawn ? "is-drawn" : ""}`} key={key}>
            <div className="lucky-card-face lucky-card-back">
              <Bow className="lucky-bow" />
              <span>HELLO<br />LOVE</span>
              <Heart size={18} color="#fff" />
            </div>
            <div className="lucky-card-face lucky-card-front">
              <span className="lucky-sparkle" aria-hidden="true">✦</span>
              <p>Kitty 写给你</p>
              <strong>{isDrawn ? luckyDraw.wishes[drawn] : "今天会有一件甜甜的事发生。"}</strong>
              <span className="lucky-heartline" aria-hidden="true">♥ ♥ ♥</span>
            </div>
          </article>
        </div>
        <button className="lucky-button" type="button" onClick={draw}>
          <span aria-hidden="true">✉</span>{isDrawn ? luckyDraw.again : luckyDraw.action}
        </button>
      </div>
    </section>
  );
}
