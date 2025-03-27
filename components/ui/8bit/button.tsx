import { cva, VariantProps } from "class-variance-authority";

import { Button as ShadcnButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { Press_Start_2P } from "next/font/google";

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
});

const buttonVariants = cva("", {
  variants: {
    variant: {
      default: "bg-foreground",
      destructive: "bg-foreground",
      outline: "bg-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface BitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export default function Button({ children, ...props }: BitButtonProps) {
  const { variant, className } = props;

  return (
    <ShadcnButton
      {...props}
      className={cn(
        "rounded-none active:translate-y-1 transition-transform relative",
        pressStart.className,
        className
      )}
    >
      {children}

      {variant !== "ghost" && variant !== "link" && (
        <>
          {/* Pixelated border */}
          <div className="absolute -top-1.5 w-1/2 left-1.5 h-1.5 bg-foreground" />
          <div className="absolute -top-1.5 w-1/2 right-1.5 h-1.5 bg-foreground" />
          <div className="absolute -bottom-1.5 w-1/2 left-1.5 h-1.5 bg-foreground" />
          <div className="absolute -bottom-1.5 w-1/2 right-1.5 h-1.5 bg-foreground" />
          <div className="absolute top-0 left-0 size-1.5 bg-foreground" />
          <div className="absolute top-0 right-0 size-1.5 bg-foreground" />
          <div className="absolute bottom-0 left-0 size-1.5 bg-foreground" />
          <div className="absolute bottom-0 right-0 size-1.5 bg-foreground" />
          <div className="absolute top-1.5 -left-1.5 h-2/3 w-1.5 bg-foreground" />
          <div className="absolute top-1.5 -right-1.5 h-2/3 w-1.5 bg-foreground" />

          {variant !== "outline" && (
            <>
              {/* Top shadow */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-foreground/20" />
              <div className="absolute top-1.5 left-0 w-3 h-1.5 bg-foreground/20" />

              {/* Bottom shadow */}
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-foreground/20" />
              <div className="absolute bottom-1.5 right-0 w-3 h-1.5 bg-foreground/20" />
            </>
          )}
        </>
      )}
    </ShadcnButton>
  );
}
