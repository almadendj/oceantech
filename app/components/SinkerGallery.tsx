"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ALL_SINKER_PHOTOS, PROJECT } from "@/app/data/project";
import Lightbox from "@/app/components/Lightbox";

export default function SinkerGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Build a lookup: src → day number(s)
  const srcToDays: Record<string, number[]> = {};
  PROJECT.days.forEach((day) => {
    day.photos.forEach((p) => {
      if (!srcToDays[p.src]) srcToDays[p.src] = [];
      if (!srcToDays[p.src].includes(day.id)) srcToDays[p.src].push(day.id);
    });
  });

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
            <div className="project-id mono">JOB #OT-JOB-2026-001 · Confidential Client</div>
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
              Daily Log
            </Link>
            <span style={{ color: "var(--border)" }}>|</span>
            <div className="subbar-label">Sinker Gallery</div>
          </div>
          <div className="mono" style={{ fontSize: 12, color: "var(--text-muted)" }}>
            {ALL_SINKER_PHOTOS.length} photos · 30 sinkers
          </div>
        </div>
      </div>

      <main className="doc-main">
        <div className="gallery-page-head">
          <h1 className="gallery-page-title">Sinker Photo Documentation</h1>
          <p className="gallery-page-sub">
            Complete photographic record of all 30 RO sinkers installed across 8 operational days.
            Click any photo to enlarge. Use arrow keys to navigate.
          </p>
        </div>

        <div className="sinker-grid">
          {ALL_SINKER_PHOTOS.map((photo, i) => {
            const days = srcToDays[photo.src] ?? [];
            return (
              <button
                key={i}
                className="sinker-card"
                onClick={() => setLightboxIndex(i)}
                type="button"
                aria-label={`View ${photo.label}`}
              >
                <div className="sinker-card-img">
                  <Image
                    src={photo.src}
                    alt={photo.label}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 640px) 50vw, (max-width: 960px) 33vw, 20vw"
                  />
                  <div className="sinker-card-overlay">
                    <svg viewBox="0 0 24 24" width={22} height={22} fill="none">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="sinker-card-body">
                  <span className="sinker-card-label mono">{photo.label}</span>
                  {days.length > 0 && (
                    <span className="sinker-card-day">
                      Day {days.join(", ")}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
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

      {lightboxIndex !== null && (
        <Lightbox
          photos={ALL_SINKER_PHOTOS}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onChange={setLightboxIndex}
        />
      )}
    </>
  );
}
