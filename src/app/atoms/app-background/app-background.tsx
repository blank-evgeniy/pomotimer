import { cn } from "@/lib/utils";
import { GradientBackground } from "@/components/ui/gradient-background";

import { BackgroundVariant } from "./types";
import { useUnit } from "effector-react";
import { $currentPhase } from "@/app/store/timer-store";

export type AppBackgroundProps = {
  className?: string;
};

export const AppBackground = ({ className }: AppBackgroundProps) => {
  const currentPhase = useUnit($currentPhase);

  const currentVariant =
    currentPhase.name === "Work"
      ? BackgroundVariant.WORKING
      : BackgroundVariant.RELAXING;

  return (
    <div className={cn("relative", className)}>
      <GradientBackground
        className={cn(
          BackgroundVariant.RELAXING,
          "absolute inset-0 transition-opacity duration-1500",
          currentVariant === BackgroundVariant.RELAXING
            ? "opacity-100"
            : "opacity-0"
        )}
      />
      <GradientBackground
        className={cn(
          BackgroundVariant.WORKING,
          "absolute inset-0 transition-opacity duration-1500",
          currentVariant === BackgroundVariant.WORKING
            ? "opacity-100"
            : "opacity-0"
        )}
      />
    </div>
  );
};
