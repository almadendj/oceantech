"use client";

import Image from "next/image";
import { useEffect } from "react";
import type { Photo } from "@/app/data/project";

interface LightboxProps {
  photos: Photo[];
  index: number;
  onClose: () => void;
  onChange: (index: number) => void;
}

export default function Lightbox({ photos, index, onClose, onChange }: LightboxProps) {
  const photo = photos[index];
  const hasPrev = index > 0;
  const hasNext = index < photos.length - 1;

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onChange(index - 1);
      if (e.key === "ArrowRight" && hasNext) onChange(index + 1);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [index, hasPrev, hasNext, onClose, onChange]);

  return (
    <div className="lb-overlay" onClick={onClose}>
      <div className="lb-content" onClick={(e) => e.stopPropagation()}>
        <button className="lb-close" onClick={onClose} type="button" aria-label="Close">
          <svg viewBox="0 0 24 24" width={20} height={20} fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </button>

        <button
          className="lb-nav lb-nav-prev"
          onClick={() => onChange(index - 1)}
          disabled={!hasPrev}
          type="button"
          aria-label="Previous"
        >
          <svg viewBox="0 0 24 24" width={28} height={28} fill="none">
            <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="lb-img-wrap">
          <Image
            src={photo.src}
            alt={photo.label}
            fill
            style={{ objectFit: "contain" }}
            sizes="90vw"
            priority
          />
        </div>

        <button
          className="lb-nav lb-nav-next"
          onClick={() => onChange(index + 1)}
          disabled={!hasNext}
          type="button"
          aria-label="Next"
        >
          <svg viewBox="0 0 24 24" width={28} height={28} fill="none">
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="lb-caption">
          <span className="lb-caption-label">{photo.label}</span>
          <span className="lb-caption-count mono">{index + 1} / {photos.length}</span>
        </div>
      </div>
    </div>
  );
}
