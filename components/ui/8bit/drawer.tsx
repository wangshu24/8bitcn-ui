import { Press_Start_2P } from "next/font/google"
// import { cva, VariantProps } from "class-variance-authority"
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

const DrawerClose = ShadcnDrawerClose

const DrawerTitle = ShadcnDrawerTitle

const DrawerDescription = ShadcnDrawerDescription

function DrawerTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return (
    <>
      <ShadcnDrawerTrigger
        className={cn(
          "rounded-none border-4 dark:focus:border-ring",
          className,
          pressStart.className
        )}
        {...props}
      >
        {children}
      </ShadcnDrawerTrigger>
    </>
  )
}

function DrawerContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content>) {
  return (
    <ShadcnDrawerContent
      className={cn("", className, pressStart.className)}
      {...props}
    >
      {children}
    </ShadcnDrawerContent>
  )
}

function DrawerHeader({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <ShadcnDrawerHeader
      className={cn("", className, pressStart.className)}
      {...props}
    >
      {children}
    </ShadcnDrawerHeader>
  )
}

function DrawerFooter({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <ShadcnDrawerFooter
      className={cn("", className, pressStart.className)}
      {...props}
    >
      {children}
    </ShadcnDrawerFooter>
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
