import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Grid, Edges } from "@react-three/drei";
import * as THREE from "three";

const ACCENT = "#22d3ee";
const BLUE = "#1e3a5f";

/* ---------- Hero: rotating gear/cog assembly ---------- */
export function HeroScene() {
  const grp = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!grp.current) return;
    const t = state.clock.elapsedTime;
    grp.current.rotation.y = t * 0.25;
    grp.current.rotation.x = Math.sin(t * 0.3) * 0.15;
  });
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={2} color={ACCENT} />
      <pointLight position={[-5, -3, -3]} intensity={1.2} color="#3b82f6" />

      <Grid
        args={[24, 24]}
        position={[0, -2.2, 0]}
        cellColor={BLUE}
        sectionColor={ACCENT}
        fadeDistance={18}
        fadeStrength={2}
        cellThickness={0.6}
        sectionThickness={1.2}
        infiniteGrid
      />

      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
        <group ref={grp}>
          {/* Main gear */}
          <mesh>
            <cylinderGeometry args={[1.6, 1.6, 0.4, 24]} />
            <meshStandardMaterial color={BLUE} metalness={0.7} roughness={0.3} wireframe />
            <Edges color={ACCENT} threshold={1} />
          </mesh>
          {/* Teeth */}
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i / 12) * Math.PI * 2;
            return (
              <mesh
                key={i}
                position={[Math.cos(a) * 1.75, 0, Math.sin(a) * 1.75]}
                rotation={[0, -a, 0]}
              >
                <boxGeometry args={[0.3, 0.4, 0.4]} />
                <meshStandardMaterial color={ACCENT} emissive={ACCENT} emissiveIntensity={0.4} />
              </mesh>
            );
          })}
          {/* Inner hub */}
          <mesh>
            <torusGeometry args={[0.7, 0.08, 16, 64]} />
            <meshStandardMaterial color={ACCENT} emissive={ACCENT} emissiveIntensity={0.8} />
          </mesh>
          {/* Axis bar */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.12, 0.12, 4.5, 16]} />
            <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.2} />
          </mesh>
        </group>
      </Float>

      {/* Particles */}
      <Particles count={80} />
    </>
  );
}

function Particles({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 18;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }
  useFrame((s) => {
    if (ref.current) ref.current.rotation.y = s.clock.elapsedTime * 0.05;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color={ACCENT} size={0.04} transparent opacity={0.7} />
    </points>
  );
}

/* ---------- About: torus knot ---------- */
export function AboutScene() {
  const m = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (!m.current) return;
    m.current.rotation.x = s.clock.elapsedTime * 0.3;
    m.current.rotation.y = s.clock.elapsedTime * 0.2;
  });
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[3, 3, 3]} color={ACCENT} intensity={2} />
      <Float floatIntensity={1.2} speed={1.5}>
        <mesh ref={m}>
          <torusKnotGeometry args={[1.1, 0.32, 160, 24]} />
          <meshStandardMaterial color={BLUE} metalness={0.8} roughness={0.2} wireframe />
          <Edges color={ACCENT} />
        </mesh>
      </Float>
    </>
  );
}

