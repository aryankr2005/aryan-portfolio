import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";

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
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

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

