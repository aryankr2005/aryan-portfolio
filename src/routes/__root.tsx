import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteNav, SiteFooter } from "@/components/site-nav";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="font-mono-tech text-xs uppercase tracking-widest text-accent">
          ERR / 404
        </div>
        <h1 className="mt-2 font-display text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 font-display text-xl text-foreground">Drawing not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This sheet doesn't exist in the project archive.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center border border-accent px-4 py-2 text-sm text-accent transition hover:bg-accent hover:text-accent-foreground"
        >
          Return to index
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="mt-6 border border-accent px-4 py-2 text-sm text-accent hover:bg-accent hover:text-accent-foreground"
        >
          Retry
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Aryan Kumar — Mechanical Engineering Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Aryan Kumar — mechanical engineer at NIT Trichy. CAD, CAE, FEM, and product design projects.",
      },
      { name: "author", content: "Aryan Kumar" },
      { property: "og:title", content: "Aryan Kumar — Mechanical Engineering Portfolio" },
      {
        property: "og:description",
        content: "CAD, CAE, FEM, and product design projects by Aryan Kumar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="bg-background text-foreground">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteNav />
        <main className="flex-1 pt-[72px] md:pt-16">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
