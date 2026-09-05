import { INVITATION } from "../config";
import { Heart } from "./decorations";
import "../styles/letter.css";

/** Kitty 写的信：横线信纸 */
export function Letter() {
  const { letter } = INVITATION;
  return (
    <section className="letter-section" aria-label="邀请词">
      <div className="letter-paper">
        <div className="letter-head">
          <Heart size={16} color="#E8385D" />
          <h2>一封来自 Kitty 的信</h2>
          <Heart size={16} color="#E8385D" />
        </div>
        <p className="letter-body">{letter.body}</p>
        <p className="letter-from">{letter.from}</p>
      </div>
    </section>
  );
}
