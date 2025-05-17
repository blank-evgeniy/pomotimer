import { TimerAction } from "@/app/atoms";
import { TimerContent } from "@/app/molecules";
import {
  $currentPhase,
  $isRunning,
  $timer,
  nextPhase,
  resetTimer,
  startTimer,
  stopTimer,
} from "@/app/store/timer-store";
import { ShinyButton } from "@/components/ui/shiny-button";
import { useUnit } from "effector-react";
import { SkipBack, SkipForward } from "lucide-react";

export const Timer = () => {
  const timer = useUnit($timer);
  const currentPhase = useUnit($currentPhase);
  const isRunning = useUnit($isRunning);

  const buttonContent = isRunning ? "Stop" : "Start";

  const handleClick = () => {
    if (isRunning) {
      stopTimer();
    } else {
      startTimer();
    }
  };

  const handleReset = () => {
    stopTimer();
    resetTimer();
  };

  const handleSkip = () => {
    nextPhase();
  };

  return (
    <div className="space-y-12">
      <TimerContent
        leftSlot={
          <TimerAction
            disabled={timer === currentPhase.duration}
            onClick={handleReset}
          >
            <SkipBack className="size-12" />
          </TimerAction>
        }
        rightSlot={
          <TimerAction onClick={handleSkip}>
            <SkipForward className="size-12" />
          </TimerAction>
        }
        timer={timer}
      />

      <ShinyButton className="w-full text-3xl" onClick={handleClick}>
        {buttonContent}
      </ShinyButton>
    </div>
  );
};
