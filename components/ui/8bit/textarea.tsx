import { cva, VariantProps } from "class-variance-authority";

import { Textarea as ShadcnTextarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

import { Press_Start_2P } from "next/font/google";

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
});

export const inputVariants = cva("", {
  variants: {
    font: {
      normal: "",
      retro: pressStart.className,
    },
  },
  defaultVariants: {
    font: "retro",
  },
});

export interface BitTextareaProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof inputVariants> {
  asChild?: boolean;
}

export default function Textarea({ ...props }: BitTextareaProps) {
  const { className, font } = props;

  return (
    <div className="relative w-full">
      <ShadcnTextarea
        placeholder="Enter text"
        className={cn(
          "rounded-none transition-transform ring-0",
          font !== "normal" && pressStart.className,
          className
        )}
      />

      <div className="absolute top-0 left-0 w-full h-1.5 bg-ring pointer-events-none" />
      <div className="absolute bottom-0 w-full h-1.5 bg-ring pointer-events-none" />
      <div className="absolute top-1 -left-1 w-1.5 h-1/2 bg-ring pointer-events-none" />
      <div className="absolute bottom-1 -left-1 w-1.5 h-1/2 bg-ring pointer-events-none" />
      <div className="absolute top-1 -right-1 w-1.5 h-1/2 bg-ring pointer-events-none" />
      <div className="absolute bottom-1 -right-1 w-1.5 h-1/2 bg-ring pointer-events-none" />
    </div>
  );
}
