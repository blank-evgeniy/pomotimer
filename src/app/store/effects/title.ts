import { formatTime } from "@/lib/utils";
import { createEffect } from "effector";

export const updateTitleFx = createEffect(
  (params: { seconds: number; phaseName: string }) => {
    const time = formatTime(params.seconds);
    document.title = `${time} | ${params.phaseName} (PomoTimer)`;
  }
);
