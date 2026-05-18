export type DayStatus = "complete" | "progress" | "pending";

export interface Video {
  title: string;
  desc: string;
  youtubeId?: string;
  color1: string;
  color2: string;
}

export interface Task {
  text: string;
  done: boolean;
}

export interface Photo {
  src: string;
  label: string;
}

export interface Day {
  id: number;
  date: string;
  dateShort: string;
  weekday: string;
  status: DayStatus;
  sinkersInstalled: number;
  sinkersTotal: number;
  depthRange: string;
  teamSize: number;
  sinkersStaged?: number;
  videos: Video[];
  photos: Photo[];
  tasks: Task[];
  notes: string;
  sig?: string;
}

export interface Project {
  days: Day[];
}

export interface Timestamp {
  label: string;
  seconds: number;
}

export interface SinkerGroup {
  label: string;
  photos: Photo[];
  timestamps?: Timestamp[];
}

export type GalleryItem =
  | { type: "sinker"; group: SinkerGroup }
  | { type: "gauge"; src: string; label: string; depth: string; timestamps?: Timestamp[] };

export const FULL_VIDEO_ID = "ZaDIdEHrrGk";

export const SINKER_GALLERY: GalleryItem[] = [
  {
    type: "gauge",
    src: "/Gauge_40m.jpg",
    label: "Depth Gauge — 40+ m",
    depth: "40+ m",
    timestamps: [{ label: "Gauge — 40+ m", seconds: 22 }],
  },
  {
    type: "sinker",
    group: {
      label: "Sinker 01",
      photos: [
        { src: "/Sinker_1.jpg", label: "Sinker 01" },
      ],
      timestamps: [{ label: "Sinker 01", seconds: 66 }],
    },
  },
  {
    type: "sinker",
    group: {
      label: "Sinker 02",
      photos: [
        { src: "/Sinker_2.jpg", label: "Sinker 02" },
        { src: "/Sinker_2_w_Label.jpg", label: "Sinker 02 — Labeled" },
      ],
      timestamps: [
        { label: "Sinker 02", seconds: 75 },
        { label: "Sinker 02 — Labeled", seconds: 88 },
      ],
    },
  },
  {
    type: "sinker",
    group: {
      label: "Sinker 03",
      photos: [
        { src: "/Sinker_3.jpg", label: "Sinker 03" },
        { src: "/Sinker_3_w_Label.jpg", label: "Sinker 03 — Labeled" },
      ],
      timestamps: [
        { label: "Sinker 03", seconds: 103 },
        { label: "Sinker 03 — Labeled", seconds: 141 },
      ],
    },
  },
  {
    type: "gauge",
    src: "/Gauge_30m.jpg",
    label: "Depth Gauge — 30 m",
    depth: "30 m",
    timestamps: [{ label: "Gauge — 30 m", seconds: 164 }],
  },
  {
    type: "sinker",
    group: {
      label: "Sinker 04",
      photos: [
        { src: "/Sinker_4.jpg", label: "Sinker 04" },
      ],
      timestamps: [{ label: "Sinker 04", seconds: 204 }],
    },
  },
  {
    type: "sinker",
    group: {
      label: "Sinker 05",
      photos: [
        { src: "/Sinker_5.jpg", label: "Sinker 05" },
      ],
      timestamps: [{ label: "Sinker 05", seconds: 223 }],
    },
  },
  {
    type: "sinker",
    group: {
      label: "Sinker 06",
      photos: [
        { src: "/Sinker_6.jpg", label: "Sinker 06" },
        { src: "/Sinker_6b.jpg", label: "Sinker 06 — Alt. View" },
        { src: "/Sinker_6_w_Label.jpg", label: "Sinker 06 — Labeled" },
        { src: "/Sinker_6_w_Label_b.jpg", label: "Sinker 06 — Labeled Alt." },
      ],
      timestamps: [
        { label: "Sinker 06", seconds: 247 },
        { label: "Sinker 06 — Alt. View", seconds: 248 },
        { label: "Sinker 06 — Labeled", seconds: 249 },
        { label: "Sinker 06 — Labeled Alt.", seconds: 252 },
      ],
    },
  },
  {
    type: "sinker",
    group: {
      label: "Sinker 07",
      photos: [
        { src: "/Sinker_7.jpg", label: "Sinker 07" },
        { src: "/Sinker_7_w_Label.jpg", label: "Sinker 07 — Labeled" },
        { src: "/Sinker_7_w_Label_b.jpg", label: "Sinker 07 — Labeled Alt." },
      ],
      timestamps: [
        { label: "Sinker 07", seconds: 278 },
        { label: "Sinker 07 — Labeled", seconds: 295 },
        { label: "Sinker 07 — Labeled Alt.", seconds: 298 },
      ],
    },
  },
  {
    type: "sinker",
    group: {
      label: "Sinkers 08–09",
      photos: [
        { src: "/Sinker_8_and_9.jpg", label: "Sinkers 08–09" },
        { src: "/Sinker_8_and_9_b.jpg", label: "Sinkers 08–09 — Alt. View" },
        { src: "/Sinker_8_w_Label.jpg", label: "Sinker 08 — Labeled" },
        { src: "/Sinker_9_w_Label.jpg", label: "Sinker 09 — Labeled" },
        { src: "/Sinker_26_GOPR0036.JPG", label: "Sinker 08 — GOPRO Original" },
        { src: "/Sinker_25_GOPR0035.JPG", label: "Sinker 09 — GOPRO Original" },
        { src: "/Sinker_22-23_GOPR0033.JPG", label: "Sinkers 08–09 — GOPRO Original" },
      ],
      timestamps: [
        { label: "Sinkers 08–09", seconds: 323 },
        { label: "Sinkers 08–09 — Alt. View", seconds: 332 },
        { label: "Sinker 08 — Labeled", seconds: 365 },
        { label: "Sinker 09 — Labeled", seconds: 387 },
      ],
    },
  },
  {
    type: "sinker",
    group: {
      label: "Sinker 10",
      photos: [
        { src: "/Sinker_10.jpg", label: "Sinker 10" },
        { src: "/Sinker_10_w_Label.jpg", label: "Sinker 10 — Labeled" },
        { src: "/Sinker_21_GOPR0032.JPG", label: "Sinker 10 — GOPRO Original" },
      ],
      timestamps: [
        { label: "Sinker 10", seconds: 396 },
        { label: "Sinker 10 — Labeled", seconds: 418 },
      ],
    },
  },
  {
    type: "sinker",
    group: {
      label: "Sinker 11",
      photos: [
        { src: "/Sinker_11.jpg", label: "Sinker 11" },
        { src: "/Sinker_11_w_Label.jpg", label: "Sinker 11 — Labeled" },
        { src: "/Sinker_20_GOPR0031.JPG", label: "Sinker 11 — GOPRO Original" },
      ],
      timestamps: [
        { label: "Sinker 11", seconds: 434 },
        { label: "Sinker 11 — Labeled", seconds: 447 },
      ],
    },
  },
  {
    type: "sinker",
    group: {
      label: "Sinker 12",
      photos: [
        { src: "/Sinker_12.jpg", label: "Sinker 12" },
        { src: "/Sinker_12_w_Label.jpg", label: "Sinker 12 — Labeled" },
        { src: "/Sinker_19_GOPR0030.JPG", label: "Sinker 12 — GOPRO Original" },
      ],
      timestamps: [
        { label: "Sinker 12", seconds: 458 },
        { label: "Sinker 12 — Labeled", seconds: 471 },
      ],
    },
  },
  {
    type: "sinker",
    group: {
      label: "Sinker 13",
      photos: [
        { src: "/Sinker_13.jpg", label: "Sinker 13" },
        { src: "/Sinker_13_w_Label.jpg", label: "Sinker 13 — Labeled" },
        { src: "/Sinker_18_GOPR0029.JPG", label: "Sinker 13 — GOPRO Original" },
      ],
      timestamps: [
        { label: "Sinker 13", seconds: 489 },
        { label: "Sinker 13 — Labeled", seconds: 495 },
      ],
    },
  },
  {
    type: "sinker",
    group: {
      label: "Sinkers 14–15",
      photos: [
        { src: "/Sinker_14.jpg", label: "Sinker 14" },
        { src: "/Sinker_14_w_Label.jpg", label: "Sinker 14 — Labeled" },
        { src: "/Sinker_15.jpg", label: "Sinker 15" },
        { src: "/Sinker_15_w_Label.jpg", label: "Sinker 15 — Labeled" },
        { src: "/Sinker_15_w_Label_b.jpg", label: "Sinker 15 — Labeled Alt." },
        { src: "/Sinker_16-17_GOPR0028.JPG", label: "Sinkers 14–15 — GOPRO Original" },
      ],
      timestamps: [
        { label: "Sinker 14", seconds: 512 },
        { label: "Sinker 14 — Labeled", seconds: 531 },
        { label: "Sinker 15", seconds: 540 },
        { label: "Sinker 15 — Labeled", seconds: 555 },
        { label: "Sinker 15 — Labeled Alt.", seconds: 559 },
      ],
    },
  },
  {
    type: "sinker",
    group: {
      label: "Sinker 16",
      photos: [
        { src: "/Sinker_16.jpg", label: "Sinker 16" },
        { src: "/Sinker_16_w_Label.jpg", label: "Sinker 16 — Labeled" },
        { src: "/Sinker_15_GOPR0027.JPG", label: "Sinker 16 — GOPRO Original" },
      ],
      timestamps: [
        { label: "Sinker 16", seconds: 572 },
        { label: "Sinker 16 — Labeled", seconds: 589 },
      ],
    },
  },
  {
    type: "sinker",
    group: {
      label: "Sinker 17",
      photos: [
        { src: "/Sinker_17.jpg", label: "Sinker 17" },
        { src: "/Sinker_17_w_Label.jpg", label: "Sinker 17 — Labeled" },
        { src: "/Sinker_17_w_Label_b.jpg", label: "Sinker 17 — Labeled Alt." },
        { src: "/Sinker_14_GOPR0026.JPG", label: "Sinker 17 — GOPRO Original" },
      ],
      timestamps: [
        { label: "Sinker 17", seconds: 601 },
        { label: "Sinker 17 — Labeled", seconds: 616 },
        { label: "Sinker 17 — Labeled Alt.", seconds: 622 },
      ],
    },
  },
  {
    type: "sinker",
    group: {
      label: "Sinker 18",
      photos: [
        { src: "/Sinker_18.jpg", label: "Sinker 18" },
        { src: "/Sinker_18_b.jpg", label: "Sinker 18 — Alt. View" },
        { src: "/Sinker_18_w_Label.jpg", label: "Sinker 18 — Labeled" },
        { src: "/Sinker_13_GOPR0025.JPG", label: "Sinker 18 — GOPRO Original" },
      ],
      timestamps: [
        { label: "Sinker 18", seconds: 641 },
        { label: "Sinker 18 — Alt. View", seconds: 648 },
        { label: "Sinker 18 — Labeled", seconds: 659 },
      ],
    },
  },
  {
    type: "sinker",
    group: {
      label: "Sinker 19",
      photos: [
        { src: "/Sinker_19.jpg", label: "Sinker 19" },
        { src: "/Sinker_19_w_Label.jpg", label: "Sinker 19 — Labeled" },
        { src: "/Sinker_12_GOPR0024.JPG", label: "Sinker 19 — GOPRO Original" },
      ],
      timestamps: [
        { label: "Sinker 19", seconds: 679 },
        { label: "Sinker 19 — Labeled", seconds: 689 },
      ],
    },
  },
  {
    type: "sinker",
    group: {
      label: "Sinker 20",
      photos: [
        { src: "/Sinker_20.jpg", label: "Sinker 20" },
        { src: "/Sinker_20_w_Label.jpg", label: "Sinker 20 — Labeled" },
        { src: "/Sinker_11_GOPR0023.JPG", label: "Sinker 20 — GOPRO Original" },
      ],
      timestamps: [
        { label: "Sinker 20", seconds: 707 },
        { label: "Sinker 20 — Labeled", seconds: 718 },
      ],
    },
  },
  {
    type: "sinker",
    group: {
      label: "Sinker 21",
      photos: [
        { src: "/Sinker_21.jpg", label: "Sinker 21" },
        { src: "/Sinker_21_w_Label.jpg", label: "Sinker 21 — Labeled" },
        { src: "/Sinker_10_GOPR0022.JPG", label: "Sinker 21 — GOPRO Original" },
      ],
      timestamps: [
        { label: "Sinker 21", seconds: 733 },
        { label: "Sinker 21 — Labeled", seconds: 745 },
      ],
    },
  },
  {
    type: "sinker",
    group: {
      label: "Sinker 22",
      photos: [
        { src: "/Sinker_22.jpg", label: "Sinker 22" },
        { src: "/Sinker_22_w_Label.jpg", label: "Sinker 22 — Labeled" },
        { src: "/Sinker_09_GOPR0021.JPG", label: "Sinker 22 — GOPRO Original" },
      ],
      timestamps: [
        { label: "Sinker 22", seconds: 758 },
        { label: "Sinker 22 — Labeled", seconds: 774 },
      ],
    },
  },
  {
    type: "sinker",
    group: {
      label: "Sinker 23",
      photos: [
        { src: "/Sinker_23.jpg", label: "Sinker 23" },
        { src: "/Sinker_23_w_Label.jpg", label: "Sinker 23 — Labeled" },
        { src: "/Sinker_08_GOPR0020.JPG", label: "Sinker 23 — GOPRO Original" },
      ],
      timestamps: [
        { label: "Sinker 23", seconds: 798 },
        { label: "Sinker 23 — Labeled", seconds: 807 },
      ],
    },
  },
  {
    type: "sinker",
    group: {
      label: "Sinker 24",
      photos: [
        { src: "/Sinker_24.jpg", label: "Sinker 24" },
        { src: "/Sinker_24_w_Label.jpg", label: "Sinker 24 — Labeled" },
        { src: "/Sinker_07_GOPR0019.JPG", label: "Sinker 24 — GOPRO Original" },
      ],
      timestamps: [
        { label: "Sinker 24", seconds: 826 },
        { label: "Sinker 24 — Labeled", seconds: 847 },
      ],
    },
  },
  {
    type: "sinker",
    group: {
      label: "Sinker 25",
      photos: [
        { src: "/Sinker_25.jpg", label: "Sinker 25" },
        { src: "/Sinker_25_w_Label.jpg", label: "Sinker 25 — Labeled" },
        { src: "/Sinker_06_GOPR0018.JPG", label: "Sinker 25 — GOPRO Original" },
      ],
      timestamps: [
        { label: "Sinker 25", seconds: 858 },
        { label: "Sinker 25 — Labeled", seconds: 866 },
      ],
    },
  },
  {
    type: "sinker",
    group: {
      label: "Sinker 26",
      photos: [
        { src: "/Sinker_26.jpg", label: "Sinker 26" },
        { src: "/Sinker_26_w_Label.jpg", label: "Sinker 26 — Labeled" },
        { src: "/Sinker_05_GOPR0017.JPG", label: "Sinker 26 — GOPRO Original" },
      ],
      timestamps: [
        { label: "Sinker 26", seconds: 885 },
        { label: "Sinker 26 — Labeled", seconds: 899 },
      ],
    },
  },
  {
    type: "sinker",
    group: {
      label: "Sinker 27",
      photos: [
        { src: "/Sinker_27.jpg", label: "Sinker 27" },
        { src: "/Sinker_27_w_Label.jpg", label: "Sinker 27 — Labeled" },
        { src: "/Sinker_04_GOPR0016.JPG", label: "Sinker 27 — GOPRO Original" },
      ],
      timestamps: [
        { label: "Sinker 27", seconds: 924 },
        { label: "Sinker 27 — Labeled", seconds: 940 },
      ],
    },
  },
  {
    type: "sinker",
    group: {
      label: "Sinker 28",
      photos: [
        { src: "/Sinker_28.jpg", label: "Sinker 28" },
        { src: "/Sinker_28_w_Label.jpg", label: "Sinker 28 — Labeled" },
        { src: "/Sinker_03_GOPR0015.JPG", label: "Sinker 28 — GOPRO Original" },
      ],
      timestamps: [
        { label: "Sinker 28", seconds: 963 },
        { label: "Sinker 28 — Labeled", seconds: 973 },
      ],
    },
  },
  {
    type: "sinker",
    group: {
      label: "Sinker 29",
      photos: [
        { src: "/Sinker_29.jpg", label: "Sinker 29" },
        { src: "/Sinker_29_w_Label.jpg", label: "Sinker 29 — Labeled" },
        { src: "/Sinker_02_GOPR0014.JPG", label: "Sinker 29 — GOPRO Original" },
      ],
      timestamps: [
        { label: "Sinker 29", seconds: 990 },
        { label: "Sinker 29 — Labeled", seconds: 1001 },
      ],
    },
  },
  {
    type: "sinker",
    group: {
      label: "Sinker 30",
      photos: [
        { src: "/Sinker_30.jpg", label: "Sinker 30" },
        { src: "/Sinker_30_w_Label.jpg", label: "Sinker 30 — Labeled" },
        { src: "/Sinker_01_GOPR0013.JPG", label: "Sinker 30 — GOPRO Original" },
      ],
      timestamps: [
        { label: "Sinker 30", seconds: 1017 },
        { label: "Sinker 30 — Labeled", seconds: 1031 },
      ],
    },
  },
];

