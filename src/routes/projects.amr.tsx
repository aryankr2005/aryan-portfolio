import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SceneCanvas } from "@/components/scene-canvas";
import { AMRScene } from "@/components/three-scenes";
import { BlueprintFrame, FigureCallout } from "@/components/blueprint-frame";
import { NavBetweenProjects } from "./projects.lumbar";
import amrIsometric from "@/assets/projects/amr-isometric.jpg";
import amrElectronics from "@/assets/projects/amr-electronics.jpg";
import amrChassis from "@/assets/projects/amr-chassis.jpg";
import amrExploded from "@/assets/projects/amr-exploded.jpg";

export const Route = createFileRoute("/projects/amr")({
  head: () => ({
    meta: [
      { title: "AMR — Aryan Kumar" },
      {
        name: "description",
        content:
          "Design and development of a compact Autonomous Mobile Robot capable of carrying 20 kg payload with a 2-drive + 4-caster differential drive configuration.",
      },
      { property: "og:title", content: "AMR — Aryan Kumar" },
      {
        property: "og:description",
        content: "Compact AMR with 20 kg payload, Al 6061-T6 chassis, and LiFePO₄ battery.",
      },
      { property: "og:image", content: amrIsometric },
    ],
  }),
  component: AMRPage,
});

const figures = [
  { id: "01", title: "Isometric view of the AMR", src: amrIsometric },
  { id: "02", title: "Arrangement of electronics inside the AMR", src: amrElectronics },
  { id: "03", title: "Design of the chassis", src: amrChassis },
  { id: "04", title: "Isometric exploded view of the AMR", src: amrExploded },
];

const materials = [
  ["Outer Cover", "ABS"],
  ["Chassis", "Al 6061-T6"],
  ["Drive Axle", "AISI 1020 Steel"],
  ["Drive Wheel", "Natural Rubber"],
  ["Caster Wheel", "Polyurethane"],
];

