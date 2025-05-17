import { AppBackground } from "./atoms";
import { Timer, TimerProgressBar } from "./organisms";
import { AppHeading } from "./molecules";
import { AppTemplate } from "./templates/app-template";

export const App = () => {
  return (
    <AppTemplate backgroundSlot={<AppBackground />}>
      <AppHeading />
      <Timer />
      <TimerProgressBar />
    </AppTemplate>
  );
};
