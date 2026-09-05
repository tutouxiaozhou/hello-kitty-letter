import { INVITATION } from "../config";
import { MiniIcon } from "./decorations";
import "../styles/schedule.css";

/** 当天流程：花边菜单卡 */
export function Schedule() {
  const { schedule } = INVITATION;
  return (
    <section className="schedule-section" aria-label="婚礼日程">
      <header className="section-head">
        <h2>甜甜的一天 · 流程表</h2>
        <p className="section-sub">跟着 Kitty 的安排走，保证不吃亏</p>
      </header>
      <ol className="menu-cards">
        {schedule.map((item) => (
          <li key={item.no} className="menu-card">
            <div className="menu-icon">
              <MiniIcon kind={item.icon} />
            </div>
            <div className="menu-info">
              <p className="menu-title">
                <span className="menu-no">{item.no}</span>
                {item.title}
                <span className="menu-time">{item.time}</span>
              </p>
              <p className="menu-desc">{item.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
