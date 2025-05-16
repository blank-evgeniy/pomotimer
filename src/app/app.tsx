import { AppBackground } from "./atoms";

export const App = () => {
  return (
    <main className="h-screen relative">
      <AppBackground className="absolute inset-0" />
    </main>
  );
};
