"use client";

import { type HTMLMotionProps, motion, type Transition } from "motion/react";

import { cn } from "@/lib/utils";

export type GradientBackgroundProps = HTMLMotionProps<"div"> & {
  transition?: Transition;
};

export const GradientBackground = ({
  className,
  transition = { duration: 15, ease: "easeInOut", repeat: Infinity },
  ...props
}: GradientBackgroundProps) => (
  <motion.div
    data-slot="gradient-background"
    className={cn(
      "size-full bg-gradient-to-br from-green-500 via-blue-500 to-cyan-500 bg-[length:400%_400%] transition-colors",
      className
    )}
    animate={{
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    }}
    transition={transition}
    {...props}
  />
);
