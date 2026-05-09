import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function BlueprintFrame({
  children,
  label,
  className,
}: {
  children: ReactNode;
  label?: string;
  className?: string;
}) {
  return (
    <div className={cn("relative border border-border bg-panel/40 corner-ticks", className)}>
      {label && (
        <div className="absolute -top-2.5 left-4 bg-background px-2 font-mono-tech text-[10px] uppercase tracking-widest text-accent">
          {label}
        </div>
      )}
      {children}
    </div>
  );
}

export function FigureCallout({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="space-y-1">
      <div className="font-mono-tech text-[10px] uppercase tracking-widest text-accent">
        FIG. {id}
      </div>
      <div className="font-display text-sm text-foreground/90">{title}</div>
      {children && <div className="text-xs text-muted-foreground">{children}</div>}
    </div>
  );
}
