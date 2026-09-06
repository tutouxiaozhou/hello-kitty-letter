import { useState } from "react";
import { INVITATION } from "../config";
import { Heart } from "./decorations";
import "../styles/garden.css";

function Flower({ index, bloomed }: { index: number; bloomed: boolean }) {
  const x = [69, 150, 230][index];
  const y = [132, 104, 132][index];
  return (
      <g className={`garden-flower garden-flower--${index + 1} ${bloomed ? "is-bloomed" : ""}`}>
        <path className="garden-stem" d={`M${x} 188 C${x - 4} 166 ${x + 5} 149 ${x} ${y + 17}`} />
        <path className="garden-leaf" d={`M${x - 1} 166 C${x - 29} 164 ${x - 28} 145 ${x - 4} 151 Z`} />
        <path className="garden-leaf garden-leaf--right" d={`M${x + 2} 153 C${x + 28} 149 ${x + 30} 132 ${x + 5} 139 Z`} />
        <g transform={`translate(${x} ${y})`}>
          <g className="garden-petals">
            <circle cx="0" cy="-13" r="11" />
            <circle cx="12" cy="-3" r="11" />
            <circle cx="7" cy="12" r="11" />
            <circle cx="-8" cy="12" r="11" />
            <circle cx="-13" cy="-3" r="11" />
            <circle className="garden-center" cx="0" cy="0" r="7" />
          </g>
        </g>
    </g>
  );
}

export function Garden() {
  const { garden } = INVITATION;
  const [stage, setStage] = useState(0);
  const completed = stage === 3;

  const water = () => setStage((current) => (current < 3 ? current + 1 : 0));

  return (
    <section className="garden-section" aria-labelledby="garden-title">
      <header className="section-head">
        <h2 id="garden-title">{garden.title}</h2>
        <p className="section-sub">{garden.sub}</p>
      </header>
      <div className={`garden-card stage-${stage}`}>
        <span className="garden-sticker garden-sticker--left" aria-hidden="true">✦</span>
        <span className="garden-sticker garden-sticker--right" aria-hidden="true">♥</span>
        <div className="garden-scene" aria-hidden="true">
          <svg viewBox="0 0 300 220" role="img">
            <path className="garden-hill garden-hill--back" d="M0 159 C40 111 82 124 118 151 C166 108 220 116 300 151 L300 220 L0 220 Z" />
            <path className="garden-hill" d="M0 182 C41 160 70 174 105 187 C150 159 214 158 300 179 L300 220 L0 220 Z" />
            <Flower index={0} bloomed={stage >= 1} />
            <Flower index={1} bloomed={stage >= 2} />
            <Flower index={2} bloomed={stage >= 3} />
            <g className="garden-can" transform="translate(16 88)">
              <path d="M15 22 H53 V56 H15 Z" />
              <path d="M17 25 C4 22 2 44 17 46" />
              <path d="M52 28 L72 15 L77 25 L54 40" />
              <path d="M27 20 C28 3 43 3 44 20" />
              {stage > 0 && <g className="garden-water"><path d="M77 29 l3 8" /><path d="M85 25 l3 8" /><path d="M93 21 l3 8" /></g>}
            </g>
          </svg>
        </div>
        <div className="garden-status" aria-live="polite">
          <div className="garden-progress" aria-hidden="true">
            {[1, 2, 3].map((dot) => <span key={dot} className={stage >= dot ? "is-filled" : ""} />)}
          </div>
          <p>{completed ? garden.done : stage === 0 ? "花园正等着你的第一滴水。" : garden.steps[stage - 1]}</p>
        </div>
        <button className="garden-water-button" type="button" onClick={water}>
          <span aria-hidden="true">{completed ? "↺" : "💧"}</span>
          {completed ? garden.again : garden.water}
        </button>
        {completed && <a className="garden-reply-link" href="#rsvp"><Heart size={15} />{garden.reply}</a>}
      </div>
    </section>
  );
}
