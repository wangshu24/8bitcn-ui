"use client"

import * as React from "react"
import { Press_Start_2P } from "next/font/google"
import { cva, VariantProps } from "class-variance-authority"
import { Square } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  RadioGroup as ShadcnRadioGroup,
  RadioGroupItem as ShadcnRadioGroupItem,
} from "@/components/ui/radio-group"

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
})

export const radioGroupVariants = cva("", {
  variants: {
    font: {
      normal: "",
      retro: pressStart.className,
    },
    variant: {
      default: "",
      retro: "",
      pixel: "",
    },
  },
  defaultVariants: {
    font: "retro",
    variant: "pixel",
  },
})

function RadioGroup({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ShadcnRadioGroup> & {
  variant?: VariantProps<typeof radioGroupVariants>["variant"]
}) {
  return <ShadcnRadioGroup className={cn("", className)} {...props} />
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ShadcnRadioGroupItem> & {
  variant?: VariantProps<typeof radioGroupVariants>["variant"]
}) {
  return (
    <div className="relative size-max">
      <ShadcnRadioGroupItem
        className={cn(
          "rounded-none size-4 ring-0 border-none",
          pressStart.className,
          className
        )}
        {...props}
      >
        <Square />
      </ShadcnRadioGroupItem>
      <div className="absolute top-[0px] w-2.5 left-1.5 h-1 bg-foreground dark:bg-ring" />
      <div className="absolute top-[0px] w-2.5 right-1.5 h-1 bg-foreground dark:bg-ring" />
      <div className="absolute bottom-[1px] w-2.5 left-1.5 h-1 bg-foreground dark:bg-ring" />
      <div className="absolute bottom-[1px] w-2.5 right-1.5 h-1 bg-foreground dark:bg-ring" />
      <div className="absolute top-[4px] -left-1 w-1 h-[15px] bg-foreground dark:bg-ring" />
      <div className="absolute top-[4px] -right-1 w-1 h-[15px] bg-foreground dark:bg-ring" />
      <div className="absolute top-[2px] -right-0.5 w-1 h-1 bg-foreground dark:bg-ring" />
      <div className="absolute top-[2px] -left-0.5 w-1 h-1 bg-foreground dark:bg-ring" />
      <div className="absolute bottom-[2px] -right-0.5 w-1 h-1 bg-foreground dark:bg-ring" />
      <div className="absolute bottom-[2px] -left-0.5 w-1 h-1 bg-foreground dark:bg-ring" />
    </div>
  )
}

export { RadioGroup, RadioGroupItem }
