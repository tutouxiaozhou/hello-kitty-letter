import { useState } from "react";
import { INVITATION } from "../config";
import { Heart } from "./decorations";
import "../styles/friends.css";

export function Friends() {
  const { friends } = INVITATION;
  const [selected, setSelected] = useState(0);
  const friend = friends.list[selected];
  return (
    <section className="friends-section" aria-labelledby="friends-title">
      <header className="section-head">
        <h2 id="friends-title">{friends.title}</h2>
        <p className="section-sub">{friends.sub}</p>
      </header>
      <ul className="friend-grid">
        {friends.list.map((f, i) => (
          <li key={f.latin}>
            <button type="button" className="friend-chip" aria-pressed={selected === i}
              aria-controls="friend-wish" onClick={() => setSelected(i)}>
              <img src={f.face} alt="" width={48} height={48} loading="lazy" />
              <span className="friend-name">{f.name}</span>
              <span className="friend-selected" aria-hidden="true">{selected === i ? "正在读" : "读祝福"}</span>
            </button>
          </li>
        ))}
      </ul>
      <div id="friend-wish" className="friend-wish" role="status" aria-live="polite" aria-atomic="true">
        <p>{friend.wish}</p>
        <p className="friend-signature"><Heart size={12} color="currentColor" /> {friend.name}</p>
      </div>
    </section>
  );
}
