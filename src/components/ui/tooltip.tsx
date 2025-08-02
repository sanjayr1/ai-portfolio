import * as React from "react";

interface TooltipProviderProps {
  children: React.ReactNode;
  delayDuration?: number;
}

// Placeholder TooltipProvider – replace with real tooltip library when needed.
export const TooltipProvider: React.FC<TooltipProviderProps> = ({ children }) => {
  return <>{children}</>; // no-op provider
};
