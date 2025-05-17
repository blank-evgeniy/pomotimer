export type Phase = {
  duration: number;
  name: "Work" | "Short Break" | "Long Break";
};

const workPhase: Phase = {
  duration: 25,
  name: "Work",
};

const shortBreakPhase: Phase = {
  duration: 5,
  name: "Short Break",
};

const longBreakPhase: Phase = {
  duration: 30,
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
