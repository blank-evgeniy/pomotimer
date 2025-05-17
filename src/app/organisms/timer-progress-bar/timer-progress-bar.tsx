import { TimerProgress } from "@/app/atoms";
import { phases } from "@/app/model";
import {
  $currentPhase,
  $currentPhaseIndex,
  $timer,
} from "@/app/store/timer-store";
import { useUnit } from "effector-react";

export const TimerProgressBar = () => {
  const timer = useUnit($timer);
  const currentPhase = useUnit($currentPhase);
  const currentPhaseIndex = useUnit($currentPhaseIndex);

  const renderProgress = () => {
    return new Array(8).fill(0).map((_, index) => {
      const isCompleted = index < currentPhaseIndex;
      const isCurrent = index === currentPhaseIndex;
      const progressValue = 100 - (timer / currentPhase.duration) * 100;
      const phase = phases[index].name;

      return (
        <TimerProgress
          key={index}
          value={isCurrent ? progressValue : isCompleted ? 100 : 0}
          className={isCurrent ? "border-2 border-gray-800" : ""}
          variant={
            phase === "Work"
              ? "red"
              : phase === "Short Break"
              ? "green"
              : "yellow"
          }
        />
      );
    });
  };

  return <footer className="h-6 w-full flex gap-4">{renderProgress()}</footer>;
};
