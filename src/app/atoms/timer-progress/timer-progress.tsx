import { cva, type VariantProps } from "class-variance-authority";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

export type TimerProgressProps = {
  value: number;
} & VariantProps<typeof progressVariants> &
  React.ComponentProps<typeof ProgressPrimitive.Root>;

const progressBgVariants = cva("h-full w-full flex-1 transition-all", {
  variants: {
    variant: {
      red: "bg-red-400",
      green: "bg-green-400",
      yellow: "bg-yellow-400",
    },
  },
  defaultVariants: {
    variant: "red",
  },
});

const progressVariants = cva("h-4 w-full rounded-full overflow-hidden ", {
  variants: {
    variant: {
      red: "bg-red-200",
      green: "bg-green-200",
      yellow: "bg-yellow-200",
    },
  },
  defaultVariants: {
    variant: "red",
  },
});

export const TimerProgress = ({
  value,
  variant,
  className,
  ...props
}: TimerProgressProps) => {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(progressVariants({ variant }), className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={progressBgVariants({ variant })}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
};
