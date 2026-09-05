import { useState } from "react";
import { INVITATION } from "../config";
import { asset } from "../lib/asset";
import { prefersReducedMotion } from "../lib/motion";
import { Bow, Heart } from "./decorations";
import "../styles/hero.css";

const HEART_COLORS = ["#FF7FA5", "#FFB1C8", "#E8385D", "#FFC9D9"];

/** 拆蝴蝶结时迸出的爱心彩纸 */
function HeartBurst({ show }: { show: boolean }) {
  if (!show) return null;
  const hearts = Array.from({ length: 12 }, (_, i) => ({
    x: 10 + (i * 80) / 11,
    delay: (i % 5) * 0.08,
    size: 10 + ((i * 5) % 9),
    color: HEART_COLORS[i % HEART_COLORS.length],
  }));
  return (
    <div className="heart-burst" aria-hidden="true">
      {hearts.map((h, i) => (
        <span
          key={i}
          className="heart-fly"
          style={{
            left: `${h.x}%`,
            animationDelay: `${h.delay}s`,
            animationDuration: prefersReducedMotion() ? "0.01ms" : "1.5s",
          }}
        >
          <Heart size={h.size} color={h.color} />
        </span>
      ))}
    </div>
  );
}

export function Hero() {
  const { couple, date, dateLunar, hero } = INVITATION;
  const [opened, setOpened] = useState(false);

  return (
    <section className="hero" aria-label="Hello Kitty 风格婚礼邀请首屏">
      <div className="hero-inner">
        <p className="hero-kicker">{hero.kicker}</p>

        <div className={`hero-card ${opened ? "is-opened" : ""}`}>
          {/* 蝴蝶结封印：点一下拆开 */}
          <button
            type="button"
            className="bow-seal"
            aria-pressed={opened}
            aria-label={opened ? "蝴蝶结已拆开" : `拆开蝴蝶结封印：${hero.bowHint}`}
            onClick={() => setOpened((v) => !v)}
          >
            <Bow className="bow-svg" />
          </button>
          <HeartBurst show={opened} />
          <span className="bow-hint" aria-hidden="true">
            {opened ? "" : hero.bowHint}
          </span>

          <div className="hero-kitty-zone">
            <img
              className="hero-kitty"
              src={asset("ip/hello-kitty-mv.png")}
              alt="Hello Kitty 坐在苹果和牛奶旁边"
            />
            {/* Kitty 的对话气泡 */}
            <div className="bubble" role="status" aria-live="polite">
              <p className="bubble-text">{opened ? hero.bubbleYes : hero.bubbleAsk}</p>
              <span className="bubble-tail" aria-hidden="true" />
            </div>
          </div>

          <button
            type="button"
            className="bubble-btn"
            onClick={() => setOpened((v) => !v)}
          >
            {opened ? `🎀 ${hero.againBtn}` : `🎀 ${hero.yesBtn}`}
          </button>

          <h1 className="hero-title">{hero.title}</h1>
          <p className="hero-names">
            {couple.a} <span className="amp">♡</span> {couple.b}
          </p>
          <p className="hero-date">
            {date} · {dateLunar}
          </p>
        </div>
        <p className="hero-demo">※ 本页为演示资料，非官方粉丝作品</p>
      </div>
    </section>
  );
}
