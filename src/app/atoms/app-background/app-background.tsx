import { useState } from "react";

import { cn } from "@/lib/utils";
import { GradientBackground } from "@/components/ui/gradient-background";

import { BackgroundVariant } from "./types";

export type AppBackgroundProps = {
  className?: string;
};

export const AppBackground = ({ className }: AppBackgroundProps) => {
  const [currentVariant, setCurrentVariant] = useState<BackgroundVariant>(
    BackgroundVariant.RELAXING
  );

  const handleClick = () => {
    setCurrentVariant(
      currentVariant === BackgroundVariant.WORKING
        ? BackgroundVariant.RELAXING
        : BackgroundVariant.WORKING
    );
  };

  return (
    <div className={cn("relative", className)} onClick={handleClick}>
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
