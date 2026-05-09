import { createFileRoute } from "@tanstack/react-router";
import { SceneCanvas } from "@/components/scene-canvas";
import { SkillsOrbScene } from "@/components/three-scenes";
import { BlueprintFrame } from "@/components/blueprint-frame";
import { Button } from "@/components/ui/button";
import { Award, Briefcase, GraduationCap, Trophy } from "lucide-react";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills & Certifications — Aryan Kumar" },
      {
        name: "description",
        content:
          "CAD, CAE, and FEM skills with certifications including CSWA, AutoCAD, and Fusion360 Generative Design.",
      },
      { property: "og:title", content: "Skills & Certifications — Aryan Kumar" },
      { property: "og:description", content: "Tools, certifications, and recognitions." },
    ],
  }),
  component: SkillsPage,
});

const skills = [
  { name: "SolidWorks", group: "CAD" },
  { name: "Fusion 360", group: "CAD" },
  { name: "AutoCAD", group: "CAD" },
  { name: "ANSYS Workbench", group: "Simulation" },
  { name: "Static / Dynamic FEM", group: "Simulation" },
  { name: "Explicit Dynamics", group: "Simulation" },
];

const skillGroups = ["CAD", "Simulation"] as const;

function SkillsPage() {
  return (
    <>
      <section className="relative border-b border-border/60">
        <div className="absolute inset-0 blueprint-grid opacity-[0.15]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-5 md:grid-cols-[1fr_1fr] md:py-20">
          <div>
            <div className="font-mono-tech text-xs uppercase tracking-[0.3em] text-accent">
              ⟶ Sheet 03 / Toolset
            </div>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Skills.
            </h1>
            <p className="mt-4 max-w-md text-muted-foreground">
              A working set of CAD, CAE, and simulation tools — used daily across coursework,
              internships, and personal engineering projects.
            </p>
          </div>
          <div className="relative h-[220px] sm:h-[320px] md:h-[440px]">
            <BlueprintFrame label="FIG. 03 / Skill Polyhedron" className="h-full">
              <SceneCanvas className="h-full w-full">
                <SkillsOrbScene />
              </SceneCanvas>
            </BlueprintFrame>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-5 md:py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <div className="font-mono-tech text-xs uppercase tracking-widest text-accent">
              Tools
            </div>
            <div className="mt-6 space-y-6">
              {skillGroups.map((group) => (
                <div
                  key={group}
                  className="border border-border/70 bg-panel/30 p-5 corner-ticks relative"
                >
                  <div className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    {group}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {skills
                      .filter((skill) => skill.group === group)
                      .map((skill) => (
                        <Button
                          key={skill.name}
                          type="button"
                          variant="outline"
                          size="sm"
                          className="rounded-none border-border/80 bg-background/40 px-3 py-2 font-mono-tech uppercase tracking-widest text-foreground hover:border-accent hover:bg-accent/10 hover:text-accent"
                        >
                          {skill.name}
                        </Button>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative border border-border/70 bg-panel/40 p-5 sm:p-6 corner-ticks">
              <div className="flex items-center gap-3">
                <Briefcase size={18} className="text-accent" />
                <div className="font-display text-lg">Internships</div>
              </div>
              <ul className="mt-4 space-y-4 text-sm">
                <li>
                  <div className="text-foreground">Research Internship</div>
                  <div className="text-muted-foreground">IIT Hyderabad · 05/2025</div>
                </li>
              </ul>
            </div>
            <div className="relative border border-border/70 bg-panel/40 p-5 sm:p-6 corner-ticks">
              <div className="flex items-center gap-3">
                <Award size={18} className="text-accent" />
                <div className="font-display text-lg">Certifications</div>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="font-mono-tech text-accent">01</span> Certified SolidWorks
                  Associate (CSWA)
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono-tech text-accent">02</span> AutoCAD 2D & 3D — Udemy
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono-tech text-accent">03</span> Generative Design in Fusion
                  360
                </li>
              </ul>
            </div>

            <div className="relative border border-border/70 bg-panel/40 p-5 sm:p-6 corner-ticks">
              <div className="flex items-center gap-3">
                <Trophy size={18} className="text-accent" />
                <div className="font-display text-lg">Achievements</div>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="font-mono-tech text-accent">★</span> Bajaj TORQ '25 — National
                  Finalist
                </li>
              </ul>
            </div>

            <div className="relative border border-border/70 bg-panel/40 p-5 sm:p-6 corner-ticks">
              <div className="flex items-center gap-3">
                <GraduationCap size={18} className="text-accent" />
                <div className="font-display text-lg">Education</div>
              </div>
              <ul className="mt-4 space-y-4 text-sm">
                <li>
                  <div className="text-foreground">B.Tech, Mechanical Engineering</div>
                  <div className="text-muted-foreground">NIT Tiruchirappalli · 2023 – 2027</div>
                </li>
                <li>
                  <div className="text-foreground">Senior Secondary Education</div>
                  <div className="text-muted-foreground">
                    St. Dominic Savio's High School · 2021 – 2023
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