/* ---------- Projects index: 3 floating objects ---------- */
export function VertebraStack({ scale = 1 }: { scale?: number }) {
  const g = useRef<THREE.Group>(null);
  useFrame((s) => {
    if (g.current) g.current.rotation.y = s.clock.elapsedTime * 0.4;
  });
  return (
    <group ref={g} scale={scale}>
      {[0, 1, 2, 3, 4].map((i) => (
        <group key={i} position={[0, i * 0.42 - 0.84, 0]}>
          <mesh>
            <cylinderGeometry args={[0.55 - i * 0.03, 0.55 - i * 0.03, 0.22, 24]} />
            <meshStandardMaterial color={BLUE} metalness={0.6} roughness={0.4} />
            <Edges color={ACCENT} />
          </mesh>
          <mesh position={[0, 0.16, 0]}>
            <torusGeometry args={[0.5 - i * 0.03, 0.04, 12, 32]} />
            <meshStandardMaterial color={ACCENT} emissive={ACCENT} emissiveIntensity={0.5} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export function DamperDisc({ scale = 1 }: { scale?: number }) {
  const g = useRef<THREE.Group>(null);
  useFrame((s) => {
    if (!g.current) return;
    const t = s.clock.elapsedTime;
    g.current.rotation.x = Math.sin(t) * 0.3;
    g.current.rotation.z = t * 0.25;
  });
  return (
    <group ref={g} scale={scale}>
      <mesh>
        <cylinderGeometry args={[1, 1, 0.35, 32]} />
        <meshStandardMaterial color="#0d0d0d" roughness={0.8} />
        <Edges color={ACCENT} />
      </mesh>
      <mesh position={[0, 0.22, 0]}>
        <cylinderGeometry args={[0.85, 0.85, 0.1, 32]} />
        <meshStandardMaterial
          color={ACCENT}
          emissive={ACCENT}
          emissiveIntensity={0.3}
          transparent
          opacity={0.7}
        />
      </mesh>
      <mesh position={[0, -0.22, 0]} rotation={[Math.PI, 0, 0]}>
        <cylinderGeometry args={[0.85, 0.85, 0.1, 32]} />
        <meshStandardMaterial
          color={ACCENT}
          emissive={ACCENT}
          emissiveIntensity={0.3}
          transparent
          opacity={0.7}
        />
      </mesh>
    </group>
  );
}

export function CrankShaft({ scale = 1 }: { scale?: number }) {
  const g = useRef<THREE.Group>(null);
  useFrame((s) => {
    if (g.current) g.current.rotation.z = s.clock.elapsedTime * 0.8;
  });
  return (
    <group ref={g} scale={scale}>
      {/* central shaft */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.12, 0.12, 2.4, 16]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.2} />
      </mesh>
      {/* crank arms */}
      {[-1, 1].map((dir) => (
        <group key={dir} position={[dir * 1.1, 0, 0]}>
          <mesh>
            <boxGeometry args={[0.18, 1.2, 0.18]} />
            <meshStandardMaterial color={BLUE} metalness={0.7} />
            <Edges color={ACCENT} />
          </mesh>
          <mesh position={[0, dir * 0.6, 0.18]}>
            <cylinderGeometry args={[0.16, 0.16, 0.28, 16]} />
            <meshStandardMaterial color={ACCENT} emissive={ACCENT} emissiveIntensity={0.4} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export function ProjectsTrio() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 4, 4]} color={ACCENT} intensity={2} />
      <pointLight position={[-4, -2, 2]} color="#3b82f6" intensity={1} />
      <Float speed={1.5} rotationIntensity={0.3}>
        <group position={[-2.6, 0, 0]}>
          <VertebraStack scale={0.9} />
        </group>
      </Float>
      <Float speed={1.8} rotationIntensity={0.4}>
        <group position={[0, 0, 0]}>
          <DamperDisc scale={0.95} />
        </group>
      </Float>
      <Float speed={1.3} rotationIntensity={0.4}>
        <group position={[2.6, 0, 0]}>
          <CrankShaft scale={0.85} />
        </group>
      </Float>
    </>
  );
}

/* ---------- Lumbar stress visualization ---------- */
function stressColor(load: number, idx: number): string {
  // higher load => more red
  const intensity = Math.min(1, (load / 3000) * (1 - idx * 0.1));
  const r = Math.floor(34 + intensity * 220);
  const g = Math.floor(211 - intensity * 160);
  const b = Math.floor(238 - intensity * 200);
  return `rgb(${r}, ${g}, ${b})`;
}

export function LumbarScene({ load }: { load: number }) {
  const g = useRef<THREE.Group>(null);
  useFrame((s) => {
    if (g.current) g.current.rotation.y = s.clock.elapsedTime * 0.4;
  });
  // exaggerate compression with load
  const compress = (load / 3000) * 0.18;
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[3, 3, 3]} color={ACCENT} intensity={2} />
      <pointLight position={[-3, -3, 3]} color="#ef4444" intensity={load / 1500} />
      <group ref={g}>
        {[0, 1, 2, 3, 4].map((i) => {
          const y = i * (0.5 - compress) - 1;
          return (
            <group key={i} position={[0, y, 0]}>
              <mesh>
                <cylinderGeometry args={[0.6 - i * 0.04, 0.6 - i * 0.04, 0.28, 32]} />
                <meshStandardMaterial
                  color={stressColor(load, i)}
                  emissive={stressColor(load, i)}
                  emissiveIntensity={0.25}
                  metalness={0.4}
                  roughness={0.5}
                />
                <Edges color={ACCENT} />
              </mesh>
              {/* disc */}
              <mesh position={[0, -0.18, 0]}>
                <cylinderGeometry args={[0.5 - i * 0.04, 0.55 - i * 0.04, 0.08, 32]} />
                <meshStandardMaterial color="#fbbf24" transparent opacity={0.85} />
              </mesh>
            </group>
          );
        })}
      </group>
    </>
  );
}

/* ---------- Silico Damp: piston + pad ---------- */
export function DamperImpactScene({ silicone }: { silicone: boolean }) {
  const piston = useRef<THREE.Mesh>(null);
  const pad = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    const t = s.clock.elapsedTime;
    const cycle = (Math.sin(t * 1.6) + 1) / 2; // 0..1
    if (piston.current) piston.current.position.y = 1.2 - cycle * 1.0;
    if (pad.current) {
      const compress = silicone ? cycle * 0.45 : cycle * 0.18;
      pad.current.scale.y = 1 - compress;
      pad.current.scale.x = 1 + compress * 0.3;
      pad.current.scale.z = 1 + compress * 0.3;
      const mat = pad.current.material as THREE.MeshStandardMaterial;
      const intensity = silicone ? cycle : cycle * 0.4;
      mat.emissiveIntensity = intensity * 1.2;
    }
  });
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[3, 4, 3]} color={ACCENT} intensity={2.4} />
      <pointLight position={[-3, 1, 2]} color="#f59e0b" intensity={1} />
      {/* base/anvil */}
      <mesh position={[0, -0.7, 0]}>
        <boxGeometry args={[2.4, 0.3, 1.2]} />
        <meshStandardMaterial color="#475569" metalness={0.9} roughness={0.3} />
        <Edges color={ACCENT} />
      </mesh>
      {/* pad */}
      <mesh ref={pad} position={[0, -0.35, 0]}>
        <cylinderGeometry args={[0.55, 0.55, 0.4, 32]} />
        <meshStandardMaterial
          color={silicone ? "#f472b6" : "#0f172a"}
          emissive={silicone ? "#22d3ee" : "#94a3b8"}
          roughness={0.5}
        />
        <Edges color={ACCENT} />
      </mesh>
      {/* piston */}
      <mesh ref={piston}>
        <cylinderGeometry args={[0.45, 0.45, 1.2, 24]} />
        <meshStandardMaterial color="#cbd5e1" metalness={0.95} roughness={0.15} />
        <Edges color={ACCENT} />
      </mesh>
      {/* guide rails */}
      {[-0.9, 0.9].map((x) => (
        <mesh key={x} position={[x, 0.3, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 2.6, 12]} />
          <meshStandardMaterial color={BLUE} />
        </mesh>
      ))}
    </>
  );
}

