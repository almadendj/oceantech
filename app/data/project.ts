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
  tasks: Task[];
  notes: string;
  sig?: string;
}

export interface Project {
  days: Day[];
}

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
  ],
};
