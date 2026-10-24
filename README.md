# SELF INTEGRATION

An immersive web experience for **Pÿro**'s album *SELF INTEGRATION* (Casa 24 Records): a growing, interactive 3D network where listeners will eventually share anonymous memories.

> **Status: Phase 1 baseline.** The app renders 20 fictional placeholder nodes in an interactive force-directed 3D graph. There are no memory submissions, music, database or custom artwork yet.

## Stack

| Package | Version |
|---|---|
| Vite | 8.3.5 |
| React / React DOM | 19.3.1 |
| TypeScript | 6.0.3 |
| three | 0.186.1 |
| @react-three/fiber | 9.8.2 |
| @react-three/drei | 10.7.9 (OrbitControls only) |
| r3f-forcegraph | 1.1.1 |
| oxlint | 1.88.0 |

All versions are pinned exactly in `package.json`. `@react-three/fiber` 9 supports React `>=19 <19.4`, so upgrade React and R3F together.

## Getting started

Requires Node.js 22.12+ (developed on Node 26 / npm 11).

```bash
npm ci
npm run dev       # http://localhost:5173
npm run lint      # oxlint
npm run build     # tsc -b && vite build  → dist/
npm run preview   # serve the production build
```

## Project layout

```
index.html                    viewport + page metadata
src/main.tsx                  React bootstrap
src/App.tsx                   page shell: canvas + title overlay
src/graph/GraphScene.tsx      R3F canvas, lights, OrbitControls, force graph
src/graph/placeholderGraph.ts deterministic fictional 20-node dataset
src/index.css                 full-viewport layout, safe areas, touch handling
```

## Controls

| Input | Desktop | Touch |
|---|---|---|
| Rotate | left-drag | one-finger drag |
| Zoom | mouse wheel | pinch |
| Pan | right-drag | two-finger drag |

Zoom is limited to a distance of 40–800 units so the network can't be lost off-screen.

## Mobile notes (baseline)

Checked in Chrome's iPhone emulation (390×844 @3x) only. **Not yet tested on physical devices.**

- The viewport is `width=device-width, initial-scale=1, viewport-fit=cover`; the title respects safe-area insets and there is no horizontal scroll.
- The canvas uses `touch-action: none`, so pinches zoom the graph rather than the page.
- Pixel ratio is capped at 2 to protect fill rate on 3× screens.
- A tap on the canvas produces a normal `click` event with OrbitControls. (The upstream examples use TrackballControls, which suppresses touch clicks, so taps would never reach node handlers.)
- The camera distance is fixed; in narrow portrait screens the outermost nodes can sit at or past the screen edge. Auto-framing is planned.

## Upstream reference and attribution

The graph is rendered by [`r3f-forcegraph`](https://github.com/vasturiano/r3f-forcegraph) and its engine [`three-forcegraph`](https://github.com/vasturiano/three-forcegraph) by Vasco Asturiano (MIT), used unmodified as npm dependencies. No source files or datasets from the upstream examples are copied into this repository.

The audited upstream source is kept separately, read-only, for reference:

- Local clone: `~/casa24-self-integration/upstream/r3f-forcegraph`
- Remote: `https://github.com/vasturiano/r3f-forcegraph.git`
- Audited commit: `d471269eb85ff1f6f2870ea0ff730d19990162df` (`master`, v1.1.1)

Third-party licenses are listed in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

## License

© Casa 24 Records. No license has been granted for this project's own code yet; until one is added, all rights are reserved. Third-party components remain under their own licenses.
