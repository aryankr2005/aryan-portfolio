import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SceneCanvas } from "@/components/scene-canvas";
import { MotoPulseScene } from "@/components/three-scenes";
import { BlueprintFrame, FigureCallout } from "@/components/blueprint-frame";
import { NavBetweenProjects } from "./projects.lumbar";
import bikeImg from "@/assets/projects/motopulse-bike.jpg";
import spindleImg from "@/assets/projects/motopulse-spindle.jpg";

export const Route = createFileRoute("/projects/motopulse")({
  head: () => ({
    meta: [
      { title: "MotoPulse — Aryan Kumar" },
      {
        name: "description",
        content:
          "MotoPulse: a 250 W mid-drive electric conversion kit for bicycles with a custom pin-lock spindle for selectable manual or motorized riding.",
      },
      { property: "og:title", content: "MotoPulse — Aryan Kumar" },
      {
        property: "og:description",
        content: "Mid-drive e-bike conversion with custom pin-lock spindle.",
      },
      { property: "og:image", content: bikeImg },
    ],
  }),
  component: MotoPage,
});

function MotoPage() {
  const [exploded, setExploded] = useState(false);
  return (
    <article>
      <section className="relative border-b border-border/60">
        <div className="absolute inset-0 blueprint-grid opacity-[0.15]" />
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-5 md:py-20">
          <Link
            to="/projects"
            className="font-mono-tech text-xs uppercase tracking-widest text-muted-foreground hover:text-accent"
          >
            ⟵ Projects
          </Link>
          <div className="mt-6 grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-end">
            <div>
              <div className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-accent sm:text-xs sm:tracking-[0.3em]">
                Project 03 · Mechatronics · 02/2025
              </div>
              <h1 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl">
                MotoPulse
              </h1>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                A universal mid-drive electric conversion kit that turns standard bicycles into
                hybrid pedal-electric vehicles, with a custom pedal-shaft pin-lock that decouples
                pedaling from motor operation.
              </p>
            </div>
            <dl className="grid grid-cols-1 gap-3 font-mono-tech text-xs sm:grid-cols-2">
              {[
                ["Motor", "250 W BLDC"],
                ["Battery", "24 V · 7.5 Ah"],
                ["Range", "15–18 km"],
                ["Charge", "≈ 3.5–4 h"],
              ].map(([k, v]) => (
                <div key={k} className="border border-border/70 bg-panel/40 p-3">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="mt-1 text-accent">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-5 md:grid-cols-[1.3fr_1fr] md:py-20">
          <div className="relative h-[280px] sm:h-[360px] md:h-[560px]">
            <BlueprintFrame label="FIG. 01 / Drivetrain Assembly" className="h-full">
              <SceneCanvas className="h-full w-full" camera={{ position: [3, 2, 5], fov: 45 }}>
                <MotoPulseScene exploded={exploded} />
              </SceneCanvas>
            </BlueprintFrame>
          </div>
          <div className="flex flex-col justify-center">
            <div className="font-mono-tech text-xs uppercase tracking-widest text-accent">
              Try it
            </div>
            <h2 className="mt-2 font-display text-2xl md:text-3xl">Exploded view.</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Toggle to separate the battery, motor housing, custom spindle, hollow shafts, and
              pedals — the same parts that integrate with the bicycle's existing drivetrain.
            </p>
            <button
              onClick={() => setExploded((e) => !e)}
              className={`mt-6 self-stretch border px-5 py-3 font-mono-tech text-xs uppercase tracking-widest transition sm:self-start ${
                exploded
                  ? "border-accent text-accent glow-cyan"
                  : "border-border text-foreground hover:border-accent"
              }`}
            >
              {exploded ? "▣ Collapse assembly" : "▢ Explode assembly"}
            </button>

            <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
              {[
                "Universal kit — fits most standard bicycles",
                "Mid-drive: higher torque, better hill climbing",
                "Custom spindle with mechanical pin-lock",
                "Switch between electric and manual modes mid-ride",
                "Compact, lightweight drivetrain integration",
              ].map((f) => (
                <li key={f} className="flex gap-3">
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 bg-accent" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-panel/30">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-5 md:grid-cols-2 md:py-20">
          <div>
            <div className="font-mono-tech text-xs uppercase tracking-widest text-accent">
              Problem
            </div>
            <p className="mt-3 text-muted-foreground">
              Develop a universal e-bike conversion kit that requires minimal modifications and
              addresses the unwanted pedal rotation that occurs when a mid-drive motor system is
              engaged.
            </p>
          </div>
          <div>
            <div className="font-mono-tech text-xs uppercase tracking-widest text-accent">
              Solution
            </div>
            <p className="mt-3 text-muted-foreground">
              A mid-drive 250 W BLDC system integrated with the existing drivetrain, plus a custom
              spindle and shaft-lock: an extended main spindle with two hollow pedal shafts, a
              ball-bearing assembly for smooth motion, and a push-pin lock that engages or releases
              pedal rotation on demand.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-5 md:py-20">
        <div className="font-mono-tech text-xs uppercase tracking-widest text-accent">Figures</div>
        <h2 className="mt-2 font-display text-3xl md:text-4xl">CAD references.</h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <BlueprintFrame label="FIG. 01" className="overflow-hidden">
            <img
              src={bikeImg}
              alt="Bicycle fitted with the electric conversion kit"
              className="block h-56 w-full object-contain bg-black/40 sm:h-72"
              loading="lazy"
            />
            <div className="border-t border-border/60 p-4">
              <FigureCallout id="01" title="Bicycle fitted with the electric conversion kit" />
            </div>
          </BlueprintFrame>
          <BlueprintFrame label="FIG. 02" className="overflow-hidden">
            <img
              src={spindleImg}
              alt="Custom spindle and pedal shaft assembly"
              className="block h-56 w-full object-contain bg-black/40 sm:h-72"
              loading="lazy"
            />
            <div className="border-t border-border/60 p-4">
              <FigureCallout id="02" title="Custom spindle and pedal shaft assembly" />
            </div>
          </BlueprintFrame>
        </div>

        <NavBetweenProjects prev={{ to: "/projects/silico", label: "Silico Damp" }} next={null} />
      </section>
    </article>
  );
}
