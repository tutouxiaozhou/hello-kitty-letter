import { Hero } from "./components/Hero";
import { Letter } from "./components/Letter";
import { Schedule } from "./components/Schedule";
import { Friends } from "./components/Friends";
import { WishesWall } from "./components/WishesWall";
import { Journal } from "./components/Journal";
import { Venue } from "./components/Venue";
import Rsvp from "./components/Rsvp";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="page">
      <Hero />
      <Letter />
      <Schedule />
      <Friends />
      <WishesWall />
      <Journal />
      <Venue />
      <Rsvp />
      <Footer />
    </main>
  );
}
