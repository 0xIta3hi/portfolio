# 🚀 Neural Nexus - Installation Guide

## Step 1: Install All Dependencies

Copy and paste this command in your terminal:

```bash
npm install
```

This installs everything needed:
- ✅ Next.js 14 (App Router)
- ✅ React 18
- ✅ Three.js & React Three Fiber
- ✅ React Three Drei (OrbitControls, Stars, Html, etc.)
- ✅ React Three Postprocessing (Bloom, Glitch)
- ✅ Zustand (State management)
- ✅ Tailwind CSS
- ✅ PostCSS & Autoprefixer
- ✅ Framer Motion (Optional - ready to use)

### Expected Installation Time

~2-3 minutes depending on internet speed.

## Step 2: Start Development Server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000)

## 📦 What's Installed

### Main Dependencies (from package.json)

```json
{
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
}
```

### Dev Dependencies

```json
{
  "autoprefixer": "^10.4.17",
  "postcss": "^8.4.35",
  "eslint": "8.9.0",
  "eslint-config-next": "12.1.0"
}
```

## 🎯 Key Files Generated

After `npm install`, these files are ready to use:

✅ **Core Components**
- `components/ProjectGraph.jsx` - 3D scene with nodes & connections
- `components/Node.jsx` - Individual glowing nodes
- `lib/store.js` - Zustand store for Hacker Mode

✅ **Configuration Files**
- `tailwind.config.js` - Tailwind customization
- `postcss.config.js` - PostCSS setup
- `next.config.js` - Next.js config

✅ **Styling**
- `app/globals.css` - Tailwind directives
- `app/layout.js` - Root layout
- `app/page.js` - Main page with Canvas

## ✨ Features Ready to Go

- ✅ 3D Interactive Knowledge Graph
- ✅ 6 Floating Project Nodes
- ✅ Dynamic Node Connections
- ✅ Bloom Glow Effect
- ✅ Hacker Mode with Glitch Effects
- ✅ Hover Labels
- ✅ Auto-Rotating Camera
- ✅ Faint Stars Background
- ✅ Cyber-Neural UI Overlay

## 🎮 Test It Out

1. Hover over nodes → they scale up + show labels
2. Click toggle button (top-right) → Hacker Mode activates
3. In Hacker Mode → nodes turn red + glitch effect enabled
4. Use mouse to rotate scene
5. Scroll to zoom (currently disabled but can be enabled)

## 🔧 Customization

### Add Your Own Projects

Edit `PROJECT_NODES` in `components/ProjectGraph.jsx`:

```jsx
const PROJECT_NODES = [
  { id: 1, label: 'My Awesome Project', position: [-3, 2, 0] },
  { id: 2, label: 'Another Epic Build', position: [3, 2, 0] },
  // Add more...
];
```

### Change Colors

Edit node colors in `components/Node.jsx`:

```jsx
const nodeColor = isHackerMode ? '#ff0055' : '#00ffff'; // Red or Cyan
```

### Adjust Bloom Intensity

In `components/ProjectGraph.jsx`:

```jsx
<Bloom intensity={1.5} /> // Increase for brighter glow
```

## 📖 Full Documentation

See [SETUP.md](SETUP.md) for:
- Detailed feature explanations
- Advanced customization options
- Troubleshooting guide
- Performance optimization tips

## 🆘 Common Issues

### "Cannot find module '@react-three/fiber'"

**Solution**: Run `npm install` again, ensure node_modules folder exists.

### Port 3000 already in use

**Solution**: Run on different port:
```bash
npm run dev -- -p 3001
```

### Nodes look dull

**Solution**: Increase Bloom intensity in `ProjectGraph.jsx` or check GPU drivers.

### Build errors

**Solution**: Clear Next.js cache:
```bash
rm -rf .next
npm run dev
```

## 🚀 Next: Deploy

When ready to deploy:

```bash
npm run build
npm run start
```

Then deploy to Vercel, Netlify, or your hosting provider.

## 📞 Need Help?

- Check [SETUP.md](SETUP.md) for detailed docs
- Review component code comments
- Check browser console for errors (F12)
- Inspect React state with React DevTools

---

**Happy Coding!** 🎨✨
