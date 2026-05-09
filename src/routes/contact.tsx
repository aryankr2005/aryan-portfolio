import { createFileRoute } from "@tanstack/react-router";
import { SceneCanvas } from "@/components/scene-canvas";
import { ContactScene } from "@/components/three-scenes";
import { BlueprintFrame } from "@/components/blueprint-frame";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Aryan Kumar" },
      {
        name: "description",
        content:
          "Get in touch with Aryan Kumar — mechanical engineer, NIT Trichy. Email, phone, LinkedIn, and GitHub.",
      },
      { property: "og:title", content: "Contact — Aryan Kumar" },
      { property: "og:description", content: "Email, phone, LinkedIn, and GitHub." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="relative">
      <div className="absolute inset-0 blueprint-grid opacity-[0.18]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-5 md:grid-cols-[1fr_1fr] md:py-24">
        <div className="flex flex-col justify-center">
          <div className="font-mono-tech text-xs uppercase tracking-[0.3em] text-accent">
            ⟶ Sheet 04 / Contact
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl">
            Let's build
            <br />
            <span className="text-accent text-glow">something.</span>
          </h1>
          <p className="mt-5 max-w-md text-sm text-muted-foreground sm:text-base">
            Open to collaborations, internships, and engineering challenges — especially in
            simulation, product design, and mechatronics.
          </p>

          <div className="mt-10 grid gap-3">
            <ContactRow
              icon={Mail}
              label="Email"
              value="kraryan700@gmail.com"
              href="mailto:kraryan700@gmail.com"
            />
            <ContactRow
              icon={Phone}
              label="Phone"
              value="+91 89870 41676"
              href="tel:+918987041676"
            />
            <ContactRow icon={MapPin} label="Location" value="Bangalore, Karnataka" />
            <ContactRow
              icon={Linkedin}
              label="LinkedIn"
              value="linkedin.com/in/aryan700"
              href="https://linkedin.com/in/aryan700"
            />
            <ContactRow
              icon={Github}
              label="GitHub"
              value="github.com/aryankr2005"
              href="https://github.com/aryankr2005"
            />
          </div>

          <a
            href="https://linkedin.com/in/aryan700"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex w-full items-center justify-center gap-2 border border-accent bg-accent px-6 py-3 font-mono-tech text-xs uppercase tracking-widest text-accent-foreground transition hover:bg-transparent hover:text-accent sm:w-fit"
          >
            LinkedIn message
          </a>
        </div>

        <div className="relative h-[280px] sm:h-[400px] md:h-[640px]">
          <BlueprintFrame label="FIG. 04 / Signal" className="h-full">
            <SceneCanvas className="h-full w-full">
              <ContactScene />
            </SceneCanvas>
          </BlueprintFrame>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const Inner = (
    <div className="group flex items-start gap-4 border border-border/70 bg-panel/40 px-4 py-3 transition hover:border-accent">
      <Icon size={16} className="text-accent" />
      <div className="min-w-0 flex-1">
        <div className="font-mono-tech text-[10px] uppercase tracking-widest text-muted-foreground">
          {label}
        </div>
        <div className="break-words text-sm text-foreground">{value}</div>
      </div>
      {href && (
        <span className="mt-0.5 font-mono-tech text-xs text-muted-foreground group-hover:text-accent">
          ⟶
        </span>
      )}
    </div>
  );
  if (href)
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {Inner}
      </a>
    );
  return Inner;
}
