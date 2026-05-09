import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SceneCanvas } from "@/components/scene-canvas";
import { LumbarScene } from "@/components/three-scenes";
import { BlueprintFrame, FigureCallout } from "@/components/blueprint-frame";
import lumbarModel from "@/assets/projects/lumbar-model.jpg";
import lumbarMaterials from "@/assets/projects/lumbar-materials.jpg";
import lumbarStress from "@/assets/projects/lumbar-stress.jpg";
import lumbarDeformation from "@/assets/projects/lumbar-deformation.jpg";

export const Route = createFileRoute("/projects/lumbar")({
  head: () => ({
    meta: [
      { title: "Lumbar Spine FEM Study — Aryan Kumar" },
      {
        name: "description",
        content:
          "Finite element model of the lumbar spine (L1–L5) in ANSYS Workbench evaluating whole-body vibration effects under varying compressive loads.",
      },
      { property: "og:title", content: "Lumbar Spine FEM Study — Aryan Kumar" },
      {
        property: "og:description",
        content: "FEM of L1–L5 vertebrae in ANSYS under 300/1000/3000 N.",
      },
      { property: "og:image", content: lumbarModel },
    ],
  }),
  component: LumbarPage,
});

function LumbarPage() {
  const [load, setLoad] = useState(1000);
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
                Project 01 · FEM · IIT Hyderabad Internship · 05/2025
              </div>
              <h1 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl">
                Lumbar Spine Whole-Body Vibration Study
              </h1>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                A simplified finite element model of the human lumbar spine (L1–L5) developed in
                SolidWorks and analyzed in ANSYS Workbench to evaluate stress distribution and
                deformation under physiological compressive loading representative of whole-body
                vibration.
              </p>
            </div>
            <dl className="grid grid-cols-1 gap-3 font-mono-tech text-xs sm:grid-cols-2">
              {[
                ["Mesh", "0.7 mm"],
                ["Nodes", "≈ 188 k"],
                ["Elements", "≈ 106 k"],
                ["Loads", "300 / 1000 / 3000 N"],
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

      {/* Interactive 3D */}
      <section className="border-b border-border/60">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-5 md:grid-cols-[1.3fr_1fr] md:py-20">
          <div className="relative h-[280px] sm:h-[360px] md:h-[560px]">
            <BlueprintFrame label="FIG. 01 / Interactive Stress Map" className="h-full">
              <SceneCanvas className="h-full w-full" camera={{ position: [0, 0, 5], fov: 45 }}>
                <LumbarScene load={load} />
              </SceneCanvas>
            </BlueprintFrame>
          </div>
          <div className="flex flex-col justify-center">
            <div className="font-mono-tech text-xs uppercase tracking-widest text-accent">
              Try it
            </div>
            <h2 className="mt-2 font-display text-2xl md:text-3xl">Vary the axial load.</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Drag the slider to apply load at L1. The 3D stack compresses and the colour ramp
              shifts from cyan (low stress) toward red (high stress) — a simplified analog of the
              ANSYS results.
            </p>
            <div className="mt-6 border border-border/70 bg-panel/40 p-5">
              <div className="flex items-baseline justify-between font-mono-tech text-xs uppercase tracking-widest">
                <span className="text-muted-foreground">Axial load · L1</span>
                <span className="text-accent">{load} N</span>
              </div>
              <input
                type="range"
                min={100}
                max={3000}
                step={100}
                value={load}
                onChange={(e) => setLoad(Number(e.target.value))}
                className="mt-3 w-full accent-accent"
              />
              <div className="mt-3 flex flex-wrap gap-3 font-mono-tech text-[10px] text-muted-foreground sm:justify-between">
                <button onClick={() => setLoad(300)} className="hover:text-accent">
                  300 N
                </button>
                <button onClick={() => setLoad(1000)} className="hover:text-accent">
                  1000 N
                </button>
                <button onClick={() => setLoad(3000)} className="hover:text-accent">
                  3000 N
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="border-b border-border/60 bg-panel/30">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-5 md:grid-cols-2 md:py-20">
          <div>
            <div className="font-mono-tech text-xs uppercase tracking-widest text-accent">
              Problem
            </div>
            <p className="mt-3 text-muted-foreground">
              Whole-body vibration (WBV) — common in vehicles and occupational environments — is a
              major contributor to lower back pain and lumbar spine disorders. Studying its
              mechanical effects directly on the human spine is constrained by ethical and
              experimental limits.
            </p>
          </div>
          <div>
            <div className="font-mono-tech text-xs uppercase tracking-widest text-accent">
              Solution
            </div>
            <p className="mt-3 text-muted-foreground">
              A simplified L1–L5 FEM was developed and analyzed in ANSYS Workbench. Static
              structural simulations evaluated stress distribution and deformation under different
              compressive loads to understand how vibration-induced forces affect spinal
              biomechanics.
            </p>
          </div>
        </div>
      </section>

      {/* Figures */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-5 md:py-20">
        <div className="font-mono-tech text-xs uppercase tracking-widest text-accent">Figures</div>
        <h2 className="mt-2 font-display text-3xl md:text-4xl">From geometry to deformation.</h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {[
            {
              src: lumbarModel,
              id: "01",
              title: "Lumbar spine model separated from human spinal model",
            },
            {
              src: lumbarMaterials,
              id: "02",
              title: "Materials assigned to parts of the lumbar spine model",
            },
            {
              src: lumbarStress,
              id: "03",
              title: "Normal stress distribution under variable forces",
            },
            { src: lumbarDeformation, id: "04", title: "Total deformation under variable forces" },
          ].map((f) => (
            <BlueprintFrame key={f.id} label={`FIG. ${f.id}`} className="overflow-hidden">
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

        <div className="mt-12 border border-border/70 bg-panel/40 p-5 sm:p-6 md:p-8">
          <div className="font-mono-tech text-xs uppercase tracking-widest text-accent">
            Workflow
          </div>
          <ol className="mt-4 grid gap-3 text-sm text-muted-foreground md:grid-cols-2">
            {[
              "Lumbar model from anatomical 3D data (MRI, 50th percentile male)",
              "Geometry cleaned and simplified in Blender",
              "Converted to solid bodies in SolidWorks",
              "Imported into ANSYS Workbench",
              "Mesh generated; material properties assigned",
              "Static structural simulations run at 300 / 1000 / 3000 N",
            ].map((step, i) => (
              <li key={step} className="flex gap-3">
                <span className="font-mono-tech text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <NavBetweenProjects prev={null} next={{ to: "/projects/silico", label: "Silico Damp" }} />
      </section>
    </article>
  );
}

export function NavBetweenProjects({
  prev,
  next,
}: {
  prev: { to: string; label: string } | null;
  next: { to: string; label: string } | null;
}) {
  return (
    <div className="mt-16 flex flex-col gap-4 border-t border-border/60 pt-6 font-mono-tech text-xs uppercase tracking-widest sm:flex-row sm:items-center sm:justify-between">
      {prev ? (
        <Link to={prev.to} className="text-muted-foreground hover:text-accent">
          ⟵ {prev.label}
        </Link>
      ) : (
        <span className="hidden sm:inline" />
      )}
      {next ? (
        <Link to={next.to} className="text-accent hover:underline">
          {next.label} ⟶
        </Link>
      ) : (
        <span className="hidden sm:inline" />
      )}
    </div>
  );
}
