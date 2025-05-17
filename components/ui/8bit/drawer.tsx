import { Press_Start_2P } from "next/font/google"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@/lib/utils"
import {
  Drawer as ShadcnDrawer,
  DrawerClose as ShadcnDrawerClose,
  DrawerContent as ShadcnDrawerContent,
  DrawerDescription as ShadcnDrawerDescription,
  DrawerFooter as ShadcnDrawerFooter,
  DrawerHeader as ShadcnDrawerHeader,
  DrawerOverlay as ShadcnDrawerOverlay,
  DrawerPortal as ShadcnDrawerPortal,
  DrawerTitle as ShadcnDrawerTitle,
  DrawerTrigger as ShadcnDrawerTrigger,
} from "@/components/ui/drawer"

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
})

const Drawer = ShadcnDrawer

const DrawerPortal = ShadcnDrawerPortal

const DrawerOverlay = ShadcnDrawerOverlay

const DrawerHeader = ShadcnDrawerHeader

const DrawerFooter = ShadcnDrawerFooter

const DrawerClose = ShadcnDrawerClose

const DrawerTitle = ShadcnDrawerTitle

const DrawerDescription = ShadcnDrawerDescription

function DrawerTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return (
    <ShadcnDrawerTrigger className={cn("", className, pressStart)} {...props}>
      {children}
    </ShadcnDrawerTrigger>
  )
}

function DrawerContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content>) {
  return (
    <ShadcnDrawerContent className={cn("", className, pressStart)} {...props}>
      {children}
    </ShadcnDrawerContent>
  )
}

export {
  Drawer,
  DrawerHeader,
  DrawerFooter,
  DrawerClose,
  DrawerTrigger,
  DrawerContent,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerDescription,
}