/* ---------- MotoPulse: exploded drivetrain ---------- */
export function MotoPulseScene({ exploded }: { exploded: boolean }) {
  const g = useRef<THREE.Group>(null);
  useFrame((s) => {
    if (g.current) g.current.rotation.y = s.clock.elapsedTime * 0.3;
  });
  const e = exploded ? 1 : 0;
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 4, 4]} color={ACCENT} intensity={2} />
      <pointLight position={[-4, -2, 2]} color="#3b82f6" intensity={1.2} />
      <group ref={g}>
        {/* battery */}
        <mesh position={[0, 1.4 + e * 0.8, 0]}>
          <boxGeometry args={[1.4, 0.5, 0.4]} />
          <meshStandardMaterial color={ACCENT} emissive={ACCENT} emissiveIntensity={0.4} />
          <Edges color="#fff" />
        </mesh>
        {/* motor housing */}
        <mesh position={[0, 0.4 + e * 0.3, 0]}>
          <cylinderGeometry args={[0.6, 0.6, 0.5, 32]} />
          <meshStandardMaterial color={BLUE} metalness={0.7} />
          <Edges color={ACCENT} />
        </mesh>
        {/* spindle */}
        <mesh position={[0, -0.3 - e * 0.1, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.1, 0.1, 2.2, 16]} />
          <meshStandardMaterial color="#cbd5e1" metalness={0.95} roughness={0.15} />
        </mesh>
        {/* hollow shafts */}
        {[-1, 1].map((dir) => (
          <mesh
            key={dir}
            position={[dir * (0.9 + e * 0.5), -0.3 - e * 0.1, 0]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <cylinderGeometry args={[0.18, 0.18, 0.6, 16]} />
            <meshStandardMaterial color={BLUE} metalness={0.6} />
            <Edges color={ACCENT} />
          </mesh>
        ))}
        {/* pedals */}
        {[-1, 1].map((dir) => (
          <mesh key={dir} position={[dir * (1.45 + e * 0.6), -0.3 - e * 0.1 - dir * 0.1, 0.2]}>
            <boxGeometry args={[0.5, 0.12, 0.2]} />
            <meshStandardMaterial color="#0f172a" />
            <Edges color={ACCENT} />
          </mesh>
        ))}
      </group>
    </>
  );
}