export const ALL_SINKER_PHOTOS: Photo[] = SINKER_GALLERY
  .filter((item): item is { type: "sinker"; group: SinkerGroup } => item.type === "sinker")
  .flatMap((item) => item.group.photos);

export const PROJECT: Project = {
  days: [
    {
      id: 1,
      date: "10 May 2026",
      dateShort: "10 May",
      weekday: "Sunday",
      status: "complete",
      sinkersInstalled: 10,
      sinkersTotal: 10,
      depthRange: "3–10 m",
      teamSize: 7,
      photos: [
        { src: "/Sinker_01_GOPR0013.JPG", label: "Sinker 01" },
        { src: "/Sinker_02_GOPR0014.JPG", label: "Sinker 02" },
        { src: "/Sinker_03_GOPR0015.JPG", label: "Sinker 03" },
        { src: "/Sinker_04_GOPR0016.JPG", label: "Sinker 04" },
        { src: "/Sinker_05_GOPR0017.JPG", label: "Sinker 05" },
        { src: "/Sinker_06_GOPR0018.JPG", label: "Sinker 06" },
        { src: "/Sinker_07_GOPR0019.JPG", label: "Sinker 07" },
        { src: "/Sinker_08_GOPR0020.JPG", label: "Sinker 08" },
        { src: "/Sinker_09_GOPR0021.JPG", label: "Sinker 09" },
        { src: "/Sinker_10_GOPR0022.JPG", label: "Sinker 10" },
      ],
      videos: [
        {
          title: "Day 1 — Full-Day Sinker Installation",
          desc: "Morning and afternoon sessions captured. 5 sinkers installed in the morning session, 5 more in the afternoon — 10 total for the day. All units aligned and secured to the pipeline per project specifications.",
          youtubeId: "kBe0w8Q3YU8",
          color1: "#1B4F72",
          color2: "#0F2436",
        },
      ],
      tasks: [
        { text: "Morning session: install 5 sinkers at 3–10 m depth", done: true },
        { text: "Afternoon session: install 5 additional sinkers", done: true },
        { text: "Verify alignment and attachment for all 10 units", done: true },
      ],
      notes:
        "Full-day operations completed without incident. Dive team of 7 conducted both morning and afternoon sessions, successfully installing 10 sinkers and securing them to the pipeline. All units confirmed properly aligned and attached in accordance with project specifications.",
      sig: "RO Sinker Installation — Punta Engaño, Lapu-Lapu City, Cebu",
    },
    {
      id: 2,
      date: "11 May 2026",
      dateShort: "11 May",
      weekday: "Monday",
      status: "complete",
      sinkersInstalled: 2,
      sinkersTotal: 12,
      depthRange: "14–25 m",
      teamSize: 7,
      sinkersStaged: 3,
      photos: [
        { src: "/Sinker_11_GOPR0023.JPG", label: "Sinker 11" },
        { src: "/Sinker_12_GOPR0024.JPG", label: "Sinker 12" },
      ],
      videos: [
        {
          title: "Day 2 — Deep Sinker Placements",
          desc: "Two sinkers installed at greater depths — one at 14 m and one at 25 m. Following completion of diving operations, 3 sinkers were organised and pre-staged on deck for the next day.",
          youtubeId: "9Bg3orkLWWo",
          color1: "#2874A6",
          color2: "#154360",
        },
      ],
      tasks: [
        { text: "Install 1 sinker at 14 m depth", done: true },
        { text: "Install 1 sinker at 25 m depth", done: true },
        { text: "Pre-stage 3 sinkers on deck for Day 3", done: true },
      ],
      notes:
        "Dive team of 7 continued sinker installation operations, moving into deeper sections of the pipeline. Two sinkers were successfully installed and secured — one at 14 m and one at 25 m depth. Following completion of diving operations, the team organised and pre-staged 3 sinkers on deck in preparation for the following day.",
      sig: "RO Sinker Installation — Punta Engaño, Lapu-Lapu City, Cebu",
    },
    {
      id: 3,
      date: "12 May 2026",
      dateShort: "12 May",
      weekday: "Tuesday",
      status: "complete",
      sinkersInstalled: 4,
      sinkersTotal: 16,
      depthRange: "16–30 m",
      teamSize: 7,
      sinkersStaged: 4,
      photos: [
        { src: "/Sinker_13_GOPR0025.JPG", label: "Sinker 13" },
        { src: "/Sinker_14_GOPR0026.JPG", label: "Sinker 14" },
        { src: "/Sinker_15_GOPR0027.JPG", label: "Sinker 15" },
        { src: "/Sinker_16-17_GOPR0028.JPG", label: "Sinkers 16–17" },
      ],
      videos: [
        {
          title: "Day 3 — Surface-to-Seabed Transfer & Installation",
          desc: "Sinkers rigged at the surface, lowered to depth, and installed onto the pipeline. 1 sinker placed at 30 m and 3 at 16 m. 4 additional sinkers pre-staged on deck at end of day.",
          youtubeId: "CW3AxPpm6pY",
          color1: "#1B4F72",
          color2: "#0A1929",
        },
      ],
      tasks: [
        { text: "Rig sinkers at surface and lower to working depth", done: true },
        { text: "Install 1 sinker at 30 m depth", done: true },
        { text: "Install 3 sinkers at 16 m depth", done: true },
        { text: "Pre-stage 4 sinkers on deck for next day", done: true },
      ],
      notes:
        "Dive team of 7 conducted sinker installation and surface-to-seabed transfer operations. Sinkers were rigged at the surface, lowered to depth, and installed onto the pipeline — 1 sinker at 30 m and 3 sinkers at 16 m, for a total of 4 sinkers on the day. Following completion, the team prepared and pre-staged an additional 4 sinkers on deck in readiness for the next day.",
      sig: "RO Sinker Installation — Punta Engaño, Lapu-Lapu City, Cebu",
    },
    {
      id: 4,
      date: "13 May 2026",
      dateShort: "13 May",
      weekday: "Wednesday",
      status: "complete",
      sinkersInstalled: 3,
      sinkersTotal: 19,
      depthRange: "14–15 m",
      teamSize: 7,
      sinkersStaged: 3,
      photos: [
        { src: "/Sinker_16-17_GOPR0028.JPG", label: "Sinkers 16–17" },
        { src: "/Sinker_18_GOPR0029.JPG", label: "Sinker 18" },
        { src: "/Sinker_19_GOPR0030.JPG", label: "Sinker 19" },
      ],
      videos: [
        {
          title: "Day 4 — Sinker Installation at 14–15 m",
          desc: "Three sinkers installed within the 14–15 m depth range. Following completion of diving operations, 3 sinkers were organised and pre-staged on deck in readiness for the following day's installation.",
          youtubeId: "oJjmHpFvw3E",
          color1: "#154360",
          color2: "#0B2740",
        },
      ],
      tasks: [
        { text: "Install 3 sinkers at 14–15 m depth", done: true },
        { text: "Pre-stage 3 sinkers on deck for Day 5", done: true },
      ],
      notes:
        "Dive team of 7 conducted sinker installation operations, successfully placing 3 sinkers within the 14–15 m depth range. All units were verified aligned and secured to the pipeline in accordance with project specifications. Following completion of diving operations, the team organised and pre-staged 3 sinkers on deck in readiness for the following day's installation.",
      sig: "RO Sinker Installation — Punta Engaño, Lapu-Lapu City, Cebu",
    },
    {
      id: 5,
      date: "14 May 2026",
      dateShort: "14 May",
      weekday: "Thursday",
      status: "complete",
      sinkersInstalled: 3,
      sinkersTotal: 22,
      depthRange: "8–25 m",
      teamSize: 7,
      sinkersStaged: 3,
      photos: [
        { src: "/Sinker_20_GOPR0031.JPG", label: "Sinker 20" },
        { src: "/Sinker_21_GOPR0032.JPG", label: "Sinker 21" },
        { src: "/Sinker_22-23_GOPR0033.JPG", label: "Sinkers 22–23" },
      ],
      videos: [
        {
          title: "Day 5 — Installation & Deep-Section Repositioning",
          desc: "Three sinkers installed at 8–14 m depth. One sinker relocated from the 2 m position to 25 m to meet project placement requirements. Three sinkers pre-staged on deck at end of day.",
          youtubeId: "qTKOcdh2fjk",
          color1: "#1A5276",
          color2: "#0D2F45",
        },
      ],
      tasks: [
        { text: "Install 3 sinkers at 8–14 m depth", done: true },
        { text: "Relocate 1 sinker from 2 m to 25 m depth", done: true },
        { text: "Pre-stage 3 sinkers on deck for Day 6", done: true },
      ],
      notes:
        "Dive team continued sinker installation and repositioning operations. Three sinkers were successfully installed at 14 m and 8 m depth. Additionally, one sinker was relocated from the 2 m position to 25 m depth to meet project placement requirements. Following completion of diving operations, 3 sinkers were prepared and pre-staged on deck in readiness for the next day.",
      sig: "RO Sinker Installation — Punta Engaño, Lapu-Lapu City, Cebu",
    },
    {
      id: 6,
      date: "15 May 2026",
      dateShort: "15 May",
      weekday: "Friday",
      status: "complete",
      sinkersInstalled: 3,
      sinkersTotal: 25,
      depthRange: "14–25 m",
      teamSize: 7,
      photos: [
        { src: "/Sinker_22-23_GOPR0033.JPG", label: "Sinkers 22–23" },
        { src: "/Sinker_24_GOPR0034.JPG", label: "Sinker 24" },
        { src: "/Sinker_25_GOPR0035.JPG", label: "Sinker 25" },
      ],
      videos: [
        {
          title: "Day 6 — Deep Installation & Zone Consolidation",
          desc: "Three sinkers installed at 25 m depth. Five sinkers transferred and repositioned to the 14 m depth zone as part of the ongoing pipeline consolidation effort.",
          youtubeId: "LgXNeXkSLk8",
          color1: "#1B4F72",
          color2: "#0A1D2E",
        },
      ],
      tasks: [
        { text: "Install 3 sinkers at 25 m depth", done: true },
        { text: "Transfer and reposition 5 sinkers to 14 m depth zone", done: true },
      ],
      notes:
        "Dive team conducted installation and redistribution operations across multiple depth ranges. Three sinkers were successfully installed and secured at 25 m depth. Concurrently, 5 sinkers were transferred and repositioned to the 14 m depth mark, consolidating units into the designated zone in accordance with project requirements.",
      sig: "RO Sinker Installation — Punta Engaño, Lapu-Lapu City, Cebu",
    },
    {
      id: 7,
      date: "16 May 2026",
      dateShort: "16 May",
      weekday: "Saturday",
      status: "complete",
      sinkersInstalled: 4,
      sinkersTotal: 29,
      depthRange: "14–25 m",
      teamSize: 7,
      photos: [
        { src: "/Sinker_26_GOPR0036.JPG", label: "Sinker 26" },
        { src: "/Sinker_27_GOPR0037.JPG", label: "Sinker 27" },
        { src: "/Sinker_28_GOPR0038.JPG", label: "Sinker 28" },
        { src: "/Sinker_29_GOPR0039.JPG", label: "Sinker 29" },
      ],
      videos: [
        {
          title: "Day 7 — Deep Sinker Installation & Shallow Repositioning",
          desc: "Four sinkers installed at 25 m depth. Two sinkers relocated from the 2 m position to 14 m depth as part of the ongoing pipeline consolidation.",
          youtubeId: "Bg6v3f5PUFs",
          color1: "#21618C",
          color2: "#0E2D42",
        },
      ],
      tasks: [
        { text: "Install 4 sinkers at 25 m depth", done: true },
        { text: "Relocate 2 sinkers from 2 m to 14 m depth", done: true },
      ],
      notes:
        "Dive team continued deep-section sinker installation and repositioning operations. Four sinkers were successfully installed and secured at 25 m depth. Additionally, 2 sinkers were relocated from the 2 m position to 14 m depth as part of the ongoing pipeline consolidation effort, bringing more units into the operational depth zone.",
      sig: "RO Sinker Installation — Punta Engaño, Lapu-Lapu City, Cebu",
    },
    {
      id: 8,
      date: "17 May 2026",
      dateShort: "17 May",
      weekday: "Sunday",
      status: "complete",
      sinkersInstalled: 1,
      sinkersTotal: 30,
      depthRange: "25–30+ m",
      teamSize: 7,
      photos: [
        { src: "/Sinker_30_GOPR0040.JPG", label: "Sinker 30" },
        { src: "/Sinker_30b_GOPR0041.JPG", label: "Sinker 30 (Alt. View)" },
      ],
      videos: [
        {
          title: "Day 8 — Deep Installation & Full-Depth Consolidation",
          desc: "One sinker installed at depths exceeding 30 m. All sinkers positioned at 25 m and beyond were interconnected and secured to prevent displacement, ensuring structural integrity across the deep section.",
          youtubeId: "utGbkLsvH0Y",
          color1: "#1A2F45",
          color2: "#0A1520",
        },
      ],
      tasks: [
        { text: "Install 1 sinker at 30+ m depth", done: true },
        { text: "Interconnect and lock all sinkers at 25 m and beyond", done: true },
      ],
      notes:
        "Dive team conducted final installation and deep-section consolidation operations. One sinker was successfully installed at depths exceeding 30 m. Following installation, all sinkers positioned at 25 m and beyond were interconnected and mechanically secured together to prevent displacement and lateral movement, ensuring structural integrity and long-term stability across the full deep-section pipeline span.",
      sig: "RO Sinker Installation — Punta Engaño, Lapu-Lapu City, Cebu",
    },
  ],
};
