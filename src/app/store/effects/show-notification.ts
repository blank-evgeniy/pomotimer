import type { Phase } from "@/app/model";
import { createEffect } from "effector";

export const showNotificationFx = createEffect<Phase, void>({
  handler: (prevPhase: Phase) => {
    const message =
      prevPhase.name === "Work" ? "Время отдыхать!" : "Время работать!";

    if (!("Notification" in window)) {
      console.log("Браузер не поддерживает уведомления");
      return;
    }

    if (Notification.permission === "granted") {
      const notification = new Notification(message, {
        body: "Нажмите, чтобы открыть приложение",
        icon: "/vite.svg",
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
            icon: "/vite.svg",
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
