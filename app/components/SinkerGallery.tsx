"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo, useRef, useCallback } from "react";
import { SINKER_GALLERY, FULL_VIDEO_ID, PROJECT, DAYS_LOGGED, SINKERS_INSTALLED } from "@/app/data/project";
import type { Photo, Timestamp } from "@/app/data/project";
import Lightbox from "@/app/components/Lightbox";

function formatTime(s: number): string {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

export default function SinkerGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeSeconds, setActiveSeconds] = useState<number | null>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const indexListRef = useRef<HTMLDivElement>(null);

  // Flat photo list for lightbox
  const allPhotos: Photo[] = useMemo(
    () =>
      SINKER_GALLERY.flatMap((item) =>
        item.type === "sinker" ? item.group.photos : []
      ),
    []
  );

  // Flat timestamp list for the video index sidebar
  const allTimestamps: Timestamp[] = useMemo(
    () =>
      SINKER_GALLERY.flatMap((item) =>
        item.type === "sinker"
          ? item.group.timestamps ?? []
          : item.timestamps ?? []
      ),
    []
  );

  const totalPhotos = allPhotos.length;

  const srcToGlobalIndex = useMemo(() => {
    const map: Record<string, number> = {};
    allPhotos.forEach((p, i) => { map[p.src] = i; });
    return map;
  }, [allPhotos]);

  const srcToDays: Record<string, number[]> = useMemo(() => {
    const map: Record<string, number[]> = {};
    PROJECT.days.forEach((day) => {
      day.photos.forEach((p) => {
        if (!map[p.src]) map[p.src] = [];
        if (!map[p.src].includes(day.id)) map[p.src].push(day.id);
      });
    });
    return map;
  }, []);

  const seekTo = useCallback((seconds: number) => {
    setActiveSeconds(seconds);
    videoRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    // Scroll the active item into view in the index list
    setTimeout(() => {
      if (indexListRef.current) {
        const active = indexListRef.current.querySelector<HTMLElement>("[data-active='true']");
        active?.scrollIntoView({ block: "nearest" });
      }
    }, 100);
  }, []);

  const iframeSrc = activeSeconds !== null
    ? `https://www.youtube.com/embed/${FULL_VIDEO_ID}?start=${activeSeconds}&autoplay=1`
    : `https://www.youtube.com/embed/${FULL_VIDEO_ID}`;

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
                <svg viewBox="0 0 10 10" width={14} height={14} fill="none">
                  <path d="M1.5 5.5l2 2L8.5 2.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Project Complete
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
            <Link href="/log" className="gallery-back-link">
              <svg viewBox="0 0 24 24" width={16} height={16} fill="none">
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Daily Log
            </Link>
            <span style={{ color: "var(--border)" }}>|</span>
            <div className="subbar-label">Sinker Gallery</div>
          </div>
          <div className="subbar-links">
            <div className="mono" style={{ fontSize: 12, color: "var(--text-muted)" }}>
              {totalPhotos} photos · 30 sinkers
            </div>
            <Link href="/august" className="gallery-link">
              <svg viewBox="0 0 16 16" width={13} height={13} fill="none" style={{ flexShrink: 0 }}>
                <rect x="2" y="3" width="12" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
                <path d="M2 6.5h12M5.5 1.5v3M10.5 1.5v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              August Ops
            </Link>
          </div>
        </div>
      </div>

      <main className="doc-main">
        <div className="gallery-page-head">
          <h1 className="gallery-page-title">Sinker Photo Documentation</h1>
          <p className="gallery-page-sub">
            Complete photographic record of all 30 RO sinkers. Click any image to enlarge,
            or use the video index to jump to a specific sinker in the full documentation video.
          </p>
        </div>

        {/* ── Video section ────────────────────────────────────────── */}
        <div ref={videoRef} className="sg-video-section">
          <div className="sg-video-player-wrap">
            <div className="sg-video-player">
              <iframe
                key={activeSeconds ?? "init"}
                src={iframeSrc}
                title="Sinker Installation — Full Documentation Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="sg-video-caption">
              <span className="mono" style={{ fontSize: 11, color: "var(--text-muted)" }}>
                Full Documentation Video · Sinkers 01–30
              </span>
              {activeSeconds !== null && (
                <button
                  className="sg-video-reset"
                  onClick={() => setActiveSeconds(null)}
                  type="button"
                >
                  ↺ Reset to start
                </button>
              )}
            </div>
          </div>

          <div className="sg-video-index">
            <div className="sg-video-index-head">
              <span className="sg-video-index-title">Video Index</span>
              <span className="mono" style={{ fontSize: 10, color: "var(--text-muted)" }}>
                {allTimestamps.length} chapters
              </span>
            </div>
            <div className="sg-video-index-list" ref={indexListRef}>
              {allTimestamps.map((ts, i) => {
                const isActive = ts.seconds === activeSeconds;
                return (
                  <button
                    key={i}
                    className={`sg-ts-item${isActive ? " sg-ts-active" : ""}`}
                    data-active={isActive ? "true" : undefined}
                    onClick={() => seekTo(ts.seconds)}
                    type="button"
                  >
                    <span className="sg-ts-time mono">{formatTime(ts.seconds)}</span>
                    <span className="sg-ts-label">{ts.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Sinker groups ─────────────────────────────────────────── */}
        <div className="sg-list">
          {SINKER_GALLERY.map((item, itemIndex) => {
            if (item.type === "gauge") {
              return (
                <div key={`gauge-${itemIndex}`} className="sg-gauge-banner">
                  <div className="sg-gauge-img-wrap">
                    <Image
                      src={item.src}
                      alt={item.label}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="100vw"
                    />
                    <div className="sg-gauge-overlay" />
                  </div>
                  <div className="sg-gauge-info">
                    <div className="sg-gauge-depth">{item.depth}</div>
                    <div className="sg-gauge-label">Depth Gauge Reading</div>
                  </div>
                  {item.timestamps && item.timestamps.length > 0 && (
                    <button
                      className="sg-gauge-ts-btn"
                      onClick={() => seekTo(item.timestamps![0].seconds)}
                      type="button"
                    >
                      <svg viewBox="0 0 16 16" width={10} height={10} fill="currentColor">
                        <path d="M4 2.5l9 5.5-9 5.5V2.5z" />
                      </svg>
                      {formatTime(item.timestamps[0].seconds)}
                    </button>
                  )}
                </div>
              );
            }

            const { group } = item;
            const primary = group.photos[0];
            const rest = group.photos.slice(1);
            const firstTs = group.timestamps?.[0];

            const days = Array.from(
              new Set(group.photos.flatMap((p) => srcToDays[p.src] ?? []))
            ).sort((a, b) => a - b);

            return (
              <div key={`sinker-${itemIndex}`} className="sg-group">
                <div className="sg-group-head">
                  <div className="sg-group-label mono">{group.label}</div>
                  <div className="sg-group-meta">
                    {firstTs && (
                      <button
                        className="sg-ts-badge"
                        onClick={() => seekTo(firstTs.seconds)}
                        type="button"
                        title={`Jump to ${firstTs.label} in video`}
                      >
                        <svg viewBox="0 0 16 16" width={9} height={9} fill="currentColor">
                          <path d="M4 2.5l9 5.5-9 5.5V2.5z" />
                        </svg>
                        {formatTime(firstTs.seconds)}
                      </button>
                    )}
                    {days.length > 0 && (
                      <span className="sg-group-day">Day {days.join(", ")}</span>
                    )}
                    <span className="sg-group-count">{group.photos.length} photos</span>
                  </div>
                </div>

                <div className="sg-group-photos">
                  <button
                    className="sg-primary-btn"
                    onClick={() => setLightboxIndex(srcToGlobalIndex[primary.src])}
                    type="button"
                    aria-label={`View ${primary.label}`}
                  >
                    <div className="sg-primary-img">
                      <Image
                        src={primary.src}
                        alt={primary.label}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 640px) 90vw, (max-width: 960px) 50vw, 35vw"
                      />
                      <div className="sg-primary-overlay">
                        <svg viewBox="0 0 24 24" width={24} height={24} fill="none">
                          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                    <div className="sg-primary-caption mono">{primary.label}</div>
                  </button>

                  {rest.length > 0 && (
                    <div className="sg-thumbs">
                      {rest.map((photo) => (
                        <button
                          key={photo.src}
                          className="sg-thumb-btn"
                          onClick={() => setLightboxIndex(srcToGlobalIndex[photo.src])}
                          type="button"
                          aria-label={`View ${photo.label}`}
                        >
                          <div className="sg-thumb-img">
                            <Image
                              src={photo.src}
                              alt={photo.label}
                              fill
                              style={{ objectFit: "cover" }}
                              sizes="(max-width: 640px) 40vw, (max-width: 960px) 22vw, 15vw"
                            />
                            <div className="sg-thumb-overlay">
                              <svg viewBox="0 0 24 24" width={16} height={16} fill="none">
                                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                          </div>
                          <div className="sg-thumb-label mono">{photo.label}</div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <footer className="app-footer">
        <div className="mono">OT-DOC-2026-001 · {DAYS_LOGGED} Days Logged · {SINKERS_INSTALLED} Sinkers Installed · Project Complete</div>
        <div className="footer-address">
          <span>© 2026 Oceantech Offshore Diving Services</span>
          <span className="footer-sep">·</span>
          <span>Maribago, Lapu-Lapu City, Cebu</span>
        </div>
      </footer>

      {lightboxIndex !== null && (
        <Lightbox
          photos={allPhotos}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onChange={setLightboxIndex}
        />
      )}
    </>
  );
}
