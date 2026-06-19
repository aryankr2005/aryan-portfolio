import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SceneCanvas } from "@/components/scene-canvas";
import { DamperImpactScene } from "@/components/three-scenes";
import { BlueprintFrame, FigureCallout } from "@/components/blueprint-frame";
import { NavBetweenProjects } from "./projects.lumbar";
import standImg from "@/assets/projects/silico-stand.jpg";
import impactClose from "@/assets/projects/silico-impact-close.jpg";
import impactOpen from "@/assets/projects/silico-impact-open.jpg";

export const Route = createFileRoute("/projects/silico")({
  head: () => ({
    meta: [
      { title: "Silico Damp — Aryan Kumar" },
      {
        name: "description",
        content:
          "Silicone elastomer dampener for motorcycle stands. Explicit dynamics in ANSYS shows ~30–40% noise reduction over standard EPDM.",
      },
      { property: "og:title", content: "Silico Damp — Aryan Kumar" },
      {
        property: "og:description",
        content: "High-damping silicone pad reduces motorcycle stand impact noise.",
      },
      { property: "og:image", content: standImg },
    ],
  }),
  component: SilicoPage,
});

function SilicoPage() {
  const [silicone, setSilicone] = useState(true);
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
                Project 03 · CAE · Materials · 03/2025
              </div>
              <h1 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl">
                Silico Damp
              </h1>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                A high-damping silicone elastomer pad designed to replace standard EPDM rubber at
                the motorcycle centre-stand stopper, absorbing more impact energy as strain and
                reducing transmitted noise.
              </p>
            </div>
            <dl className="grid grid-cols-1 gap-3 font-mono-tech text-xs sm:grid-cols-2">
              {[
                ["Noise ↓", "30–40 %"],
                ["Cost ↓", "≈ 20 %"],
                ["Op. range", "−40 → 200 °C"],
                ["Hardness", "40–50 A"],
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
            <BlueprintFrame label="FIG. 01 / Impact Loop" className="h-full">
              <SceneCanvas className="h-full w-full" camera={{ position: [0, 0.4, 4.5], fov: 45 }}>
                <DamperImpactScene silicone={silicone} />
              </SceneCanvas>
            </BlueprintFrame>
          </div>
          <div className="flex flex-col justify-center">
            <div className="font-mono-tech text-xs uppercase tracking-widest text-accent">
              Compare materials
            </div>
            <h2 className="mt-2 font-display text-2xl md:text-3xl">Silicone vs. EPDM.</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Toggle the pad material. The silicone variant deforms more under the same piston cycle
              — converting impact force into strain energy instead of acoustic noise.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button
                onClick={() => setSilicone(false)}
                className={`border px-4 py-3 font-mono-tech text-xs uppercase tracking-widest transition ${
                  !silicone
                    ? "border-accent text-accent glow-cyan"
                    : "border-border text-muted-foreground hover:border-accent/60"
                }`}
              >
                EPDM · 60–70 A
              </button>
              <button
                onClick={() => setSilicone(true)}
                className={`border px-4 py-3 font-mono-tech text-xs uppercase tracking-widest transition ${
                  silicone
                    ? "border-accent text-accent glow-cyan"
                    : "border-border text-muted-foreground hover:border-accent/60"
                }`}
              >
                Silicone · 40–50 A
              </button>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="min-w-[30rem] w-full border border-border/70 text-sm">
                <thead className="bg-background/60 font-mono-tech text-[10px] uppercase tracking-widest text-muted-foreground">
                  <tr>
                    <th className="border-b border-border/60 p-3 text-left">Property</th>
                    <th className="border-b border-border/60 p-3 text-left">EPDM</th>
                    <th className="border-b border-border/60 p-3 text-left">Silicone</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {[
                    ["Noise reduction", "10–15 %", "30–40 %"],
                    ["Op. temperature", "−10 → 70 °C", "−40 → 200 °C"],
                    ["Thickness", "5–7 mm", "8–12 mm"],
                    ["Waterproof", "—", "Yes"],
                  ].map((row) => (
                    <tr key={row[0]} className="border-b border-border/40 last:border-0">
                      {row.map((c, i) => (
                        <td key={i} className={`p-3 ${i === 2 ? "text-accent" : ""}`}>
                          {c}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
              Motorcycle centre and side stands generate impact noise on deployment and retraction
              due to sudden contact between stand stopper and frame. The challenge: reduce noise
              without significantly modifying the existing stand or increasing manufacturing cost.
            </p>
          </div>
          <div>
            <div className="font-mono-tech text-xs uppercase tracking-widest text-accent">
              Solution
            </div>
            <p className="mt-3 text-muted-foreground">
              A high-damping silicone elastomer pad at the stopper contact point. CAE simulations
              show the silicone undergoes greater strain, converting more impact energy into strain
              energy and reducing transmitted force — and therefore noise — across both stand-open
              and stand-close events.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-5 md:py-20">
        <div className="font-mono-tech text-xs uppercase tracking-widest text-accent">Figures</div>
        <h2 className="mt-2 font-display text-3xl md:text-4xl">From CAD to explicit dynamics.</h2>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            { src: standImg, id: "01", title: "Bike centre stand with dampeners" },
            {
              src: impactClose,
              id: "02",
              title: "Impact during closure — high damping silicone pad",
            },
            {
              src: impactOpen,
              id: "03",
              title: "Impact during opening — high damping silicone pad",
            },
          ].map((f) => (
            <BlueprintFrame key={f.id} label={`FIG. ${f.id}`}>
              <img
                src={f.src}
                alt={f.title}
                className="block h-52 w-full object-contain bg-black/40 sm:h-64"
                loading="lazy"
              />
              <div className="border-t border-border/60 p-4">
                <FigureCallout id={f.id} title={f.title} />
              </div>
            </BlueprintFrame>
          ))}
        </div>

        <NavBetweenProjects
          prev={{ to: "/projects/lumbar", label: "Lumbar Spine" }}
          next={{ to: "/projects/motopulse", label: "MotoPulse" }}
        />
      </section>
    </article>
  );
}
