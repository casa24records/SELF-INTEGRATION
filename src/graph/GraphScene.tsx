import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import ForceGraph, { type GraphMethods } from 'r3f-forcegraph'
import { createPlaceholderGraph } from './placeholderGraph'

const CAMERA_DISTANCE = 220
const CAMERA_FAR = 4000
const MIN_ZOOM_DISTANCE = 40
const MAX_ZOOM_DISTANCE = 800
const MAX_PIXEL_RATIO = 2
const BACKGROUND_COLOR = '#0b0a10'
const NODE_COLORS = ['#f2b880', '#e88d72', '#c9a7eb', '#9ccfd8']

function Graph() {
  const graphRef = useRef<GraphMethods | undefined>(undefined)
  const graphData = useMemo(() => createPlaceholderGraph(), [])

  // three-forcegraph only advances its layout when tickFrame() is called.
  useFrame(() => graphRef.current?.tickFrame())

  return (
    <ForceGraph
      ref={graphRef}
      graphData={graphData}
      nodeColor={(node) => NODE_COLORS[node.group % NODE_COLORS.length]}
      linkColor={() => '#8a7f99'}
      linkOpacity={0.5}
    />
  )
}

export default function GraphScene() {
  return (
    <Canvas
      className="graph-canvas"
      flat
      dpr={[1, MAX_PIXEL_RATIO]}
      camera={{ position: [0, 0, CAMERA_DISTANCE], far: CAMERA_FAR }}
    >
      <color attach="background" args={[BACKGROUND_COLOR]} />
      <ambientLight intensity={Math.PI * 0.8} />
      <directionalLight intensity={Math.PI * 0.6} position={[1, 1, 1]} />
      <OrbitControls makeDefault minDistance={MIN_ZOOM_DISTANCE} maxDistance={MAX_ZOOM_DISTANCE} />
      <Graph />
    </Canvas>
  )
}
