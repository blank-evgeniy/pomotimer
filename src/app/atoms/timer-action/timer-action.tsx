import { cn } from "@/lib/utils";
import type React from "react";

export const TimerAction = ({
  className,
  children,
  ...props
}: React.ComponentProps<"button">) => (
  <button
    className={cn(
      "flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-default",
      className
    )}
    {...props}
  >
    {children}
  </button>
);
