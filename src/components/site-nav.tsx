import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Index" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-4">
        <Link to="/" className="group flex min-w-0 items-center gap-2">
          <span className="grid h-7 w-7 place-items-center border border-accent text-accent font-mono-tech text-xs">
            AK
          </span>
          <span className="truncate font-display text-xs tracking-wide sm:text-sm">
            Aryan Kumar <span className="hidden text-muted-foreground sm:inline">/ ME</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-accent border-accent" }}
              className="rounded-sm border border-transparent px-3 py-1.5 font-mono-tech text-xs uppercase tracking-widest text-muted-foreground transition hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="shrink-0 p-2 text-foreground md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <div
        className={cn(
          "overflow-hidden border-t border-border/60 transition-[max-height] duration-300 md:hidden",
          open ? "max-h-[calc(100vh-4rem)] overflow-y-auto" : "max-h-0",
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-5">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-accent" }}
              className="py-2 font-mono-tech text-xs uppercase tracking-widest text-muted-foreground"
            >
              › {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-panel/30">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-3 sm:px-5 sm:py-10">
        <div className="text-center sm:text-left">
          <div className="font-display text-lg">Aryan Kumar</div>
          <div className="text-xs text-muted-foreground">
            Mechanical Engineer · NIT Trichy · Bangalore
          </div>
        </div>
        <div className="font-mono-tech text-center text-xs uppercase tracking-widest text-muted-foreground sm:text-left">
          <div>kraryan700@gmail.com</div>
          <div>+91 89870 41676</div>
        </div>
        <div className="flex items-center justify-center gap-4 sm:justify-end">
          <a
            className="text-xs text-muted-foreground hover:text-accent"
            href="https://linkedin.com/in/aryan700"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-xs text-muted-foreground hover:text-accent"
            href="https://github.com/aryankr2005"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-6 text-center font-mono-tech text-[10px] uppercase tracking-widest text-muted-foreground sm:px-5 sm:text-left">
        © {new Date().getFullYear()} · Designer: Aryan Kumar
      </div>
    </footer>
  );
}
