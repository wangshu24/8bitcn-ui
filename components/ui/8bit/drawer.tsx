import { Press_Start_2P } from "next/font/google"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@/lib/utils"
import {
  Drawer as ShadcnDrawer,
  DrawerClose as ShadcnDrawerClose,
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
          "border-foreground dark:border-ring hover:bg-transparent active:bg-transparent focus:bg-transparent rounded-none border-4 focus:border-foreground hover:border-foreground dark:focus:border-ring bg-transparent data-[state=open]:bg-transparent data-[state=open]:border-foreground dark:data-[state=open]:border-ring",
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
    <ShadcnDrawerPortal data-slot="drawer-portal">
      <ShadcnDrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(
          "border-t-4 border-foreground dark:border-ring rounded-none",
          "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
          "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b",
          "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t",
          "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm",
          "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",

          className,
          pressStart.className
        )}
        {...props}
      >
        <div className="bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-none group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
        {children}
      </DrawerPrimitive.Content>
    </ShadcnDrawerPortal>
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
