import { Canvas, type CanvasProps } from "@react-three/fiber";
import { Suspense, type ReactNode } from "react";
import { useIsMobile } from "@/hooks/use-is-mobile";

interface SceneCanvasProps extends Omit<CanvasProps, "children"> {
  children: ReactNode;
  className?: string;
}

export function SceneCanvas({ children, className, ...props }: SceneCanvasProps) {
  const isMobile = useIsMobile();
  return (
    <div className={className} style={{ touchAction: "pan-y" }}>
      <Canvas
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        gl={{ antialias: !isMobile, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 6], fov: 45 }}
        {...props}
      >
        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
    </div>
  );
}
