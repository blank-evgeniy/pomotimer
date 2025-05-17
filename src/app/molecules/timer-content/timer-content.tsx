import { TimerView } from "@/app/atoms";
import { BoxReveal } from "@/components/ui/box-reveal";
import type { ReactNode } from "react";

export type TimerContentProps = {
  timer: number;
  leftSlot: ReactNode;
  rightSlot: ReactNode;
};

export const TimerContent = ({
  leftSlot,
  rightSlot,
  timer,
}: TimerContentProps) => (
  <div className="flex gap-12 text-white text-7xl items-center">
    <BoxReveal boxColor="white">{leftSlot}</BoxReveal>
    <BoxReveal boxColor="white">
      <TimerView timer={timer} />
    </BoxReveal>
    <BoxReveal boxColor="white">{rightSlot}</BoxReveal>
  </div>
);
