"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import { PROJECT, type Day, type Video, type DayStatus } from "@/app/data/project";

/* ── icons ──────────────────────────────────────────────────────────── */
function IconCheck({ size = 10 }: { size?: number }) {
  return (
    <svg viewBox="0 0 10 10" width={size} height={size} fill="none">
      <path d="M1.5 5.5l2 2L8.5 2.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconClock() {
  return (
    <svg viewBox="0 0 14 14" width={14} height={14} fill="none">
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7 4v3l2 1.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function IconDashed() {
  return (
    <svg viewBox="0 0 14 14" width={14} height={14} fill="none">
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.6" strokeDasharray="2 2" />
    </svg>
  );
}
function IconLeft() {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" style={{ color: "var(--accent)" }}>
      <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconRight() {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" style={{ color: "var(--accent)" }}>
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconPlay() {
  return (
    <svg viewBox="0 0 24 24" width={22} height={22} style={{ fill: "var(--navy)", marginLeft: 3 }}>
      <path d="M8 5v14l11-7z" />
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

/* ── status helpers ─────────────────────────────────────────────────── */
function statusClass(s: DayStatus) {
  return s === "complete" ? "s-complete" : s === "progress" ? "s-progress" : "s-pending";
}

function StatusBadge({ status }: { status: DayStatus }) {
  if (status === "complete") {
    return (
      <span className="badge badge-complete">
        <IconCheck size={14} />
        Complete
      </span>
    );
  }
  if (status === "progress") {
    return (
      <span className="badge badge-progress">
        <IconClock />
        In Progress
      </span>
    );
  }
  return (
    <span className="badge badge-pending">
      <IconDashed />
      Scheduled
    </span>
  );
}

/* ── video card ─────────────────────────────────────────────────────── */
function VideoCard({ video, index, dayId, featured }: { video: Video; index: number; dayId: number; featured?: boolean }) {
  const gradId = `vg-${dayId}-${index}`;
  const patId = `vp-${dayId}-${index}`;

  const thumbnail = video.youtubeId ? (
    <iframe
      src={`https://www.youtube.com/embed/${video.youtubeId}`}
      title={video.title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      loading="lazy"
    />
  ) : (
    <>
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
        <text x="160" y="170" textAnchor="middle" fill="rgba(214,234,248,0.35)" fontFamily="var(--font-jetbrains-mono), ui-monospace, monospace" fontSize="9" letterSpacing="2">
          VIDEO PLACEHOLDER · 1920×1080
        </text>
      </svg>
      <div className="play-overlay">
        <div className="play-btn">
          <IconPlay />
        </div>
      </div>
    </>
  );

  return (
    <article className={`video-card${featured ? " video-card-featured" : ""}`}>
      <div className="video-thumb">
        {thumbnail}
      </div>
      <div className="video-body">
        <h3 className="video-title">{video.title}</h3>
        <p className="video-desc">{video.desc}</p>
      </div>
    </article>
  );
}

/* ── day content ─────────────────────────────────────────────────────── */
function DayContent({
  day,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  prevDay,
  nextDay,
}: {
  day: Day;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  prevDay?: Day;
  nextDay?: Day;
}) {
  const completedCount = day.tasks.filter((t) => t.done).length;
  const isSingleVideo = day.videos.length === 1;

  return (
    <>
      <div className="day-head">
        <div className="day-head-left">
          <div className="day-eyebrow">Daily Operations Log</div>
          <h1 className="day-title">{day.date}</h1>
          <div className="day-subtitle">
            {day.weekday} · Punta Engaño, Lapu-Lapu City, Cebu · RO Sinker Installation
          </div>
        </div>
        <StatusBadge status={day.status} />
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
        <h2 className="section-title">Video Documentation</h2>
      </div>

      <div className={isSingleVideo ? "video-grid-single" : "video-grid"}>
        {day.videos.map((v, i) => (
          <VideoCard key={i} video={v} index={i} dayId={day.id} featured={isSingleVideo} />
        ))}
      </div>

      <div className="section-head">
        <h2 className="section-title">Day Summary</h2>
        <div className="section-meta">
          {completedCount} of {day.tasks.length} tasks complete
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
                  <span style={{ color: "var(--text-muted)", fontSize: 13 }}>— ready for next day&apos;s installation</span>
                </div>
              )}
              {day.sig && <div className="notes-sig mono">{day.sig}</div>}
            </div>
          </div>
        </div>
      </div>

      <div className="day-nav">
        <button className="nav-btn" onClick={onPrev} disabled={!hasPrev} type="button">
          <IconLeft />
          <div>
            <span className="nav-label">Previous</span>
            <span className="nav-day">
              {hasPrev && prevDay ? prevDay.date : "— Start of log —"}
            </span>
          </div>
        </button>
        <button className="nav-btn nav-btn-next" onClick={onNext} disabled={!hasNext} type="button">
          <IconRight />
          <div>
            <span className="nav-label">Next</span>
            <span className="nav-day">
              {hasNext && nextDay ? nextDay.date : "— End of log —"}
            </span>
          </div>
        </button>
      </div>
    </>
  );
}

/* ── main component ──────────────────────────────────────────────────── */
export default function DailyDocumentation() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [visible, setVisible] = useState(false);
  const stripRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  const selectDay = useCallback(
    (idx: number) => {
      if (idx === currentIdx || isAnimating.current) return;
      isAnimating.current = true;
      setVisible(false);
      setTimeout(() => {
        setCurrentIdx(idx);
        isAnimating.current = false;
        requestAnimationFrame(() => setVisible(true));

        const strip = stripRef.current;
        if (strip) {
          const btn = strip.children[idx] as HTMLElement;
          if (btn) {
            const wrap = strip.parentElement!;
            const btnRect = btn.getBoundingClientRect();
            const wrapRect = wrap.getBoundingClientRect();
            if (btnRect.left < wrapRect.left || btnRect.right > wrapRect.right) {
              wrap.scrollTo({ left: btn.offsetLeft - 16, behavior: "smooth" });
            }
          }
        }
      }, 220);
    },
    [currentIdx]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && currentIdx > 0) selectDay(currentIdx - 1);
      if (e.key === "ArrowRight" && currentIdx < PROJECT.days.length - 1) selectDay(currentIdx + 1);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [currentIdx, selectDay]);

  const day = PROJECT.days[currentIdx];

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
                Project Complete
              </span>
            </div>
            <div className="project-name">RO Sinker Installation — Punta Engaño, Lapu-Lapu City, Cebu</div>
            <div className="project-id mono">JOB #OT-JOB-2026-001 · Client: Liyann Construction and Services</div>
          </div>
        </div>
      </header>

      <div className="subbar">
        <div className="subbar-inner">
          <div className="subbar-label">Daily Log</div>
          <div className="day-strip-wrap">
            <div className="day-strip" ref={stripRef}>
              {PROJECT.days.map((d, i) => (
                <button
                  key={d.id}
                  className={`day-btn ${statusClass(d.status)} ${i === currentIdx ? "active" : ""}`}
                  onClick={() => selectDay(i)}
                  type="button"
                  aria-label={`Switch to ${d.date}`}
                  aria-current={i === currentIdx ? "true" : undefined}
                >
                  <span className="day-num">
                    <span className="day-dot" />
                    {d.weekday.toUpperCase()}
                  </span>
                  <span className="day-date">{d.dateShort}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <main className="doc-main">
        <div className={`day-content${visible ? " visible" : ""}`}>
          <DayContent
            day={day}
            onPrev={() => selectDay(currentIdx - 1)}
            onNext={() => selectDay(currentIdx + 1)}
            hasPrev={currentIdx > 0}
            hasNext={currentIdx < PROJECT.days.length - 1}
            prevDay={PROJECT.days[currentIdx - 1]}
            nextDay={PROJECT.days[currentIdx + 1]}
          />
        </div>
      </main>

      <footer className="app-footer">
        <div className="mono">OT-DOC-2026-001 · 8 Days Logged · 30 Sinkers Installed · Project Complete</div>
        <div className="footer-address">
          <span>© 2026 Oceantech Offshore Diving Services</span>
          <span className="footer-sep">·</span>
          <span>Maribago, Lapu-Lapu City, Cebu</span>
        </div>
      </footer>
    </>
  );
}
