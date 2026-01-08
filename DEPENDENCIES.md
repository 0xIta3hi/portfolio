# 📦 Neural Nexus - Dependencies & Installation

## 🚀 One-Line Installation

Copy and paste this into your terminal:

```bash
npm install
```

**That's it!** All dependencies will be installed from `package.json`.

---

## 📋 Complete Dependency List

### Production Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `next` | ^14.2.0 | React framework (App Router) |
| `react` | ^18.2.0 | React library |
| `react-dom` | ^18.2.0 | React DOM rendering |
| `three` | ^r128 | 3D graphics engine |
| `@types/three` | ^r128 | TypeScript types for Three.js |
| `@react-three/fiber` | ^8.13.0 | React renderer for Three.js |
| `@react-three/drei` | ^9.88.0 | Three.js helpers (OrbitControls, Stars, Html, Line) |
| `@react-three/postprocessing` | ^2.15.0 | Post-processing effects wrapper |
| `postprocessing` | ^6.33.0 | Post-processing effects library |
| `framer-motion` | ^10.16.4 | Animation library (optional, ready to use) |
| `zustand` | ^4.4.1 | State management (Hacker Mode) |
| `tailwindcss` | ^3.3.5 | Utility-first CSS framework |

### Development Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `autoprefixer` | ^10.4.17 | CSS vendor prefixes |
| `postcss` | ^8.4.35 | CSS processor |
| `eslint` | 8.9.0 | Code linter |
| `eslint-config-next` | 12.1.0 | ESLint config for Next.js |

---

## 📊 Dependency Breakdown by Feature

### 3D Rendering Pipeline
```
three
├── @react-three/fiber (React integration)
├── @react-three/drei (Helpers & utilities)
└── @react-three/postprocessing (Effects)
    └── postprocessing (Effect library)
```

### State & Animation
```
zustand (Global state for Hacker Mode)
framer-motion (UI animations - optional)
```

### Styling
```
tailwindcss
├── autoprefixer
└── postcss
```

### Framework
```
next ^14.2.0
├── react ^18.2.0
└── react-dom ^18.2.0
```

---

## 🎯 What Each Package Does

### Core 3D Stack

**three** & **@types/three**
- Industry-standard WebGL 3D library
- Provides: Geometries, Materials, Lights, Cameras, Rendering

**@react-three/fiber**
- React component wrapper for Three.js
- Declarative syntax for 3D scenes
- Auto-updates, state management integration

**@react-three/drei**
- Pre-built Three.js components & helpers
- Includes: OrbitControls, Stars, Html (for labels), Line (connections)
- Saves development time

**@react-three/postprocessing** & **postprocessing**
- Post-rendering effects pipeline
- Enables: Bloom (glow), Glitch (distortion)
- Used for Hacker Mode visual effects

### State Management

**zustand**
- Lightweight alternative to Redux
- Perfect for simple global state (Hacker Mode toggle)
- 2KB bundle size, minimal overhead

### Styling

**tailwindcss**
- Utility-first CSS framework
- Enables fast UI styling without custom CSS
- Custom theme for Cyber-Neural colors

**postcss** & **autoprefixer**
- Tailwind requires PostCSS processor
- Autoprefixer adds vendor prefixes for browser compatibility

### Framework

**next ^14.2.0**
- Latest Next.js with App Router (not Pages Router)
- Server-side rendering, static optimization, API routes

**react** & **react-dom**
- Required by Next.js and React Three Fiber
- Component-based UI framework

---

## 💾 Estimated Installation Size

- **node_modules:** ~800MB (typical)
- **Package.json:** ~50 dependencies (with transitive)
- **Installation time:** ~2-3 minutes

### Tip: Optimize Later

For production deployment:
```bash
npm install --production  # Skip dev dependencies
npm run build
npm start
```

---

## 🔍 Verification After Install

After running `npm install`, verify:

```bash
# Check all dependencies are installed
npm list --depth=0

# Should see:
# ├── @react-three/drei@9.88.0
# ├── @react-three/fiber@8.13.0
# ├── @react-three/postprocessing@2.15.0
# ├── framer-motion@10.16.4
# ├── next@14.2.0
# ├── postcss@8.4.35
# ├── postprocessing@6.33.0
# ├── react@18.2.0
# ├── react-dom@18.2.0
# ├── tailwindcss@3.3.5
# ├── three@r128
# ├── @types/three@r128
# └── zustand@4.4.1
```

---

## 🚀 Next Command After Install

```bash
npm run dev
```

Opens development server at `http://localhost:3000`

---

## 📝 package.json (Current State)

```json
{
  "name": "aryan.github.io",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "three": "^r128",
    "@types/three": "^r128",
    "@react-three/fiber": "^8.13.0",
    "@react-three/drei": "^9.88.0",
    "@react-three/postprocessing": "^2.15.0",
    "postprocessing": "^6.33.0",
    "framer-motion": "^10.16.4",
    "zustand": "^4.4.1",
    "tailwindcss": "^3.3.5"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.17",
    "eslint": "8.9.0",
    "eslint-config-next": "12.1.0",
    "postcss": "^8.4.35"
  }
}
```

---

## ❓ FAQ

**Q: Do I need to install anything else?**
A: No! `npm install` handles everything. Node.js/npm must be installed globally.

**Q: Can I remove framer-motion if I don't use it?**
A: Yes, but it's included and small. Keep it for future UI animations.

**Q: What if I only want Three.js, not post-processing?**
A: You can, but Glitch effect won't work. Keep it for the Hacker Mode feature.

**Q: Are there alternative packages I can use?**
A: Yes! But these are industry-standard choices. Alternatives:
- Redux instead of Zustand
- PostCSS alternative: Sass (node-sass)
- Animation: Motion instead of Framer Motion

**Q: Will this work on older Node.js versions?**
A: Recommended: Node 16+. Next.js 14 works best on Node 18+.

---

## ✅ Installation Checklist

- [ ] Node.js & npm installed (`node --version`, `npm --version`)
- [ ] Terminal opened in project directory
- [ ] Run `npm install`
- [ ] Wait for installation to complete (~3 min)
- [ ] Verify with `npm list --depth=0`
- [ ] Run `npm run dev`
- [ ] Open `http://localhost:3000`
- [ ] See 3D scene with glowing nodes ✨

---

**Ready to install? Run:**

```bash
npm install && npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) 🚀