function AMRPage() {
  const [exploded, setExploded] = useState(false);
  return (
    <article>
      {/* ── Hero ── */}
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
                Project 01 · CAD · Mechanical Design · 06/2025
              </div>
              <h1 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl">
                Autonomous Mobile Robot
              </h1>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                A compact and manufacturable AMR designed for a 20 kg payload, featuring a
                2-drive + 4-caster differential drive configuration, Al 6061-T6 chassis, and
                autonomous navigation hardware packaged within a 500 × 500 × 500 mm envelope.
              </p>
            </div>
            <dl className="grid grid-cols-1 gap-3 font-mono-tech text-xs sm:grid-cols-2">
              {[
                ["Payload", "20 kg"],
                ["Total Mass", "≈ 38.47 kg"],
                ["Drive", "2 + 4 caster"],
                ["Envelope", "500³ mm"],
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

      {/* ── Interactive 3D ── */}
      <section className="border-b border-border/60">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-5 md:grid-cols-[1.3fr_1fr] md:py-20">
          <div className="relative h-[280px] sm:h-[360px] md:h-[560px]">
            <BlueprintFrame label="FIG. 01 / Assembly View" className="h-full">
              <SceneCanvas className="h-full w-full" camera={{ position: [3, 2.5, 5], fov: 45 }}>
                <AMRScene exploded={exploded} />
              </SceneCanvas>
            </BlueprintFrame>
          </div>

          <div className="flex flex-col justify-center">
            <div className="font-mono-tech text-xs uppercase tracking-widest text-accent">
              Try it
            </div>
            <h2 className="mt-2 font-display text-2xl md:text-3xl">Exploded assembly.</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Toggle to separate the ABS outer cover, electronics tray, Al 6061-T6 chassis, BLDC
              drive wheels, and polyurethane casters — mirroring the layered packaging approach
              used in the design.
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

            {/* Material table */}
            <div className="mt-8 overflow-x-auto">
              <table className="w-full border border-border/70 text-sm">
                <thead className="bg-background/60 font-mono-tech text-[10px] uppercase tracking-widest text-muted-foreground">
                  <tr>
                    <th className="border-b border-border/60 p-3 text-left">Component</th>
                    <th className="border-b border-border/60 p-3 text-left">Material</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {materials.map(([component, material]) => (
                    <tr key={component} className="border-b border-border/40 last:border-0">
                      <td className="p-3">{component}</td>
                      <td className="p-3 text-accent">{material}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem & Solution ── */}
      <section className="border-b border-border/60 bg-panel/30">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-5 md:grid-cols-2 md:py-20">
          <div>
            <div className="font-mono-tech text-xs uppercase tracking-widest text-accent">
              Problem
            </div>
            <p className="mt-3 text-muted-foreground">
              Design a compact and manufacturable Autonomous Mobile Robot capable of carrying a
              20 kg payload, integrating autonomous navigation hardware, maintaining structural
              stability, and achieving reliable movement while operating within defined
              dimensional, weight, and packaging constraints.
            </p>
          </div>
          <div>
            <div className="font-mono-tech text-xs uppercase tracking-widest text-accent">
              Solution
            </div>
            <p className="mt-3 text-muted-foreground">
              Developed a lightweight and structurally efficient AMR platform with optimized
              packaging, stable load transfer, and manufacturable architecture. The final design
              balanced mobility, payload capability, structural performance, and subsystem
              integration using a 2-drive + 4-caster differential drive within a 500³ mm
              envelope powered by a 12.8 V LiFePO₄ battery.
            </p>
          </div>
        </div>
      </section>

      {/* ── Figures ── */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-5 md:py-20">
        <div className="font-mono-tech text-xs uppercase tracking-widest text-accent">Figures</div>
        <h2 className="mt-2 font-display text-3xl md:text-4xl">From concept to assembly.</h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {figures.map((f) => (
            <BlueprintFrame key={f.id} label={`FIG. ${f.id}`}>
              <img
                src={f.src}
                alt={f.title}
                className="block h-56 w-full object-contain bg-black/40 sm:h-72"
                loading="lazy"
              />
              <div className="border-t border-border/60 p-4">
                <FigureCallout id={f.id} title={f.title} />
              </div>
            </BlueprintFrame>
          ))}
        </div>

        {/* ── Workflow ── */}
        <div className="mt-12 border border-border/70 bg-panel/40 p-5 sm:p-6 md:p-8">
          <div className="font-mono-tech text-xs uppercase tracking-widest text-accent">
            Workflow
          </div>
          <ol className="mt-4 grid gap-3 text-sm text-muted-foreground md:grid-cols-2">
            {[
              "Defined mechanical requirements and design constraints",
              "Selected differential drive for maneuverability and control",
              "Developed the chassis and wheel support structure",
              "Integrated internal components for compact packaging",
              "Designed outer enclosure and sensor mounting layout",
              "Validated design through load, clearance, and mass calculations",
            ].map((step, i) => (
              <li key={step} className="flex gap-3">
                <span className="font-mono-tech text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* ── Key Specifications ── */}
        <div className="mt-8 border border-border/70 bg-panel/40 p-5 sm:p-6 md:p-8">
          <div className="font-mono-tech text-xs uppercase tracking-widest text-accent">
            Key Specifications
          </div>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 text-sm">
            {[
              ["Payload Capacity", "20 kg"],
              ["Total Operating Mass", "≈ 38.47 kg"],
              ["Power System", "12.8 V LiFePO₄ battery"],
              ["Robot Envelope", "500 × 500 × 500 mm"],
              ["Drive Configuration", "2-drive + 4-caster"],
              ["Turning Radius", "Near zero-radius"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-muted-foreground font-mono-tech text-[10px] uppercase tracking-widest">
                  {k}
                </dt>
                <dd className="mt-1 text-accent font-mono-tech text-xs">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <NavBetweenProjects prev={null} next={{ to: "/projects/lumbar", label: "Lumbar Spine" }} />
      </section>
    </article>
  );
}
