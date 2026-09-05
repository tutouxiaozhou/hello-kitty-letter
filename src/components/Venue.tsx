import { INVITATION } from "../config";
import { Chapel, Heart } from "./decorations";
import "../styles/venue.css";

/** 地点与交通：小教堂卡片 */
export function Venue() {
  const { venue, address, venueInfo } = INVITATION;
  return (
    <section className="venue-section" aria-label="地点与交通">
      <header className="section-head">
        <h2>婚礼地点</h2>
        <p className="section-sub">像 Kitty 家后院一样温柔的小教堂</p>
      </header>
      <div className="venue-card">
        <Chapel className="venue-chapel" />
        <h3 className="venue-name">{venue}</h3>
        <p className="venue-address">{address}</p>
        <div className="venue-transport">
          <h4 className="venue-transport-title">{venueInfo.transportTitle}</h4>
          <ul className="transport-list">
            {venueInfo.transport.map((t) => (
              <li key={t}>
                <Heart size={13} color="#E8385D" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p className="venue-service">{venueInfo.service}</p>
        </div>
      </div>
    </section>
  );
}
