import { createEvent, createStore, sample } from "effector";
import { interval } from "patronum/interval";
import { persist } from "effector-storage/local";
import { phases } from "../model";
import { updateTitleFx } from "./effects/title";
import { showNotificationFx } from "./effects/show-notification";

export const $currentPhaseIndex = createStore(0);
export const $currentPhase = $currentPhaseIndex.map((index) => phases[index]);

export const $timer = createStore(phases[0].duration).on(
  $currentPhase,
  (_, phase) => phase.duration
);
export const $endTime = createStore(0);
export const $isRunning = createStore(false);

export const startTimer = createEvent();
export const stopTimer = createEvent();
export const resetTimer = createEvent();
export const nextPhase = createEvent();

const { tick, isRunning } = interval({
  timeout: 1000,
  start: startTimer,
  stop: stopTimer,
});

$isRunning.on(isRunning, (isRunning) => isRunning);

// calculate end time
sample({
  clock: startTimer,
  source: $timer,
  fn: (timer) => {
    return Date.now() + timer * 1000;
  },
  target: $endTime,
});
// update timer
sample({
  clock: tick,
  source: $endTime,
  fn: (endTime) => {
    return Math.ceil((endTime - Date.now()) / 1000);
  },
  target: $timer,
});

// start/stop timer handling
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

// reset timer handling
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

// timer finished handling
sample({
  clock: $timer,
  filter: (_currentPhase, time) => time === 0 || time < 0,
  source: $currentPhase,
  fn: (currentPhase) => currentPhase,
  target: [nextPhase, showNotificationFx],
});

// next phase handling
sample({
  clock: nextPhase,
  fn: () => ($currentPhaseIndex.getState() + 1) % phases.length,
  target: $currentPhaseIndex,
});

sample({
  clock: nextPhase,
  target: stopTimer,
});

// update title
sample({
  clock: [$timer.updates, $currentPhase.updates],
  source: {
    seconds: $timer,
    phaseName: $currentPhase.map((phase) => phase.name),
  },
  fn: ({ seconds, phaseName }) => ({ seconds, phaseName }),
  target: updateTitleFx,
});

// persist
persist({
  store: $currentPhaseIndex,
  key: "currentPhaseIndex",
});
