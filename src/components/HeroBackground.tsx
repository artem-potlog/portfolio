import {
  Component,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

/* ------------------------------------------------------------------ */
/*  Network node layout (the "graph" the field morphs into)            */
/* ------------------------------------------------------------------ */
function buildNetwork() {
  const nodes: THREE.Vector3[] = [
    [-5.2, 1.7, -0.6], [-3.8, -1.4, 0.4], [-2.6, 0.9, -1.2], [-1.4, -0.3, 0.8],
    [-0.2, 2.0, -0.4], [0.1, -1.8, -0.8], [1.2, 0.6, 0.6], [2.3, -0.7, -1.0],
    [2.9, 1.7, 0.2], [4.1, -0.2, -0.5], [5.0, 1.1, 0.5], [4.6, -1.6, -1.1],
    [-4.6, -0.1, 1.0], [-1.0, 1.0, 1.2], [0.7, -0.6, 1.0], [3.4, 0.4, 1.1],
    [1.9, 1.9, -0.9], [-2.0, -1.7, -0.3],
  ].map(([x, y, z]) => new THREE.Vector3(x, y, z))

  // connect each node to its 2 nearest neighbours (deduped)
  const edgeSet = new Set<string>()
  const edges: [THREE.Vector3, THREE.Vector3][] = []
  nodes.forEach((n, i) => {
    const dists = nodes
      .map((m, j) => ({ j, d: n.distanceTo(m) }))
      .filter((o) => o.j !== i)
      .sort((a, b) => a.d - b.d)
      .slice(0, 2)
    dists.forEach(({ j }) => {
      const key = i < j ? `${i}-${j}` : `${j}-${i}`
      if (!edgeSet.has(key)) {
        edgeSet.add(key)
        edges.push([nodes[i], nodes[j]])
      }
    })
  })
  return { nodes, edges }
}

/* ------------------------------------------------------------------ */
/*  Particle field                                                     */
/* ------------------------------------------------------------------ */
const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uMorph;
  uniform vec2 uMouse;
  uniform float uSize;
  uniform float uPixelRatio;
  attribute float aSeed;
  attribute float aSize;
  attribute float aMorph;
  attribute vec3 aTarget;
  attribute float aColorMix;
  varying float vAlpha;
  varying float vColorMix;

  void main() {
    vec3 pos = position;
    float ph = aSeed * 6.2831853;

    // flowing undulation — reads as subsurface strata / log curves
    pos.y += sin(pos.x * 0.45 + uTime * 0.5 + ph) * 0.18;
    pos.x += sin(pos.y * 0.30 + uTime * 0.35 + ph) * 0.12;
    pos.z += cos(pos.x * 0.30 + uTime * 0.40 + ph) * 0.25;

    // morph toward the network node (smoothstep ease)
    float m = clamp(uMorph * aMorph, 0.0, 1.0);
    m = m * m * (3.0 - 2.0 * m);
    vec3 finalPos = mix(pos, aTarget, m);

    // depth-based mouse parallax
    float depth = (finalPos.z + 3.0) / 4.0;
    finalPos.xy += uMouse * (0.3 + depth * 0.5);

    vec4 mvPosition = modelViewMatrix * vec4(finalPos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = uSize * aSize * uPixelRatio * (8.0 / -mvPosition.z);

    vAlpha = clamp(0.25 + depth * 0.75, 0.0, 1.0);
    vColorMix = aColorMix;
  }
`

const fragmentShader = /* glsl */ `
  precision mediump float;
  varying float vAlpha;
  varying float vColorMix;

  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c);
    if (d > 0.5) discard;
    float glow = smoothstep(0.5, 0.0, d);

    vec3 brassDeep = vec3(0.784, 0.580, 0.231);
    vec3 brass     = vec3(0.886, 0.729, 0.400);
    vec3 teal      = vec3(0.247, 0.714, 0.659);

    vec3 col = mix(brassDeep, brass, vColorMix);
    col = mix(col, teal, smoothstep(0.55, 1.0, vColorMix) * 0.85);

    gl_FragColor = vec4(col, glow * vAlpha);
  }
