import { createEvent, createStore, sample } from "effector";
import { interval } from "patronum/interval";
import { persist } from "effector-storage/local";

type Phase = {
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

const phases: Phase[] = [
  workPhase,
  shortBreakPhase,
  workPhase,
  shortBreakPhase,
  workPhase,
  shortBreakPhase,
  workPhase,
  longBreakPhase,
];

export const $currentPhaseIndex = createStore(0);
export const $currentPhase = $currentPhaseIndex.map((index) => phases[index]);

export const $timer = createStore(phases[0].duration).on(
  $currentPhase,
  (_, phase) => phase.duration
);
export const $isRunning = createStore(false);

export const startTimer = createEvent();
export const stopTimer = createEvent();
export const resetTimer = createEvent();
export const nextPhase = createEvent();

const { tick, isRunning } = interval({
  timeout: 1,
  start: startTimer,
  stop: stopTimer,
});

$timer.on(tick, (timer) => timer - 1);
$isRunning.on(isRunning, (isRunning) => isRunning);

sample({
  clock: startTimer,
  fn: () => true,
  target: $isRunning,
});

sample({
  clock: stopTimer,
  fn: () => false,
  target: $isRunning,
});

sample({
  clock: resetTimer,
  fn: () => false,
  target: $isRunning,
});

sample({
  clock: resetTimer,
  fn: () => $currentPhase.getState().duration,
  target: $timer,
});

sample({
  clock: $timer,
  filter: (time: number) => time === 0,
  target: nextPhase,
});

sample({
  clock: nextPhase,
  fn: () => ($currentPhaseIndex.getState() + 1) % phases.length,
  target: $currentPhaseIndex,
});

sample({
  clock: nextPhase,
  target: stopTimer,
});

persist({
  store: $currentPhaseIndex,
  key: "currentPhaseIndex",
});
