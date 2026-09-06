import { INVITATION } from "../config";
import { asset } from "../lib/asset";
import { VenueScene } from "./VenueScene";
import "../styles/venue.css";

export function Venue() {
  const { venue, address, venueInfo, date } = INVITATION;
  return (
    <section id="venue" tabIndex={-1} className="venue-section" aria-label="地点与交通">
      <header className="section-head">
        <h2>婚礼地点</h2>
        <p className="section-sub">{venueInfo.subtitle}</p>
      </header>
      <div className="venue-card">
        <div className="venue-postcard-face">
          <figure className="venue-picture">
            <VenueScene />
          </figure>
          <div className="venue-destination">
            <div className="venue-address-block">
              <p className="venue-date">
                <time dateTime={date}>{date.split("-").join(" · ")}</time>
              </p>
              <h3 className="venue-name">{venue}</h3>
              <p className="venue-address">{address}</p>
            </div>
            <div className="venue-stamp" aria-hidden="true">
              <span className="venue-stamp-ring">
                <img src={asset("ip/face-hellokitty.png")} alt="" width={44} height={44} loading="lazy" />
              </span>
              <span className="venue-stamp-wave" />
              <span className="venue-stamp-copy">YUNQI · WEDDING</span>
            </div>
          </div>
        </div>
        <div className="venue-transport">
          <div className="venue-transport-heading">
            <span className="route-heart" aria-hidden="true">♡</span>
            <h4 className="venue-transport-title">{venueInfo.transportTitle}</h4>
          </div>
          <ul className="transport-list">
            {venueInfo.transport.map((t, i) => (
              <li key={t}>
                <span className="transport-marker" aria-hidden="true"><span /></span>
                <div>
                  <span className="transport-label">{venueInfo.transportLabels[i]}</span>
                  <span className="transport-copy">{t}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <p className="venue-service"><span aria-hidden="true">♡</span>{venueInfo.service}</p>
      </div>
    </section>
  );
}
