import { useEffect, useRef, useState } from "react";
import { INVITATION } from "../config";
import { asset } from "../lib/asset";
import { prefersReducedMotion } from "../lib/motion";
import { Letter } from "./Letter";
import { Bow, Heart } from "./decorations";
import "../styles/hero.css";

const HEART_COLORS = ["#FF7FA5", "#FFB1C8", "#E8385D", "#FFC9D9"];

/** 拆蝴蝶结时迸出的爱心彩纸 */
function HeartBurst({ show }: { show: boolean }) {
  if (!show) return null;
  const hearts = Array.from({ length: 12 }, (_, i) => ({
    x: 10 + (i * 80) / 11,
    delay: (i % 5) * 0.08,
    size: 10 + ((i * 5) % 9),
    color: HEART_COLORS[i % HEART_COLORS.length],
  }));
  return (
    <div className="heart-burst" aria-hidden="true">
      {hearts.map((h, i) => (
        <span
          key={i}
          className="heart-fly"
          style={{
            left: `${h.x}%`,
            animationDelay: `${h.delay}s`,
            animationDuration: prefersReducedMotion() ? "0.01ms" : "1.5s",
          }}
        >
          <Heart size={h.size} color={h.color} />
        </span>
      ))}
    </div>
  );
}

export function Hero() {
  const { couple, date, dateLunar, hero, venue, schedule } = INVITATION;
  const [opened, setOpened] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.35;
    return () => audio.pause();
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setMusicPlaying(true);
      } catch {
        setMusicPlaying(false);
      }
      return;
    }

    audio.pause();
    setMusicPlaying(false);
  };

  return (
    <section className="hero" aria-label="Hello Kitty 风格婚礼邀请首屏">
      <div className="hero-inner">
        <div className={`hero-card ${opened ? "is-opened" : ""}`}>
          <audio ref={audioRef} src={asset("music/the-afternoon-vow.mp3")} loop preload="metadata" />
          <button
            type="button"
            className={`music-toggle ${musicPlaying ? "is-playing" : ""}`}
            aria-pressed={musicPlaying}
            aria-label={musicPlaying ? "关闭背景音乐" : "播放背景音乐"}
            onClick={toggleMusic}
          >
            <span className="music-toggle-icon" aria-hidden="true">♪</span>
          </button>
          {/* 蝴蝶结封印：点一下拆开 */}
          <button
            type="button"
            className="bow-seal"
            aria-expanded={opened}
            aria-controls="hero-letter"
            aria-label={opened ? hero.againBtn : `拆开蝴蝶结封印：${hero.bowHint}`}
            onClick={() => setOpened((v) => !v)}
          >
            <Bow className="bow-svg" />
          </button>
          <HeartBurst show={opened} />
          <p className="hero-title">{hero.title}</p>
          <h1 className="hero-names">
            <span>{couple.a}</span><span className="amp" aria-label="与">♡</span><span>{couple.b}</span>
          </h1>
          <p className="hero-date"><time dateTime={date}>{date.split("-").join(".")}</time></p>
          <p className="hero-lunar">{dateLunar}</p>
          <p className="hero-venue">{venue}<br /><span>{schedule[0].time} {hero.welcomeLabel}</span></p>

          <div className="hero-kitty-zone">
            <img
              className="hero-kitty"
              src={asset("ip/hello-kitty-mv.png")}
              alt="Hello Kitty 坐在苹果和牛奶旁边"
            />
            {/* Kitty 的对话气泡 */}
            <div className="bubble" role="status" aria-live="polite">
              <p className="bubble-text">{opened ? hero.bubbleYes : hero.bubbleAsk}</p>
              <span className="bubble-tail" aria-hidden="true" />
            </div>
          </div>

          <div className="hero-actions">
            <button type="button" className="bubble-btn"
              aria-expanded={opened} aria-controls="hero-letter"
              onClick={() => setOpened((v) => !v)}>
              {opened ? hero.againBtn : hero.yesBtn}
            </button>
            <a className="hero-reply" href="#rsvp">{hero.replyLink}</a>
          </div>
          <a className="hero-location-link" href="#venue">{hero.venueLink}</a>
        </div>
      </div>
      <div id="hero-letter" className="hero-letter" hidden={!opened}>
        <Letter />
      </div>
    </section>
  );
}
