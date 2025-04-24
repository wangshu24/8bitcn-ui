"use client"

import * as React from "react"
import { Press_Start_2P } from "next/font/google"
import { cva, VariantProps } from "class-variance-authority"

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
  return <ShadcnRadioGroupItem className={cn("", className)} {...props} />
}

export { RadioGroup, RadioGroupItem }
