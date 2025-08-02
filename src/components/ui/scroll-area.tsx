import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * A minimal ScrollArea component that simply applies overflow styles.
 * For projects that need more advanced behaviour (scroll shadows, thumb styling, etc.)
 * consider replacing this with a fully-featured solution such as Radix UI ScrollArea.
 */
export const ScrollArea = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("relative overflow-auto", className)} {...props}>
        {children}
      </div>
    );
  },
);
ScrollArea.displayName = "ScrollArea";

// The current codebase only needs ScrollBar as a placeholder so that
// named import resolution succeeds. You can enhance this later.
type ScrollBarProps = {
  orientation?: "horizontal" | "vertical";
} & React.HTMLAttributes<HTMLDivElement>;

export const ScrollBar: React.FC<ScrollBarProps> = () => null;
