import { INVITATION } from "../config";
import "../styles/friends.css";

/** Kitty 的朋友们：官方头像花边墙 */
export function Friends() {
  const { friends } = INVITATION;
  return (
    <section className="friends-section" aria-label="一起来的朋友们">
      <header className="section-head">
        <h2>🎀 {friends.title}</h2>
        <p className="section-sub">{friends.sub}</p>
      </header>
      <ul className="friend-grid">
        {friends.list.map((f) => (
          <li key={f.latin} className="friend-chip">
            <img src={f.face} alt={`${f.name}（${f.latin}）官方头像`} />
            <p className="friend-name">{f.name}</p>
            <p className="friend-latin">{f.latin}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
