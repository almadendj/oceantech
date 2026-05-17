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
      videos: [
        {
          title: "Day 4 — Sinker Installation at 14–15 m",
          desc: "Three sinkers installed within the 14–15 m depth range. Following completion of diving operations, 3 sinkers were organised and pre-staged on deck in readiness for the following day's installation.",
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
      videos: [
        {
          title: "Day 5 — Installation & Deep-Section Repositioning",
          desc: "Three sinkers installed at 8–14 m depth. One sinker relocated from the 2 m position to 25 m to meet project placement requirements. Three sinkers pre-staged on deck at end of day.",
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
      videos: [
        {
          title: "Day 6 — Deep Installation & Zone Consolidation",
          desc: "Three sinkers installed at 25 m depth. Five sinkers transferred and repositioned to the 14 m depth zone as part of the ongoing pipeline consolidation effort.",
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
      videos: [
        {
          title: "Day 7 — Deep Sinker Installation & Shallow Repositioning",
          desc: "Four sinkers installed at 25 m depth. Two sinkers relocated from the 2 m position to 14 m depth as part of the ongoing pipeline consolidation.",
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
      videos: [
        {
          title: "Day 8 — Deep Installation & Full-Depth Consolidation",
          desc: "One sinker installed at depths exceeding 30 m. All sinkers positioned at 25 m and beyond were interconnected and secured to prevent displacement, ensuring structural integrity across the deep section.",
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
