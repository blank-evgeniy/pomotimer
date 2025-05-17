import type { ReactNode } from "react";

interface AppTemplateProps {
  backgroundSlot: ReactNode;
  children: ReactNode;
}

export const AppTemplate = ({ backgroundSlot, children }: AppTemplateProps) => (
  <main className="h-screen overflow-hidden relative flex items-center justify-center">
    {backgroundSlot}

    <div className="z-10 flex flex-col items-center justify-between gap-8 h-full w-full py-[2%] px-[5%]">
      {children}
    </div>
  </main>
);
