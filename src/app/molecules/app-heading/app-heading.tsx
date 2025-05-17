import { MorphingText } from "@/components/ui/morphing-text";

export const AppHeading = () => {
  return (
    <MorphingText
      texts={["Pomo", "Timer"]}
      className="text-white opacity-95 text-center"
    />
  );
};