`

function ParticleField({ count }: { count: number }) {
  const matRef = useRef<THREE.ShaderMaterial>(null)
  const groupRef = useRef<THREE.Group>(null)
  const lineMatRef = useRef<THREE.LineBasicMaterial>(null)
  const { viewport } = useThree()

  const mouse = useRef({ x: 0, y: 0, tx: 0, ty: 0 })

  const { nodes, edges } = useMemo(buildNetwork, [])

  const geo = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const targets = new Float32Array(count * 3)
    const seeds = new Float32Array(count)
    const sizes = new Float32Array(count)
    const morphs = new Float32Array(count)
    const colorMix = new Float32Array(count)

    const bands = 7
    for (let i = 0; i < count; i++) {
      const band = i % bands
      const x = (Math.random() - 0.5) * 14
      const y = (band - (bands - 1) / 2) * 0.95 + (Math.random() - 0.5) * 0.5
      const z = (Math.random() - 0.5) * 5
      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      const node = nodes[Math.floor(Math.random() * nodes.length)]
      const jitter = 0.18
      targets[i * 3] = node.x + (Math.random() - 0.5) * jitter
      targets[i * 3 + 1] = node.y + (Math.random() - 0.5) * jitter
      targets[i * 3 + 2] = node.z + (Math.random() - 0.5) * jitter

      seeds[i] = Math.random()
      sizes[i] = 0.5 + Math.random() * 1.4
      // ~68% of particles participate in the network morph
      morphs[i] = Math.random() < 0.68 ? 0.6 + Math.random() * 0.4 : 0
      colorMix[i] = Math.random()
    }

    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    g.setAttribute('aTarget', new THREE.BufferAttribute(targets, 3))
    g.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1))
    g.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1))
    g.setAttribute('aMorph', new THREE.BufferAttribute(morphs, 1))
    g.setAttribute('aColorMix', new THREE.BufferAttribute(colorMix, 1))
    return g
  }, [count, nodes])

  const lineGeo = useMemo(() => {
    const pts: number[] = []
    edges.forEach(([a, b]) => {
      pts.push(a.x, a.y, a.z, b.x, b.y, b.z)
    })
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3))
    return g
  }, [edges])

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMorph: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uSize: { value: 26 },
      uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
    }),
    [],
  )

  // pointer tracking relative to viewport centre
  useEffect(() => {
    const onPointer = (e: PointerEvent) => {
      mouse.current.tx = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.current.ty = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('pointermove', onPointer)
    return () => window.removeEventListener('pointermove', onPointer)
  }, [])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    // morph slowly oscillates and dwells near both extremes
    const wave = Math.sin(t * 0.13)
    const morphSmooth = THREE.MathUtils.smoothstep(wave, -0.55, 0.55)

    mouse.current.x += (mouse.current.tx - mouse.current.x) * 0.04
    mouse.current.y += (mouse.current.ty - mouse.current.y) * 0.04

    if (matRef.current) {
      const u = matRef.current.uniforms
      u.uTime.value = t
      u.uMorph.value = morphSmooth
      u.uMouse.value.set(mouse.current.x * 0.35, mouse.current.y * 0.35)
    }
    if (lineMatRef.current) {
      lineMatRef.current.opacity = morphSmooth * 0.22
    }
    if (groupRef.current) {
      groupRef.current.rotation.y = mouse.current.x * 0.12
      groupRef.current.rotation.x = -mouse.current.y * 0.08
    }
  })

  const scale = Math.min(1, viewport.width / 12)

  return (
    <group ref={groupRef} scale={scale}>
      <points geometry={geo}>
        <shaderMaterial
          ref={matRef}
          uniforms={uniforms}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
      <lineSegments geometry={lineGeo}>
        <lineBasicMaterial
          ref={lineMatRef}
          color={'#c8943b'}
          transparent
          opacity={0}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  )
}

/* ------------------------------------------------------------------ */
/*  CSS fallback (reduced motion / WebGL failure)                      */
/* ------------------------------------------------------------------ */
function StaticFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 50% at 70% 30%, rgba(200,148,59,0.18), transparent 60%), radial-gradient(50% 50% at 25% 70%, rgba(63,182,168,0.12), transparent 60%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent 0 22px, rgba(237,231,219,0.04) 22px 23px)',
        }}
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Error boundary so a WebGL failure never blanks the hero            */
/* ------------------------------------------------------------------ */
class GLErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { failed: boolean }
> {
  state = { failed: false }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children
  }
}

/* ------------------------------------------------------------------ */
/*  Public component                                                   */
/* ------------------------------------------------------------------ */
export default function HeroBackground() {
  const [reduced] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  const count = useMemo(() => {
    const w = typeof window !== 'undefined' ? window.innerWidth : 1280
    if (w < 640) return 1500
    if (w < 1024) return 2800
    return 4800
  }, [])

  if (reduced) return <StaticFallback />

  return (
    <GLErrorBoundary fallback={<StaticFallback />}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 52 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 2]}
        style={{ position: 'absolute', inset: 0 }}
      >
        <ParticleField count={count} />
      </Canvas>
    </GLErrorBoundary>
  )
}
