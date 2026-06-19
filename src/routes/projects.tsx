import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { SceneCanvas } from "@/components/scene-canvas";
import { ProjectsTrio } from "@/components/three-scenes";
import { BlueprintFrame } from "@/components/blueprint-frame";
import { ArrowRight } from "lucide-react";
import portfolioPdf from "@/assets/projects/files/Project Portfolio.pdf";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Aryan Kumar" },
      {
        name: "description",
        content:
          "Mechanical engineering projects: lumbar spine FEM, Silico Damp dampener, and MotoPulse e-bike conversion.",
      },
      { property: "og:title", content: "Projects — Aryan Kumar" },
      {
        property: "og:description",
        content: "Three engineering case studies: FEM, CAE, and mechatronics.",
      },
    ],
  }),
  component: ProjectsRouteComponent,
});

function ProjectsRouteComponent() {
  const { pathname } = useLocation();
  const isProjectsIndex = /\/projects\/?$/.test(pathname);

  return isProjectsIndex ? <ProjectsPage /> : <Outlet />;
}

const projects = [
  {
    to: "/projects/amr" as const,
    no: "01",
    tag: "CAD · Mechanical Design",
    title: "Autonomous Mobile Robot",
    summary:
      "Compact AMR with a 2-drive + 4-caster differential drive, Al 6061-T6 chassis, and 12.8 V LiFePO₄ battery — designed for 20 kg payload within a 500 × 500 × 500 mm envelope.",
    stats: ["20 kg payload", "500³ mm envelope", "38.47 kg total"],
  },
  {
    to: "/projects/lumbar" as const,
    no: "02",
    tag: "FEM · Biomechanics · IIT Hyderabad",
    title: "Lumbar Spine Vibration Study",
    summary:
      "Finite element model of L1–L5 evaluated in ANSYS Workbench under axial loads of 300, 1000, and 3000 N to study whole-body vibration effects on the spine.",
    stats: ["188k nodes", "106k elements", "0.7 mm mesh"],
  },
  {
    to: "/projects/silico" as const,
    no: "03",
    tag: "CAE · Materials · Product",
    title: "Silico Damp",
    summary:
      "High-damping silicone elastomer pad replacing standard EPDM in motorcycle centre stands. Explicit dynamics simulations show greater strain energy absorption and quieter operation.",
    stats: ["30–40% noise ↓", "−20% cost", "−40°C to 200°C"],
  },
  {
    to: "/projects/motopulse" as const,
    no: "04",
    tag: "Mechatronics · Mechanical Design",
    title: "MotoPulse",
    summary:
      "Universal mid-drive electric conversion kit for bicycles with a custom pedal-shaft pin-lock that decouples pedaling from motor operation.",
    stats: ["250 W mid-drive", "24 V · 7.5 Ah", "15–18 km range"],
  },
];

function ProjectsPage() {
  return (
    <>
      <section className="relative border-b border-border/60">
        <div className="absolute inset-0 blueprint-grid opacity-[0.15]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-5 md:grid-cols-2 md:py-20">
          <div>
            <div className="font-mono-tech text-xs uppercase tracking-[0.3em] text-accent">
              ⟶ Sheet 02 / Project Index
            </div>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Projects.
            </h1>
            <p className="mt-4 max-w-md text-muted-foreground">
              Four engineering case studies — each anchored in CAD, validated by simulation, and
              documented as if it were going to a manufacturing line.
            </p>
          </div>
          <div className="relative h-[220px] sm:h-[280px] md:h-[360px]">
            <BlueprintFrame label="FIG. 02 / Trio" className="h-full">
              <SceneCanvas className="h-full w-full" camera={{ position: [0, 0, 7], fov: 45 }}>
                <ProjectsTrio />
              </SceneCanvas>
            </BlueprintFrame>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-5 md:py-20">
        <div className="space-y-10">
          {projects.map((p) => (
            <article
              key={p.to}
              className="group relative border border-border/70 bg-panel/30 p-5 transition hover:border-accent sm:p-6 md:p-10 corner-ticks"
            >
              <div className="grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-start md:gap-10">
                <div className="font-display text-5xl text-accent/40 group-hover:text-accent md:text-7xl">
                  {p.no}
                </div>
                <div>
                  <div className="font-mono-tech text-[10px] uppercase tracking-widest text-accent">
                    {p.tag}
                  </div>
                  <Link to={p.to} className="mt-2 block font-display text-2xl hover:text-accent md:text-3xl">
                    {p.title}
                  </Link>
                  <p className="mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
                    {p.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stats.map((s) => (
                      <span
                        key={s}
                        className="border border-border/70 bg-background/50 px-2.5 py-1 font-mono-tech text-[10px] uppercase tracking-widest text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={portfolioPdf}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-mono-tech text-xs uppercase tracking-widest text-accent md:self-end"
                >
                  Open <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
