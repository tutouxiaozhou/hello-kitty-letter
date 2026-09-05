import { INVITATION } from "../config";
import { Bow } from "./decorations";
import "../styles/footer.css";

export default function Footer() {
  const { fanNote, demoNote } = INVITATION;
  return (
    <footer className="site-foot">
      <Bow className="foot-bow" />
      <p>{fanNote}</p>
      <p>{demoNote}</p>
    </footer>
  );
}
