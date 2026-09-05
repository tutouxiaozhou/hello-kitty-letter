/** 三丽鸥扁平风的原创 SVG 小装饰：蝴蝶结 / 爱心 / 日程图标 / 教堂 / 邮戳 */

/** Kitty 标志性红蝴蝶结（原创绘制，非描摹官方图） */
export function Bow({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 88" aria-hidden="true">
      <path
        className="bow-wing"
        d="M55 40 C46 20 22 12 11 24 C1 36 8 53 25 57 C37 60 49 52 54 45 Z"
      />
      <path
        className="bow-wing"
        d="M65 40 C74 20 98 12 109 24 C119 36 112 53 95 57 C83 60 71 52 66 45 Z"
      />
      <path
        className="bow-tail"
        d="M53 50 C45 63 40 72 42 81 L53 74 L59 84 C61 73 61 60 59 50 Z"
      />
      <path
        className="bow-tail"
        d="M67 50 C75 63 80 72 78 81 L67 74 L61 84 C59 73 59 60 61 50 Z"
      />
      <rect className="bow-knot" x="49" y="34" width="22" height="19" rx="9" />
    </svg>
  );
}

/** 小爱心（飘浮装饰 / 彩纸） */
export function Heart({
  className,
  size = 14,
  color = "#FF7FA5",
}: {
  className?: string;
  size?: number;
  color?: string;
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 20 18"
      aria-hidden="true"
    >
      <path
        d="M10 17 C10 17 1 11.5 1 5.8 C1 2.6 3.5 1 5.8 1 C7.6 1 9.2 2.1 10 3.6 C10.8 2.1 12.4 1 14.2 1 C16.5 1 19 2.6 19 5.8 C19 11.5 10 17 10 17 Z"
        fill={color}
      />
    </svg>
  );
}

/** 日程小图标（扁平双色） */
export function MiniIcon({ kind }: { kind: "flag" | "rings" | "camera" | "cake" | "gift" }) {
  switch (kind) {
    case "flag":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <line className="mi-stroke" x1="14" y1="8" x2="14" y2="41" />
          <path className="mi-fill" d="M14 9 L36 13.5 L14 20 Z" />
          <path
            className="mi-heart"
            d="M23 12.6 c0-1.6-1.8-2.3-2.8-1.2 c-1-1.1-2.8-.4-2.8 1.2 c0 1.7 2.8 3.4 2.8 3.4 s2.8-1.7 2.8-3.4 Z"
          />
          <line className="mi-stroke" x1="9" y1="41" x2="21" y2="41" />
        </svg>
      );
    case "rings":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <circle className="mi-stroke" cx="19" cy="28" r="10" />
          <circle className="mi-stroke" cx="31" cy="28" r="10" />
          <path
            className="mi-heart"
            d="M26 11 c0-2-2.3-2.9-3.6-1.5 c-1.3-1.4-3.6-.5-3.6 1.5 c0 2.2 3.6 4.4 3.6 4.4 s3.6-2.2 3.6-4.4 Z"
          />
        </svg>
      );
    case "camera":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <rect className="mi-fill" x="7" y="15" width="34" height="24" rx="6" />
          <rect className="mi-fill-dark" x="17" y="10" width="12" height="8" rx="3" />
          <circle className="mi-hole" cx="24" cy="27" r="7.5" />
          <circle className="mi-dot" cx="35" cy="21" r="2.2" />
        </svg>
      );
    case "cake":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <rect className="mi-fill" x="10" y="24" width="28" height="14" rx="4" />
          <rect className="mi-fill-dark" x="15" y="16" width="18" height="10" rx="4" />
          <path
            className="mi-heart"
            d="M25 7 c0-1.8-2-2.6-3.2-1.3 c-1.2-1.3-3.2-.5-3.2 1.3 c0 2 3.2 4 3.2 4 s3.2-2 3.2-4 Z"
          />
          <line className="mi-stroke" x1="7" y1="39" x2="41" y2="39" />
        </svg>
      );
    case "gift":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <rect className="mi-fill" x="9" y="18" width="30" height="22" rx="4" />
          <rect className="mi-fill-dark" x="6" y="13" width="36" height="8" rx="3" />
          <rect className="mi-ribbon" x="21" y="13" width="6" height="27" />
          <path
            className="mi-heart"
            d="M24 8 c0-2-2.2-2.8-3.4-1.4 c-1.2-1.4-3.4-.6-3.4 1.4 c0 2.1 3.4 4.2 3.4 4.2 s3.4-2.1 3.4-4.2 Z"
          />
        </svg>
      );
  }
}

/** Kitty 家的小教堂（原创扁平 SVG） */
export function Chapel({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 220 170" aria-hidden="true">
      {/* 身体 */}
      <rect className="ch-wall" x="45" y="78" width="130" height="82" rx="6" />
      {/* 屋顶 */}
      <path className="ch-roof" d="M34 82 L110 26 L186 82 Z" />
      {/* 尖塔 */}
      <rect className="ch-wall" x="98" y="4" width="24" height="30" rx="4" />
      <path className="ch-roof" d="M94 8 L110 -10 L126 8 Z" />
      {/* 塔顶蝴蝶结 */}
      <g transform="translate(110 -12) scale(0.16)">
        <circle className="ch-bow" cx="-16" cy="0" r="12" />
        <circle className="ch-bow" cx="16" cy="0" r="12" />
        <circle className="ch-bow-deep" cx="0" cy="0" r="7" />
      </g>
      {/* 心形彩窗 */}
      <path
        className="ch-heart"
        d="M110 92 c0-6-6.6-8.6-10.3-4.2 C96 83.4 89.4 86 89.4 92 c0 6.6 10.3 13 10.3 13 s10.3-6.4 10.3-13 Z"
      />
      {/* 大门 */}
      <path className="ch-door" d="M96 160 L96 122 C96 110 124 110 124 122 L124 160 Z" />
      <circle className="ch-knob" cx="119" cy="138" r="2.5" />
      {/* 窗户 */}
      <rect className="ch-window" x="58" y="98" width="20" height="26" rx="9" />
      <rect className="ch-window" x="142" y="98" width="20" height="26" rx="9" />
      {/* 地面 */}
      <rect className="ch-ground" x="20" y="158" width="180" height="7" rx="3.5" />
      {/* 小花 */}
      <circle className="ch-flower" cx="30" cy="150" r="5" />
      <circle className="ch-flower" cx="192" cy="150" r="5" />
    </svg>
  );
}

/** 邮戳（圆环 + 波浪线） */
export function Postmark({ text }: { text: string }) {
  return (
    <svg className="postmark-svg" viewBox="0 0 120 120" aria-hidden="true">
      <circle className="pm-ring" cx="60" cy="60" r="52" />
      <circle className="pm-ring" cx="60" cy="60" r="44" />
      <text className="pm-text" x="60" y="57" textAnchor="middle">
        {text.split(" · ")[0]}
      </text>
      <text className="pm-text" x="60" y="74" textAnchor="middle">
        {text.split(" · ")[1]}
      </text>
      <path className="pm-wave" d="M20 60 q6 -5 12 0 t12 0 t12 0 t12 0 t12 0 t12 0" />
    </svg>
  );
}