/* ---------- Skills orb ---------- */
export function SkillsOrbScene() {
  const g = useRef<THREE.Group>(null);
  useFrame((s) => {
    if (g.current) {
      g.current.rotation.y = s.clock.elapsedTime * 0.3;
      g.current.rotation.x = Math.sin(s.clock.elapsedTime * 0.4) * 0.3;
    }
  });
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[3, 3, 3]} color={ACCENT} intensity={2.5} />
      <group ref={g}>
        <mesh>
          <icosahedronGeometry args={[1.4, 1]} />
          <meshStandardMaterial color={BLUE} wireframe />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[1.4, 1]} />
          <meshStandardMaterial color={BLUE} transparent opacity={0.15} metalness={0.9} />
          <Edges color={ACCENT} />
        </mesh>
        <mesh scale={0.55}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color={ACCENT} emissive={ACCENT} emissiveIntensity={0.8} />
        </mesh>
      </group>
    </>
  );
}

/* ---------- Contact: paper plane / signature ---------- */
export function ContactScene() {
  const g = useRef<THREE.Group>(null);
  useFrame((s) => {
    if (!g.current) return;
    const t = s.clock.elapsedTime;
    g.current.rotation.y = Math.sin(t * 0.5) * 0.4;
    g.current.rotation.z = Math.sin(t * 0.7) * 0.2;
    g.current.position.y = Math.sin(t) * 0.2;
  });
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[3, 3, 3]} color={ACCENT} intensity={2} />
      <Grid
        args={[20, 20]}
        position={[0, -1.8, 0]}
        cellColor={BLUE}
        sectionColor={ACCENT}
        fadeDistance={14}
        infiniteGrid
      />
      <group ref={g}>
        <mesh rotation={[0, Math.PI / 4, 0]}>
          <coneGeometry args={[0.8, 1.6, 4]} />
          <meshStandardMaterial color={BLUE} metalness={0.6} wireframe />
          <Edges color={ACCENT} />
        </mesh>
        <mesh position={[0, -0.4, 0]} rotation={[Math.PI / 2, 0, Math.PI / 4]}>
          <ringGeometry args={[0.5, 0.7, 32]} />
          <meshStandardMaterial
            color={ACCENT}
            emissive={ACCENT}
            emissiveIntensity={0.6}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>
    </>
  );
}
