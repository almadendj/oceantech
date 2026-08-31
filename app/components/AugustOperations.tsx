"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import {
  AUGUST_CLIPS,
  AUGUST_DAYS,
  AUGUST_DAYS_WITHOUT_FOOTAGE,
  AUGUST_DEPTH_RANGE,
  AUGUST_LAST_DAY,
  AUGUST_SINKERS_INSTALLED,
  AUGUST_START_TOTAL,
  AUGUST_VIDEO_COUNT,
  DAYS_LOGGED,
  SINKERS_INSTALLED,
  type Day,
  type Task,
  type TaskKind,
} from "@/app/data/project";

/* ── icons ──────────────────────────────────────────────────────────── */
function IconCheck({ size = 10 }: { size?: number }) {
  return (
    <svg viewBox="0 0 10 10" width={size} height={size} fill="none">
      <path d="M1.5 5.5l2 2L8.5 2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconPlay({ size = 9 }: { size?: number }) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor">
      <path d="M4 2.5l9 5.5-9 5.5V2.5z" />
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
function IconInfo() {
  return (
    <svg viewBox="0 0 14 14" width={14} height={14} fill="none">
      <circle cx="7" cy="7" r="5.6" stroke="currentColor" strokeWidth="1.4" />
      <path d="M7 6.2v4M7 4.1v.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/* ── task classification ────────────────────────────────────────────── */
const KIND_LABEL: Record<TaskKind, string> = {
  install: "Installed",
  reposition: "Repositioned",
  transfer: "Transferred",
  prepare: "Prepared",
};

function TaskChip({ task }: { task: Task }) {
  if (!task.kind) return <span className="ao-chip">{task.text}</span>;
  return (
    <span className={`ao-chip ao-chip-${task.kind}`}>
      <span className="ao-chip-kind">{KIND_LABEL[task.kind]}</span>
      {task.text}
    </span>
  );
}

/* ── main component ─────────────────────────────────────────────────── */
export default function AugustOperations() {
  const [activeKey, setActiveKey] = useState<string>(AUGUST_CLIPS[0]?.key ?? "");
  const [autoplay, setAutoplay] = useState(false);
  const playerRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);

  const activeClip =
    AUGUST_CLIPS.find((c) => c.key === activeKey) ?? AUGUST_CLIPS[0];

  const selectClip = useCallback((key: string) => {
    setActiveKey(key);
    setAutoplay(true);
    playerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      railRef.current
        ?.querySelector<HTMLElement>("[data-active='true']")
        ?.scrollIntoView({ block: "nearest" });
    }, 100);
  }, []);

  const iframeSrc = activeClip
    ? `https://www.youtube.com/embed/${activeClip.youtubeId}${autoplay ? "?autoplay=1" : ""}`
    : "";

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
              <span className="badge badge-info" style={{ fontSize: 11, padding: "3px 10px" }}>
                August Phase · {AUGUST_DAYS.length} Dive Days Logged
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
          <div className="subbar-links">
            <div className="mono" style={{ fontSize: 12, color: "var(--text-muted)" }}>
              {AUGUST_DAYS.length} dive days · {AUGUST_VIDEO_COUNT} clips
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
      </div>

      <main className="doc-main">
        <div className="gallery-page-head">
          <h1 className="gallery-page-title">August 2026 Operations</h1>
          <p className="gallery-page-sub">
            Continuation of RO sinker installation following the May campaign — {AUGUST_DAYS.length} dive
            days on 18 and 24–27 August, working the shallow and mid-depth sections of the pipeline.
            Cumulative placement advanced from {AUGUST_START_TOTAL} to {AUGUST_LAST_DAY.sinkersTotal} sinkers.
            No still photography was recorded for this phase; the record below is video and the written
            operations log.
          </p>
        </div>

        <div className="keyfacts">
          <div className="keyfact">
            <div className="keyfact-label">Dive Days</div>
            <div className="keyfact-value mono">{AUGUST_DAYS.length}</div>
            <div className="keyfact-sub">18, 24–27 Aug</div>
          </div>
          <div className="keyfact">
            <div className="keyfact-label">Sinkers Installed</div>
            <div className="keyfact-value mono">{AUGUST_SINKERS_INSTALLED}</div>
            <div className="keyfact-sub">
              {AUGUST_START_TOTAL} → {AUGUST_LAST_DAY.sinkersTotal} cumulative
            </div>
          </div>
          <div className="keyfact">
            <div className="keyfact-label">Depth Range</div>
            <div className="keyfact-value mono">{AUGUST_DEPTH_RANGE}</div>
            <div className="keyfact-sub">Working depth</div>
          </div>
          <div className="keyfact">
            <div className="keyfact-label">Clips on File</div>
            <div className="keyfact-value mono">{AUGUST_VIDEO_COUNT}</div>
            <div className="keyfact-sub">
              across {AUGUST_DAYS.length - AUGUST_DAYS_WITHOUT_FOOTAGE.length} of {AUGUST_DAYS.length} days
            </div>
          </div>
        </div>

        {/* ── Video showcase ───────────────────────────────────────── */}
        <div className="section-head">
          <h2 className="section-title">Video Documentation</h2>
          <div className="section-meta">
            {AUGUST_VIDEO_COUNT} clip{AUGUST_VIDEO_COUNT !== 1 ? "s" : ""} · select from index
          </div>
        </div>

        <div ref={playerRef} className="sg-video-section">
          <div className="sg-video-player-wrap">
            <div className="sg-video-player">
              {activeClip && (
                <iframe
                  key={activeClip.key}
                  src={iframeSrc}
                  title={activeClip.video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            </div>
            {activeClip && (
              <div className="ao-player-caption">
                <div className="ao-player-day mono">
                  Day {activeClip.dayId} · {activeClip.dateShort} · {activeClip.weekday}
                  {activeClip.partsInDay > 1 && (
                    <> · Part {activeClip.part} of {activeClip.partsInDay}</>
                  )}
                </div>
                <div className="ao-player-title">{activeClip.video.title}</div>
                <p className="ao-player-desc">{activeClip.video.desc}</p>
              </div>
            )}
          </div>

          <div className="sg-video-index ao-video-index">
            <div className="sg-video-index-head">
              <span className="sg-video-index-title">Clip Index</span>
              <span className="mono" style={{ fontSize: 10, color: "var(--text-muted)" }}>
                {AUGUST_VIDEO_COUNT} clips
              </span>
            </div>
            <div className="sg-video-index-list" ref={railRef}>
              {AUGUST_DAYS.map((day) => {
                const clips = AUGUST_CLIPS.filter((c) => c.dayId === day.id);
                return (
                  <div key={day.id}>
                    <div className="ao-rail-group mono">
                      <span>Day {day.id} · {day.dateShort}</span>
                      <span className="ao-rail-group-count">
                        {day.sinkersInstalled} installed
                      </span>
                    </div>
                    {clips.length === 0 ? (
                      <div className="ao-rail-empty">Awaiting footage</div>
                    ) : (
                      clips.map((clip) => {
                        const isActive = clip.key === activeKey;
                        return (
                          <button
                            key={clip.key}
                            type="button"
                            className={`sg-ts-item ao-clip-item${isActive ? " sg-ts-active" : ""}`}
                            data-active={isActive ? "true" : undefined}
                            onClick={() => selectClip(clip.key)}
                            title={clip.video.title}
                          >
                            <span className="sg-ts-time mono">
                              {clip.partsInDay > 1 ? `${clip.part}/${clip.partsInDay}` : "▸"}
                            </span>
                            <span className="sg-ts-label">{clip.railLabel}</span>
                          </button>
                        );
                      })
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {AUGUST_DAYS_WITHOUT_FOOTAGE.length > 0 && (
          <div className="ao-note">
            <span className="ao-note-icon" aria-hidden="true">
              <IconInfo />
            </span>
            <span>
              No video is on file yet for{" "}
              <strong>{AUGUST_DAYS_WITHOUT_FOOTAGE.map((d) => d.dateShort).join(" and ")}</strong>.
              Those days are documented below from the written operations log and will appear in the
              clip index once footage is published.
            </span>
          </div>
        )}

        {/* ── Operations table ─────────────────────────────────────── */}
        <div className="section-head">
          <h2 className="section-title">Work Performed</h2>
          <div className="section-meta">
            {AUGUST_SINKERS_INSTALLED} installed · {AUGUST_DAYS.length} dive days
          </div>
        </div>

        <div className="ao-table-wrap">
          <table className="ao-table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Date</th>
                <th className="ao-num">Installed</th>
                <th className="ao-num">Total</th>
                <th>Depth</th>
                <th>Recorded work</th>
                <th className="ao-num">Clips</th>
              </tr>
            </thead>
            <tbody>
              {AUGUST_DAYS.map((day) => {
                const clips = AUGUST_CLIPS.filter((c) => c.dayId === day.id);
                return (
                  <tr key={day.id}>
                    <td className="mono ao-num">{day.id}</td>
                    <td>
                      <a href={`#day-${day.id}`} className="ao-table-date">
                        {day.dateShort}
                      </a>
                      <div className="ao-table-weekday">{day.weekday}</div>
                    </td>
                    <td className="mono ao-num">{day.sinkersInstalled}</td>
                    <td className="mono ao-num ao-muted">{day.sinkersTotal}</td>
                    <td className="mono ao-muted">{day.depthRange}</td>
                    <td>
                      <div className="ao-chips">
                        {day.tasks.map((t, i) => (
                          <TaskChip key={i} task={t} />
                        ))}
                      </div>
                    </td>
                    <td className="ao-num">
                      {clips.length > 0 ? (
                        <button
                          type="button"
                          className="sg-ts-badge"
                          onClick={() => selectClip(clips[0].key)}
                          title={`Play footage from ${day.dateShort}`}
                        >
                          <IconPlay />
                          {clips.length}
                        </button>
                      ) : (
                        <span className="ao-muted mono" style={{ fontSize: 11 }}>
                          —
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={2}>August phase total</td>
                <td className="mono ao-num">{AUGUST_SINKERS_INSTALLED}</td>
                <td className="mono ao-num">{AUGUST_LAST_DAY.sinkersTotal}</td>
                <td className="mono">{AUGUST_DEPTH_RANGE}</td>
                <td />
                <td className="mono ao-num">{AUGUST_VIDEO_COUNT}</td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* ── Per-day detail ───────────────────────────────────────── */}
        <div className="section-head">
          <h2 className="section-title">Daily Records</h2>
          <div className="section-meta">As recorded in the operations log</div>
        </div>

        <div className="sg-list">
          {AUGUST_DAYS.map((day) => (
            <DayBlock key={day.id} day={day} onPlay={selectClip} />
          ))}
        </div>
      </main>

      <footer className="app-footer">
        <div className="mono">
          OT-DOC-2026-001 · {DAYS_LOGGED} Days Logged · {SINKERS_INSTALLED} Sinkers Installed ·
          Latest entry {AUGUST_LAST_DAY.date}
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

/* ── day block ──────────────────────────────────────────────────────── */
function DayBlock({ day, onPlay }: { day: Day; onPlay: (key: string) => void }) {
  const clips = AUGUST_CLIPS.filter((c) => c.dayId === day.id);

  return (
    <section className="ao-day" id={`day-${day.id}`}>
      <div className="day-head">
        <div className="day-head-left">
          <div className="day-eyebrow">Day {day.id}</div>
          <h3 className="day-title">{day.date}</h3>
          <div className="day-subtitle">
            {day.weekday} · Punta Engaño, Lapu-Lapu City, Cebu · RO Sinker Installation
          </div>
        </div>
        {clips.length > 0 ? (
          <button type="button" className="ao-play-day" onClick={() => onPlay(clips[0].key)}>
            <IconPlay size={11} />
            Play {clips.length} clip{clips.length !== 1 ? "s" : ""}
          </button>
        ) : (
          <span className="badge badge-pending">No footage on file</span>
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

      <div className="summary">
        <div className="summary-grid ao-summary-grid">
          <div className="summary-field">
            <div className="summary-label">
              <IconNotes />
              Operations Summary
            </div>
            <div className="notes">
              {day.notes}
              {day.sinkersStaged !== undefined && (
                <div className="ao-staged-note">
                  <span className="ao-staged-count">
                    {day.sinkersStaged} sinker{day.sinkersStaged !== 1 ? "s" : ""} prepared for
                    placement
                  </span>{" "}
                  <span className="ao-staged-sub">— not yet installed as of this day</span>
                </div>
              )}
              {day.sig && <div className="notes-sig mono">{day.sig}</div>}
            </div>
          </div>

          <div className="summary-field">
            <div className="summary-label">
              <IconCheck size={12} />
              Recorded Tasks
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
        </div>
      </div>
    </section>
  );
}
