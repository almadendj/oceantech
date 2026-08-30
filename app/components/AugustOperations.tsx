import Image from "next/image";
import Link from "next/link";
import {
  AUGUST_DAYS,
  AUGUST_SINKERS_INSTALLED,
  AUGUST_VIDEO_COUNT,
  DAYS_LOGGED,
  SINKERS_INSTALLED,
  type Day,
  type Video,
} from "@/app/data/project";

/* ── icons ──────────────────────────────────────────────────────────── */
function IconCheck({ size = 10 }: { size?: number }) {
  return (
    <svg viewBox="0 0 10 10" width={size} height={size} fill="none">
      <path d="M1.5 5.5l2 2L8.5 2.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconTasks() {
  return (
    <svg viewBox="0 0 16 16" width={12} height={12} fill="none" style={{ opacity: 0.7 }}>
      <rect x="2.5" y="2.5" width="11" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5.5 8l1.8 1.8L11 6.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconNotes() {
  return (
    <svg viewBox="0 0 16 16" width={12} height={12} fill="none" style={{ opacity: 0.7 }}>
      <path d="M3 3h10M3 6h10M3 9h7M3 12h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
function IconUpload() {
  return (
    <svg viewBox="0 0 14 14" width={14} height={14} fill="none">
      <path d="M7 10V3M4.2 5.8L7 3l2.8 2.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.5 10.5v1h9v-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/* ── video card ─────────────────────────────────────────────────────── */
function VideoCard({ video, index, dayId, featured }: { video: Video; index: number; dayId: number; featured?: boolean }) {
  const gradId = `ao-vg-${dayId}-${index}`;
  const patId = `ao-vp-${dayId}-${index}`;

  const thumbnail = video.youtubeId ? (
    <iframe
      src={`https://www.youtube.com/embed/${video.youtubeId}`}
      title={video.title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      loading="lazy"
    />
  ) : (
    <svg className="placeholder" viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={video.color1} />
          <stop offset="100%" stopColor={video.color2} />
        </linearGradient>
        <pattern id={patId} x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="14" stroke="rgba(255,255,255,0.04)" strokeWidth="7" />
        </pattern>
      </defs>
      <rect width="320" height="180" fill={`url(#${gradId})`} />
      <rect width="320" height="180" fill={`url(#${patId})`} />
      <text x="160" y="94" textAnchor="middle" fill="rgba(214,234,248,0.55)" fontFamily="var(--font-jetbrains-mono), ui-monospace, monospace" fontSize="11" letterSpacing="2">
        FOOTAGE UPLOADING
      </text>
      <text x="160" y="112" textAnchor="middle" fill="rgba(214,234,248,0.3)" fontFamily="var(--font-jetbrains-mono), ui-monospace, monospace" fontSize="8" letterSpacing="1.5">
        VIDEO TO FOLLOW
      </text>
    </svg>
  );

  return (
    <article className={`video-card${featured ? " video-card-featured" : ""}`}>
      <div className="video-thumb">{thumbnail}</div>
      <div className="video-body">
        <h3 className="video-title">{video.title}</h3>
        <p className="video-desc">{video.desc}</p>
      </div>
    </article>
  );
}

/* ── day block ──────────────────────────────────────────────────────── */
function DayBlock({ day }: { day: Day }) {
  const publishedCount = day.videos.filter((v) => v.youtubeId).length;
  const isSingleVideo = day.videos.length === 1;

  return (
    <section className="ao-day" id={`day-${day.id}`}>
      <div className="day-head">
        <div className="day-head-left">
          <div className="day-eyebrow">Day {day.id}</div>
          <h2 className="day-title">{day.date}</h2>
          <div className="day-subtitle">
            {day.weekday} · Punta Engaño, Lapu-Lapu City, Cebu · RO Sinker Installation
          </div>
        </div>
        {publishedCount > 0 ? (
          <span className="badge badge-complete">
            <IconCheck size={14} />
            Footage Available
          </span>
        ) : (
          <span className="badge badge-pending">
            <IconUpload />
            Footage Uploading
          </span>
        )}
      </div>

      <div className="keyfacts">
        <div className="keyfact">
          <div className="keyfact-label">Sinkers Installed</div>
          <div className="keyfact-value mono">{day.sinkersInstalled}</div>
          <div className="keyfact-sub">This day</div>
        </div>
        <div className="keyfact">
          <div className="keyfact-label">Running Total</div>
          <div className="keyfact-value mono">{day.sinkersTotal}</div>
          <div className="keyfact-sub">Cumulative</div>
        </div>
        <div className="keyfact">
          <div className="keyfact-label">Depth Range</div>
          <div className="keyfact-value mono">{day.depthRange}</div>
          <div className="keyfact-sub">Working depth</div>
        </div>
        <div className="keyfact">
          <div className="keyfact-label">Dive Team</div>
          <div className="keyfact-value mono">{day.teamSize}</div>
          <div className="keyfact-sub">Commercial divers</div>
        </div>
      </div>

      <div className="section-head">
        <h3 className="section-title">Video Documentation</h3>
        <div className="section-meta">
          {publishedCount > 0
            ? `${publishedCount} video${publishedCount !== 1 ? "s" : ""}`
            : "Awaiting upload"}
        </div>
      </div>

      <div className={isSingleVideo ? "video-grid-single" : "video-grid"}>
        {day.videos.map((v, i) => (
          <VideoCard key={i} video={v} index={i} dayId={day.id} featured={isSingleVideo} />
        ))}
      </div>

      <div className="section-head">
        <h3 className="section-title">Day Summary</h3>
        <div className="section-meta">
          {day.tasks.filter((t) => t.done).length} of {day.tasks.length} tasks complete
        </div>
      </div>

      <div className="summary">
        <div className="summary-grid">
          <div className="summary-field-wide">
            <div className="summary-label">
              <IconTasks />
              Key Tasks
            </div>
            <ul className="tasks">
              {day.tasks.map((t, i) => (
                <li key={i} className={t.done ? "" : "task-pending"}>
                  <span className={`task-check${t.done ? "" : " task-check-pending"}`}>
                    {t.done && <IconCheck />}
                  </span>
                  <span>{t.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="summary-field-wide">
            <div className="summary-label">
              <IconNotes />
              Operations Summary
            </div>
            <div className="notes">
              {day.notes}
              {day.sinkersStaged !== undefined && (
                <div style={{ marginTop: 10, paddingTop: 10, borderTop: "1px solid var(--border)" }}>
                  <span style={{ fontWeight: 600, color: "var(--accent)" }}>
                    {day.sinkersStaged} sinkers pre-staged on deck
                  </span>{" "}
                  <span style={{ color: "var(--text-muted)", fontSize: 13 }}>
                    — ready for next day&apos;s installation
                  </span>
                </div>
              )}
              {day.sig && <div className="notes-sig mono">{day.sig}</div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── main component ─────────────────────────────────────────────────── */
export default function AugustOperations() {
  const firstDay = AUGUST_DAYS[0];
  const lastDay = AUGUST_DAYS[AUGUST_DAYS.length - 1];
  const startTotal = firstDay.sinkersTotal - firstDay.sinkersInstalled;
  const pendingDays = AUGUST_DAYS.filter((d) => d.videos.every((v) => !v.youtubeId));

  return (
    <>
      <header className="app-header">
        <div className="header-inner">
          <div className="brand">
            <div className="brand-mark" aria-hidden="true">
              <Image
                src="/oceantech-logo-sm.png"
                alt="Oceantech logo"
                width={36}
                height={35}
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
            <div className="brand-text">
              <div className="brand-name">Oceantech Offshore Diving Services</div>
              <div className="brand-tag">Commercial Diving &amp; Marine Engineering</div>
            </div>
          </div>
          <div className="project-meta">
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 6 }}>
              <span className="badge badge-complete" style={{ fontSize: 11, padding: "3px 10px" }}>
                <IconCheck size={12} />
                August Phase Complete
              </span>
            </div>
            <div className="project-name">RO Sinker Installation — Punta Engaño, Lapu-Lapu City, Cebu</div>
            <div className="project-id mono">JOB #OT-JOB-2026-001</div>
          </div>
        </div>
      </header>

      <div className="subbar">
        <div className="subbar-inner" style={{ justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Link href="/" className="gallery-back-link">
              <svg viewBox="0 0 24 24" width={16} height={16} fill="none">
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Sinker Gallery
            </Link>
            <span style={{ color: "var(--border)" }}>|</span>
            <div className="subbar-label">August Operations</div>
          </div>
          <Link href="/log" className="gallery-link">
            <svg viewBox="0 0 16 16" width={13} height={13} fill="none" style={{ flexShrink: 0 }}>
              <path d="M3 2.5h10v11H3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
              <path d="M5.5 5.5h5M5.5 8h5M5.5 10.5h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            Daily Log
          </Link>
        </div>
      </div>

      <main className="doc-main">
        <div className="gallery-page-head">
          <h1 className="gallery-page-title">August 2026 Operations</h1>
          <p className="gallery-page-sub">
            Continuation of RO sinker installation following the May campaign.{" "}
            {AUGUST_DAYS.length} dive days across {firstDay.dateShort} and{" "}
            {AUGUST_DAYS[1].dateShort}–{lastDay.dateShort}, advancing the pipeline from{" "}
            {startTotal} to {lastDay.sinkersTotal} installed sinkers.
          </p>
        </div>

        <div className="keyfacts">
          <div className="keyfact">
            <div className="keyfact-label">Dive Days</div>
            <div className="keyfact-value mono">{AUGUST_DAYS.length}</div>
            <div className="keyfact-sub">August phase</div>
          </div>
          <div className="keyfact">
            <div className="keyfact-label">Sinkers Installed</div>
            <div className="keyfact-value mono">{AUGUST_SINKERS_INSTALLED}</div>
            <div className="keyfact-sub">
              {startTotal} → {lastDay.sinkersTotal} cumulative
            </div>
          </div>
          <div className="keyfact">
            <div className="keyfact-label">Depth Range</div>
            <div className="keyfact-value mono">5–15 m</div>
            <div className="keyfact-sub">Working depth</div>
          </div>
          <div className="keyfact">
            <div className="keyfact-label">Videos Published</div>
            <div className="keyfact-value mono">{AUGUST_VIDEO_COUNT}</div>
            <div className="keyfact-sub">
              {pendingDays.length > 0 ? `${pendingDays.length} days pending` : "All days covered"}
            </div>
          </div>
        </div>

        {pendingDays.length > 0 && (
          <div className="ao-note">
            <span className="ao-note-icon" aria-hidden="true">
              <IconUpload />
            </span>
            <span>
              Footage for{" "}
              <strong>
                {pendingDays.map((d) => d.dateShort).join(", ")}
              </strong>{" "}
              is still uploading. Those days show placeholder cards below and will display their
              video once published.
            </span>
          </div>
        )}

        <div className="sg-list">
          {AUGUST_DAYS.map((day) => (
            <DayBlock key={day.id} day={day} />
          ))}
        </div>
      </main>

      <footer className="app-footer">
        <div className="mono">
          OT-DOC-2026-001 · {DAYS_LOGGED} Days Logged · {SINKERS_INSTALLED} Sinkers Installed · Project Complete
        </div>
        <div className="footer-address">
          <span>© 2026 Oceantech Offshore Diving Services</span>
          <span className="footer-sep">·</span>
          <span>Maribago, Lapu-Lapu City, Cebu</span>
        </div>
      </footer>
    </>
  );
}
