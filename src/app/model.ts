export type Phase = {
  duration: number;
  name: "Work" | "Short Break" | "Long Break";
};

const workPhase: Phase = {
  duration: 25 * 60,
  name: "Work",
};

const shortBreakPhase: Phase = {
  duration: 5 * 60,
  name: "Short Break",
};

const longBreakPhase: Phase = {
  duration: 30 * 60,
  name: "Long Break",
};

export const phases: Phase[] = [
  workPhase,
  shortBreakPhase,
  workPhase,
  shortBreakPhase,
  workPhase,
  shortBreakPhase,
  workPhase,
  longBreakPhase,
];
