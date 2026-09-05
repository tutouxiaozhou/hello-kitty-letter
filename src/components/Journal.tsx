import { INVITATION } from "../config";
import { asset } from "../lib/asset";
import "../styles/journal.css";

const PAGES = [
  {
    year: "2019",
    title: "相遇的那一页",
    note: "教室的门被推开，风铃响了一声——故事从这里开始贴胶带。",
    sticker: asset("ip/face-hellokitty.png"),
  },
  {
    year: "2022",
    title: "同居的那一页",
    note: "两个人的牙刷并肩站着，从那天起，每一天都自带甜味滤镜。",
    sticker: asset("ip/face-mymelody.png"),
  },
  {
    year: "2025",
    title: "求婚的那一页",
    note: "戒指藏在苹果派的旁边，她说「好」的时候派都没吃完。",
    sticker: asset("ip/face-daniel.png"),
  },
];

/** Kitty 手账时间线：用贴纸和胶带记录走过的日子 */
export function Journal() {
  const { couple } = INVITATION;
  return (
    <section className="journal-section" aria-labelledby="journal-title">
      <header className="section-head">
        <h2 id="journal-title">📖 {couple.a} &amp; {couple.b} 的手账本</h2>
        <p className="section-sub">Kitty 帮忙贴好了胶带，翻翻这几页</p>
      </header>
      <ol className="journal-pages">
        {PAGES.map((pg, i) => (
          <li className={`journal-page journal-page--${i % 2 ? "r" : "l"}`} key={pg.year}>
            <span className={`journal-tape journal-tape--${i % 3}`} aria-hidden="true" />
            <div className="journal-photo" aria-hidden="true">
              <img src={pg.sticker} alt="" width={64} height={64} loading="lazy" />
            </div>
            <div className="journal-body">
              <p className="journal-year">{pg.year}</p>
              <h3 className="journal-title">{pg.title}</h3>
              <p className="journal-note">{pg.note}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="journal-next">
        下一页留白——10 月 6 日，一起来把它写满。
      </p>
    </section>
  );
}
