import { useState } from "react";
import { INVITATION } from "../config";
import "../styles/wishes.css";

/** 好朋友祝福墙：点开哪只小伙伴，就能听到TA的悄悄话 */
export function WishesWall() {
  const { friends } = INVITATION;
  const [open, setOpen] = useState(0);

  return (
    <section className="wishes-section" aria-labelledby="wishes-title">
      <header className="section-head">
        <h2 id="wishes-title">💌 朋友们的悄悄话</h2>
        <p className="section-sub">点一点他们，就能听到藏在信封里的祝福</p>
      </header>
      <ul className="wishes-list">
        {friends.list.map((f, i) => (
          <li key={f.latin} className="wishes-item">
            <button
              type="button"
              className={`wishes-btn${open === i ? " is-open" : ""}`}
              aria-expanded={open === i}
              onClick={() => setOpen(open === i ? -1 : i)}
            >
              <img className="wishes-face" src={f.face} alt="" width={44} height={44} />
              <span className="wishes-name">{f.name}</span>
              <span className="wishes-arrow" aria-hidden="true">
                {open === i ? "▾" : "▸"}
              </span>
            </button>
            {open === i && (
              <p className="wishes-bubble" role="status">
                {f.wish}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
