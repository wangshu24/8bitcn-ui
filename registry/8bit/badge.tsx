import { cva, VariantProps } from "class-variance-authority";

import { Badge as ShadcnBadge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import { Press_Start_2P } from "next/font/google";

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
});

export const badgeVariants = cva("", {
  variants: {
    font: {
      normal: "",
      retro: pressStart.className,
    },
    variant: {
      default: "bg-foreground",
      destructive: "bg-foreground",
      outline: "bg-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface BitBadgeProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}

function Badge({ children, ...props }: BitBadgeProps) {
  const { variant, className, font } = props;

  return (
    <div className={cn("relative", className)}>
      <ShadcnBadge
        {...props}
        className={cn(
          "rounded-none",
          font !== "normal" && pressStart.className,
          className
        )}
        variant={variant}
      >
        {children}
      </ShadcnBadge>

      <div className="absolute top-1.5 bottom-1.5 -left-1.5 h-1/2 w-1.5 bg-primary" />
      <div className="absolute top-1.5 bottom-1.5 -right-1.5 h-1/2 w-1.5 bg-primary" />
    </div>
  );
}

export { Badge };
