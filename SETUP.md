# Neural Nexus - Cyber-Neural 3D Portfolio

A high-end, interactive 3D knowledge graph portfolio built with Next.js 14 (App Router), Three.js, and React Three Fiber. Features a Cyber-Neural aesthetic with glowing nodes, dynamic connections, and a "Hacker Mode" toggle that activates aggressive glitch effects.

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **Three.js** + **React Three Fiber** (@react-three/fiber)
- **React Three Drei** (@react-three/drei) - OrbitControls, Text, Sphere, Line, Html, Stars
- **React Three Postprocessing** - Bloom & Glitch effects
- **Framer Motion** - UI animations (optional, ready to integrate)
- **Zustand** - Global state management for Hacker Mode
- **Tailwind CSS** - Utility-first styling
- **TypeScript** - Type safety (optional)

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

This installs all required packages including Three.js, React Three Fiber, postprocessing effects, Zustand for state management, and Tailwind CSS.

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
/app
  ├── layout.js              # Root layout with metadata
  ├── page.js                # Main page with Canvas, UI controls
  ├── globals.css            # Tailwind imports and global styles
  └── api/                   # API routes (optional)

/components
  ├── ProjectGraph.jsx       # 3D scene with nodes, connections, effects
  ├── Node.jsx               # Individual glowing nodes
  └── ...

/lib
  └── store.js               # Zustand store for hackerMode state

/public                       # Static assets

tailwind.config.js            # Tailwind customization
postcss.config.js             # PostCSS config for Tailwind
next.config.js                # Next.js configuration
```

## 🎨 Core Features

### ProjectGraph Component

The centerpiece of the portfolio. Renders:

- **6 Project Nodes**: Positioned in 3D space (Nettacker, Lattice, mlpack, NeuroFlow, CyberShell, Nexus)
- **Dynamic Connections**: Lines connecting nearby nodes forming a constellation
- **Bloom Effect**: Nodes glow like neon light sources (Cyan or Red based on mode)
- **Glitch Effect**: Activated in Hacker Mode for aggressive distortion
- **Faint Stars Background**: Depth-enhanced starfield
- **Auto-Rotating Orbit**: Smooth, drifting camera with OrbitControls

### Node Component

Each node:

- Rotates slowly for visual interest
- Scales 1.5x on hover
- Displays a floating HTML label with project info
- Changes color (Cyan → Red) in Hacker Mode
- Uses MeshBasicMaterial with high emissive intensity for Bloom interaction

### Hacker Mode Toggle

- **OFF (Default)**: Cyan nodes, faint connections, smooth interaction, "STABLE_MODE"
- **ON**: Aggressive Red nodes, Glitch post-processing, bright connections, "GLITCH_MODE" indicator
- Managed via Zustand store (`useHackerMode()`)
- Accessible via toggle button in top-right corner

### UI Overlay

- **Top-Left**: Title "NEURAL_NEXUS" + version badge
- **Top-Right**: Hacker Mode toggle button with dynamic styling
- **Bottom-Left**: Usage instructions and tech stack credits
- **Bottom-Right**: Status indicator (animated dot + mode label)

## 🛠️ Configuration

### Tailwind CSS

Customized in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      cyber: {
        dark: '#050505',
        cyan: '#00ffff',
        magenta: '#ff00ff',
        red: '#ff0055',
      },
    },
    fontFamily: {
      mono: ['Courier New', 'monospace'],
    },
  },
}
```

Use these in your markup:
```jsx
<div className="text-cyan-400 font-mono">
  NEURAL_NEXUS
</div>
```

### Zustand Store

Located in `/lib/store.js`:

```js
export const useHackerMode = create((set) => ({
  isHackerMode: false,
  toggleHackerMode: () => set((state) => ({ isHackerMode: !state.isHackerMode })),
  setHackerMode: (mode) => set({ isHackerMode: mode }),
}));
```

Usage in components:
```jsx
const { isHackerMode, toggleHackerMode } = useHackerMode();
```

## 🎮 Interaction Guide

- **Hover Nodes**: Scale up and display label
- **Mouse Drag**: Rotate the scene
- **Scroll**: Zoom in/out (currently disabled but can be enabled)
- **Toggle Button**: Activate Hacker Mode for glitch effects

## 🔧 Customization Guide

### Add More Nodes

Edit `PROJECT_NODES` in `ProjectGraph.jsx`:

```jsx
const PROJECT_NODES = [
  { id: 1, label: 'Your Project', position: [x, y, z] },
  // ...
];
```

### Change Node Colors

In `Node.jsx`, modify the color logic:

```jsx
const nodeColor = isHackerMode ? '#ff0055' : '#00ffff';
```

### Adjust Bloom Intensity

In `ProjectGraph.jsx`, tweak EffectComposer settings:

```jsx
<Bloom
  luminanceThreshold={0.2}
  luminanceSmoothing={0.9}
  intensity={1.5}  // ← Increase for brighter glow
  mipmapBlur
/>
```

### Enable Zoom

In `ProjectGraph.jsx`, change OrbitControls:

```jsx
<OrbitControls
  enableZoom={true}  // ← Change to true
  autoRotate
  autoRotateSpeed={2}
/>
```

### Modify Auto-Rotation Speed

```jsx
<OrbitControls
  autoRotateSpeed={0.5}  // ← Slower (default: 2)
/>
```

## 🐛 Troubleshooting

### "Cannot find module '@react-three/fiber'"

Ensure all dependencies are installed:
```bash
npm install
```

### Nodes look too solid / plastic

Nodes are already configured with `MeshBasicMaterial` and high emissive intensity. If they still look dull:

1. Increase Bloom intensity in `ProjectGraph.jsx`
2. Check your GPU supports WebGL (should on all modern devices)

### Camera stuck / not rotating

Ensure `OrbitControls` is properly imported and enabled in `ProjectGraph.jsx`. Check console for errors.

### Glitch effect not activating

Verify `isHackerMode` state is toggling correctly. Check React DevTools or add a console.log:

```jsx
useEffect(() => {
  console.log('Hacker Mode:', isHackerMode);
}, [isHackerMode]);
```

## 📝 Next Steps

1. **Add More Projects**: Populate `PROJECT_NODES` with your actual projects
2. **Link Click Handlers**: Add `onClick` to nodes to navigate to project details
3. **Mobile Optimization**: Test on mobile, adjust camera FOV and node positions
4. **Sound Effects**: Integrate Howler.js for node hover/click sounds
5. **Analytics**: Track which nodes users interact with most
6. **Animations**: Use Framer Motion for UI transitions
7. **Performance**: Profile with Chrome DevTools Performance tab, optimize as needed

## 📄 License

MIT License - Feel free to use and modify!

## 🎬 Credits

Built with:
- [Three.js](https://threejs.org/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- [React Three Drei](https://github.com/pmndrs/drei)
- [Zustand](https://github.com/pmndrs/zustand)
- [Tailwind CSS](https://tailwindcss.com/)
- [Next.js](https://nextjs.org/)
