# Third-Party Notices

SELF INTEGRATION uses the following open-source packages as npm dependencies. They are not modified. Full license texts for the primary graph libraries are reproduced below; every package's license file also ships inside `node_modules/<package>/`.

## Primary runtime dependencies

| Package | Version | License | Copyright |
|---|---|---|---|
| r3f-forcegraph | 1.1.1 | MIT | © 2024 Vasco Asturiano |
| three-forcegraph | 1.43.6 | MIT | © 2017 Vasco Asturiano |
| three | 0.186.1 | MIT | © 2010–2026 three.js authors |
| @react-three/fiber | 9.8.2 | MIT | © Poimandres (pmndrs) |
| @react-three/drei | 10.7.9 | MIT | © 2020 react-spring (pmndrs) |
| react, react-dom | 19.3.1 | MIT | © Meta Platforms, Inc. and affiliates |

## Transitive runtime dependencies

Summary of the production dependency tree from `package-lock.json` at the baseline commit: 68 MIT, 15 ISC (mostly d3 modules), 5 BSD-3-Clause (ngraph modules), 5 Apache-2.0 (optional drei dependencies — `@dimforge/rapier3d-compat`, `@mediapipe/tasks-vision`, `draco3d`, `hls.js`, `promise-worker-transferable` — none ship a NOTICE file and none are included in the current production bundle), and 1 MIT package without a `license` field in its manifest (`webgl-constants`, MIT per its LICENSE file). All permit commercial use and redistribution with attribution.

Not used or redistributed: the upstream example applications and datasets of r3f-forcegraph (including `example/datasets/*`).

---

## r3f-forcegraph — MIT License

```
MIT License

Copyright (c) 2024 Vasco Asturiano

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## three-forcegraph — MIT License

```
MIT License

Copyright (c) 2017 Vasco Asturiano

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## three.js — MIT License

```
The MIT License

Copyright © 2010-2026 three.js authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
