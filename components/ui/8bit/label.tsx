"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { Label as ShadcnLabel } from "@/components/ui/label";
import { cva, VariantProps } from "class-variance-authority";

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

interface BitLabelProps
  extends React.ComponentProps<typeof LabelPrimitive.Root>,
    VariantProps<typeof inputVariants> {
  asChild?: boolean;
}

function Label({ className, font, ...props }: BitLabelProps) {
  return (
    <ShadcnLabel
      className={cn(className, font !== "normal" && pressStart.className)}
      {...props}
    />
  );
}

export { Label };
