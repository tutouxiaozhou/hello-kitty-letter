import { useEffect, useRef, useState } from "react";
import { INVITATION } from "../config";
import { asset } from "../lib/asset";
import { prefersReducedMotion } from "../lib/motion";
import { Heart, Postmark } from "./decorations";
import "../styles/rsvp.css";

type Stage = "form" | "sending" | "sent";
type Attendance = "yes" | "no";

interface Snapshot {
  attendance: Attendance;
  name: string;
  count: number;
  wishes: string;
}

const { rsvp, friends } = INVITATION;
const MAX_COUNT = 6;
/** 寄送动画时长 */
const SEND_MS = 1300;

export default function Rsvp() {
  const [stage, setStage] = useState<Stage>("form");
  const [attendance, setAttendance] = useState<Attendance>("yes");
  const [name, setName] = useState("");
  const [count, setCount] = useState(1);
  const [wishes, setWishes] = useState("");
  const [error, setError] = useState("");
  const [snap, setSnap] = useState<Snapshot | null>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    },
    []
  );

  const submit = () => {
    const trimmed = name.trim();
    if (!trimmed) {
      setError(rsvp.errors.name);
      nameRef.current?.focus();
      return;
    }
    setError("");
    setSnap({ attendance, name: trimmed, count, wishes: wishes.trim() });
    setStage("sending");
    timerRef.current = window.setTimeout(
      () => setStage("sent"),
      prefersReducedMotion() ? 300 : SEND_MS
    );
  };

  const reset = () => {
    if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    setStage("form");
    setSnap(null);
  };

  const statusText =
    snap === null
      ? ""
      : snap.attendance === "yes"
        ? rsvp.rows.attending
        : rsvp.rows.absent;

  return (
    <section id="rsvp" tabIndex={-1} className="rsvp-section" aria-label="RSVP 回函明信片">
      <header className="section-head">
        <h2>回函明信片</h2>
        <p className="section-sub">REPLY POSTCARD</p>
      </header>

      <div className="postcard">
        {/* 邮票 + 邮戳 */}
        <div className="stamp-zone" aria-hidden="true">
          <img className="stamp-img" src={asset("ip/face-hellokitty.png")} alt="" />
          {stage !== "form" && <Postmark text={rsvp.postmark} />}
        </div>

        <p className="rsvp-intro">
          <Heart size={13} color="#E8385D" /> {rsvp.intro}
        </p>

        {stage === "form" && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
            noValidate
          >
            <p className="field-label" id="attend-label">
              {rsvp.attendanceLabel}
            </p>
            <div className="attend-row" role="group" aria-labelledby="attend-label">
              <button
                type="button"
                className="attend-btn"
                aria-pressed={attendance === "yes"}
                onClick={() => setAttendance("yes")}
              >
                🍓 {rsvp.yes}
              </button>
              <button
                type="button"
                className="attend-btn"
                aria-pressed={attendance === "no"}
                onClick={() => setAttendance("no")}
              >
                🍪 {rsvp.no}
              </button>
            </div>

            <label className="field-label" htmlFor="rsvp-name">
              {rsvp.nameLabel}
            </label>
            <input
              ref={nameRef}
              aria-invalid={!!error}
              aria-describedby={error ? "rsvp-error" : undefined}
              id="rsvp-name"
              className="kt-input"
              value={name}
              maxLength={16}
              placeholder={rsvp.namePlaceholder}
              onChange={(e) => { setName(e.target.value); if (error) setError(""); }}
              autoComplete="name"
            />

            <p className="field-label" id="count-label">
              {rsvp.countLabel}
            </p>
            <div className={`stepper ${attendance === "no" ? "is-disabled" : ""}`}>
              <button
                type="button"
                aria-label="减少同行人数"
                disabled={attendance === "no" || count <= 1}
                onClick={() => setCount((c) => Math.max(1, c - 1))}
              >
                −
              </button>
              <span
                className="stepper-val"
                aria-live="polite"
                aria-labelledby="count-label"
              >
                {attendance === "no" ? rsvp.rows.empty : `${count} 人`}
              </span>
              <button
                type="button"
                aria-label="增加同行人数"
                disabled={attendance === "no" || count >= MAX_COUNT}
                onClick={() => setCount((c) => Math.min(MAX_COUNT, c + 1))}
              >
                ＋
              </button>
            </div>

            <label className="field-label" htmlFor="rsvp-wishes">
              {rsvp.wishesLabel}
            </label>
            <textarea
              id="rsvp-wishes"
              className="kt-input"
              value={wishes}
              maxLength={120}
              rows={3}
              placeholder={rsvp.wishesPlaceholder}
              onChange={(e) => setWishes(e.target.value)}
            />

            {error && (
              <p id="rsvp-error" className="form-error" role="alert">
                {error}
              </p>
            )}

            <button type="submit" className="submit-btn">
              {`📮 ${rsvp.submit}`}
            </button>
          </form>
        )}

        {stage !== "form" && snap !== null && (
          <div className="send-stage" role="status">
            {stage === "sending" && (
              <p className="send-status">{rsvp.sending}</p>
            )}
            {stage === "sent" && (
              <>
                <div className="sent-card">
                  <h3 className="sent-title">{rsvp.successTitle}</h3>
                  <p className="sent-desc">{snap.attendance === "yes" ? rsvp.successDesc : rsvp.absentSuccessDesc}</p>
                  <dl className="sent-rows">
                    <div>
                      <dt>{rsvp.rows.name}</dt>
                      <dd>{snap.name}</dd>
                    </div>
                    <div>
                      <dt>{rsvp.rows.status}</dt>
                      <dd>{statusText}</dd>
                    </div>
                    <div>
                      <dt>{rsvp.rows.count}</dt>
                      <dd>
                        {snap.attendance === "yes"
                          ? `${snap.count} 人`
                          : rsvp.rows.empty}
                      </dd>
                    </div>
                    <div>
                      <dt>{rsvp.rows.wishes}</dt>
                      <dd>{snap.wishes || rsvp.rows.empty}</dd>
                    </div>
                  </dl>
                </div>
                <ul className="cheer-row" aria-label="朋友们为你欢呼">
                  {friends.list.map((f, i) => (
                    <li key={f.latin}>
                      <img
                        src={f.face}
                        alt=""
                        style={{ animationDelay: `${i * 0.12}s` }}
                      />
                    </li>
                  ))}
                </ul>
                <button type="button" className="ghost-btn" onClick={reset}>
                  {rsvp.reset}
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
