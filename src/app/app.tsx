import { AppBackground } from "./atoms";
import { Timer, TimerProgressBar } from "./organisms";
import { AppHeading } from "./molecules";

export const App = () => {
  return (
    <main className="h-screen overflow-hidden relative flex items-center justify-center">
      <AppBackground className="absolute inset-0" />

      <div className="z-10 flex flex-col items-center justify-between gap-8 h-full w-full py-[2%] px-[5%]">
        <AppHeading />
        <Timer />
        <TimerProgressBar />
      </div>
    </main>
  );
};
