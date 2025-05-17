import type { Phase } from "@/app/model";
import { createEffect } from "effector";

export const showNotificationFx = createEffect<Phase, void>({
  handler: (prevPhase: Phase) => {
    const message =
      prevPhase.name === "Work" ? "Время отдыхать!" : "Время работать!";

    const icon =
      prevPhase.name === "Work" ? "/hotel-bed-fill.svg" : "/run-fill.svg";

    if (!("Notification" in window)) {
      console.log("Браузер не поддерживает уведомления");
      return;
    }

    if (Notification.permission === "granted") {
      const notification = new Notification(message, {
        body: "Нажмите, чтобы открыть приложение",
        icon,
      });
      notification.onclick = () => {
        window.focus();
        notification.close();
      };
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          const notification = new Notification(message, {
            body: "Нажмите, чтобы открыть приложение",
            icon,
          });
          notification.onclick = () => {
            window.focus();
            notification.close();
          };
        }
      });
    }
  },
});
