import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { LockKeyholeOpen } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  title: string;
  label: string;
}

export const Header = ({ title, label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-4 items-center justify-center">
      <h1
        className={cn(
          "text-3xl font-semibold flex items-center gap-2",
          poppins.className
        )}
      >
        <LockKeyholeOpen className="w-8 h-8" />
        {title}
      </h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
