import type { GraphData } from 'r3f-forcegraph'

export interface PlaceholderNode {
  id: string
  label: string
  group: number
}

const NODE_COUNT = 20
const GROUP_COUNT = 4

// Fictional placeholder data only — no real memories. Deterministic so every
// load produces the same topology: a ring plus a few cross-links per group.
export function createPlaceholderGraph(): GraphData<PlaceholderNode> {
  const nodes = Array.from({ length: NODE_COUNT }, (_, i) => ({
    id: `node-${String(i + 1).padStart(2, '0')}`,
    label: `Placeholder ${i + 1}`,
    group: i % GROUP_COUNT,
  }))

  const links = nodes.flatMap((node, i) => {
    const ring = { source: node.id, target: nodes[(i + 1) % NODE_COUNT].id }
    const chord = i % 3 === 0 ? [{ source: node.id, target: nodes[(i + 7) % NODE_COUNT].id }] : []
    return [ring, ...chord]
  })

  return { nodes, links }
}
