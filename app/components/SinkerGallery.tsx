"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { SINKER_GALLERY, PROJECT } from "@/app/data/project";
import type { Photo } from "@/app/data/project";
import Lightbox from "@/app/components/Lightbox";

export default function SinkerGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Build flat photo list (no gauges) for lightbox
  const allPhotos: Photo[] = useMemo(
    () =>
      SINKER_GALLERY.flatMap((item) =>
        item.type === "sinker" ? item.group.photos : []
      ),
    []
  );

  // Total photo count
  const totalPhotos = allPhotos.length;

  // Map src → global lightbox index
  const srcToGlobalIndex = useMemo(() => {
    const map: Record<string, number> = {};
    allPhotos.forEach((p, i) => { map[p.src] = i; });
    return map;
  }, [allPhotos]);

  // Build lookup: src → day number(s)
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
          <div className="mono" style={{ fontSize: 12, color: "var(--text-muted)" }}>
            {totalPhotos} photos · 30 sinkers
          </div>
        </div>
      </div>

      <main className="doc-main">
        <div className="gallery-page-head">
          <h1 className="gallery-page-title">Sinker Photo Documentation</h1>
          <p className="gallery-page-sub">
            Complete photographic record of all 30 RO sinkers. Each sinker shows its labeled photo,
            alternate views, and original GOPRO footage. Click any image to enlarge.
          </p>
        </div>

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
                </div>
              );
            }

            const { group } = item;
            const primary = group.photos[0];
            const rest = group.photos.slice(1);

            // Days associated with any photo in this group
            const days = Array.from(
              new Set(group.photos.flatMap((p) => srcToDays[p.src] ?? []))
            ).sort((a, b) => a - b);

            return (
              <div key={`sinker-${itemIndex}`} className="sg-group">
                <div className="sg-group-head">
                  <div className="sg-group-label mono">{group.label}</div>
                  <div className="sg-group-meta">
                    {days.length > 0 && (
                      <span className="sg-group-day">
                        Day {days.join(", ")}
                      </span>
                    )}
                    <span className="sg-group-count">{group.photos.length} photos</span>
                  </div>
                </div>

                <div className="sg-group-photos">
                  {/* Primary photo — large */}
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

                  {/* Additional photos — thumbnail grid */}
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
        <div className="mono">OT-DOC-2026-001 · 8 Days Logged · 30 Sinkers Installed · Project Complete</div>
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
