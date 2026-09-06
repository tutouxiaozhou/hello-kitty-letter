import { Hero } from "./components/Hero";
import { Schedule } from "./components/Schedule";
import { Friends } from "./components/Friends";
import { Journal } from "./components/Journal";
import { Venue } from "./components/Venue";
import { Garden } from "./components/Garden";
import { LuckyDraw } from "./components/LuckyDraw";
import Rsvp from "./components/Rsvp";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="page">
      <Hero />
      <Venue />
      <Schedule />
      <Journal />
      <Garden />
      <LuckyDraw />
      <Friends />
      <Rsvp />
      <Footer />
    </main>
  );
}
