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

const DrawerClose = ShadcnDrawerClose

function DrawerTitle({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>) {
  return (
    <ShadcnDrawerTitle
      className={cn(className, pressStart.className)}
      {...props}
    >
      {children}
    </ShadcnDrawerTitle>
  )
}

function DrawerDescription({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) {
  return (
    <ShadcnDrawerDescription
      className={cn(className, pressStart.className)}
      {...props}
    >
      {" "}
      {children}
    </ShadcnDrawerDescription>
  )
}

function DrawerTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return (
    <>
      <ShadcnDrawerTrigger
        className={cn(
          "hover:bg-transparent active:bg-transparent focus:bg-transparent rounded-none border-4 focus:border-foreground hover:border-foreground dark:focus:border-ring bg-transparent data-[state=open]:bg-transparent data-[state=open]:border-foreground dark:data-[state=open]:border-ring",
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
