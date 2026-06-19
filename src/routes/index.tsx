import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Wrench, FlaskConical } from "lucide-react";
import { SceneCanvas } from "@/components/scene-canvas";
import { HeroScene, AboutScene } from "@/components/three-scenes";
import { BlueprintFrame } from "@/components/blueprint-frame";
import portfolioPdf from "@/assets/projects/files/Project Portfolio.pdf";
import resumePdf from "@/assets/projects/files/Aryan-resume.pdf";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aryan Kumar — Mechanical Engineer & Designer" },
      {
        name: "description",
        content:
          "Mechanical engineering portfolio by Aryan Kumar — CAD, CAE, FEM simulation, and product design from NIT Trichy.",
      },
      { property: "og:title", content: "Aryan Kumar — Mechanical Engineer & Designer" },
      {
        property: "og:description",
        content: "CAD, CAE, FEM simulation and product design portfolio.",
      },
    ],
  }),
  component: IndexPage,
});

function IndexPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-[0.18]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />

        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-5 md:grid-cols-2 md:gap-6 md:py-20 lg:py-28">
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-accent sm:text-xs sm:tracking-[0.3em]"
            >
              ⟶ Sheet 01 / Mechanical Engineering Portfolio · 2023–2027
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 font-display text-4xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-6xl md:text-7xl"
            >
              Aryan
              <br />
              <span className="text-glow text-accent">Kumar.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 max-w-md text-sm text-muted-foreground sm:text-base md:text-lg"
            >
              Mechanical engineer designing — and simulating — physical systems. CAD, CAE, FEM. From
              spinal biomechanics at IIT Hyderabad to dampener redesigns and electric drivetrains.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <Link
                to="/projects"
                className="group inline-flex w-full items-center justify-center gap-2 border border-accent bg-accent px-5 py-3 font-mono-tech text-xs uppercase tracking-widest text-accent-foreground transition hover:bg-transparent hover:text-accent sm:w-auto"
              >
                View projects{" "}
                <ArrowRight size={14} className="transition group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center gap-2 border border-border px-5 py-3 font-mono-tech text-xs uppercase tracking-widest text-foreground transition hover:border-accent hover:text-accent sm:w-auto"
              >
                Get in touch
              </Link>
              <a
                href={resumePdf}
                download="Aryan-Kumar-Resume.pdf"
                className="inline-flex w-full items-center justify-center gap-2 border border-border px-5 py-3 font-mono-tech text-xs uppercase tracking-widest text-foreground transition hover:border-accent hover:text-accent sm:w-auto"
              >
                Download my resume
              </a>
            </motion.div>

            <div className="mt-10 grid grid-cols-1 gap-4 border-t border-border/60 pt-6 font-mono-tech text-xs sm:grid-cols-3 sm:gap-3">
              <div>
                <div className="text-accent">B.Tech ME</div>
                <div className="text-muted-foreground">NIT Trichy</div>
              </div>
              <div>
                <div className="text-accent">3 Projects</div>
                <div className="text-muted-foreground">CAD · CAE · FEM</div>
              </div>
              <div>
                <div className="text-accent">CSWA</div>
                <div className="text-muted-foreground">Certified</div>
              </div>
            </div>
          </div>

          <div className="relative h-[280px] sm:h-[360px] md:h-[560px]">
            <BlueprintFrame label="FIG. 00 / Hero Assembly" className="h-full">
              <SceneCanvas className="h-full w-full">
                <HeroScene />
              </SceneCanvas>
            </BlueprintFrame>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="relative border-t border-border/60 bg-panel/30">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-5 md:grid-cols-[1fr_1.2fr] md:py-24">
          <div className="relative order-2 h-[240px] sm:h-[320px] md:order-1 md:h-[460px]">
            <BlueprintFrame label="FIG. 01 / Profile" className="h-full">
              <SceneCanvas className="h-full w-full">
                <AboutScene />
              </SceneCanvas>
            </BlueprintFrame>
          </div>
          <div className="order-1 md:order-2">
            <div className="font-mono-tech text-xs uppercase tracking-widest text-accent">
              §02 — About
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Designing systems that move,
              <br />
              <span className="text-accent">absorb, and survive load.</span>
            </h2>
            <p className="mt-6 max-w-xl text-muted-foreground">
              I'm a mechanical engineering undergraduate at NIT Tiruchirappalli with a focus on
              simulation-driven product design. My work spans biomechanical FEM, vibration & impact
              analysis, and electromechanical conversion systems for everyday products.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: Cpu,
                  title: "Simulation",
                  body: "ANSYS Workbench · Static, dynamic, explicit",
                },
                { icon: Wrench, title: "CAD", body: "SolidWorks · Fusion360 · AutoCAD" },
                { icon: FlaskConical, title: "Research", body: "FEM · Biomechanics · Materials" },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="border border-border/70 bg-background/50 p-4">
                  <Icon size={18} className="text-accent" />
                  <div className="mt-2 font-display text-sm">{title}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{body}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Link
                to="/skills"
                className="inline-flex items-center gap-2 font-mono-tech text-xs uppercase tracking-widest text-accent hover:underline"
              >
                Full skill matrix <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT TEASER */}
      <section className="relative border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-5 md:py-24">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="font-mono-tech text-xs uppercase tracking-widest text-accent">
                §03 — Selected Work
              </div>
              <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
                Three case studies.
              </h2>
            </div>
            <Link
              to="/projects"
              className="hidden font-mono-tech text-xs uppercase tracking-widest text-muted-foreground hover:text-accent md:inline"
            >
              All projects ⟶
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                to: "/projects/amr",
                tag: "CAD · Mechanical Design",
                title: "Autonomous Mobile Robot",
                body: "Compact AMR for 20 kg payloads with differential drive and packaged autonomy hardware.",
              },
              {
                to: "/projects/lumbar",
                tag: "FEM · Biomech",
                title: "Lumbar Spine Vibration Study",
                body: "FEM of L1–L5 in ANSYS, evaluating WBV under 300/1000/3000 N.",
              },
              {
                to: "/projects/silico",
                tag: "CAE · Materials",
                title: "Silico Damp",
                body: "Silicone elastomer dampener for motorcycle stands. ~30–40% noise reduction.",
              }
            ].map((p) => (
              <article
                key={p.to}
                className="group relative border border-border/70 bg-panel/40 p-6 transition hover:border-accent corner-ticks"
              >
                <div className="font-mono-tech text-[10px] uppercase tracking-widest text-accent">
                  {p.tag}
                </div>
                <Link to={p.to} className="mt-4 block font-display text-xl hover:text-accent">
                  {p.title}
                </Link>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
                <a
                  href={portfolioPdf}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-mono-tech text-xs uppercase tracking-widest text-accent"
                >
                  Open ⟶
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
