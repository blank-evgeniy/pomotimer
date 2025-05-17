import { BoxReveal } from "@/components/ui/box-reveal";
import { formatTime } from "@/lib/utils";

export type TimerViewProps = { timer: number };

export const TimerView = ({ timer }: TimerViewProps) => (
  <BoxReveal boxColor="white">
    <p className="text-white text-7xl leading-[100%]">{formatTime(timer)}</p>
  </BoxReveal>
);
