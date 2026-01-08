# 🔓 System Breach - Dual Mode Portfolio

A cutting-edge portfolio that switches between two distinct aesthetics:

- **Corporate Mode** (Default): Professional, clean, minimalist
- **Hacker Mode** (Active): Dark, neon, glitch effects

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Then open: **http://localhost:3000**

---

## 🎯 Core Components

### 1. **useBreachMode** Hook
Global Zustand store managing mode state:
```js
import { useBreachMode } from '@/lib/useBreachMode';
const { isBreached, toggleBreach } = useBreachMode();
```

### 2. **TextDecrypt** Component
Text that "decrypts" when switching modes with character scrambling:
```jsx
<TextDecrypt
  textNormal="Full Stack Developer"
  textHacker="Exploit Researcher"
  as="h1"
/>
```

### 3. **GlitchContainer** Component
Applies CSS clip-path glitch animation in Hacker mode:
```jsx
<GlitchContainer>
  <img src="..." />
</GlitchContainer>
```

### 4. **ScanlineOverlay** Component
CRT monitor scanline effect (visible only in Hacker mode):
```jsx
<ScanlineOverlay />
```

### 5. **BreachToggle** Button
Toggle between modes with animated button:
```jsx
<BreachToggle />
```

---

## 🎨 Design System

### Corporate Mode
- Background: `#F3F4F6` (off-white)
- Text: `#1F2937` (dark gray)
- Font: Geist (sans-serif)
- Aesthetic: Minimalist, professional, safe

### Hacker Mode
- Background: `#050505` (void black)
- Text: `#00FF41` (neon green)
- Font: JetBrains Mono (monospace)
- Effects: Glitch animation, CRT scanlines, clip-path distortion

---

## 📁 File Structure

```
app/
├── page.js              Hero section demo
├── layout.js            Root layout
└── globals.css          Tailwind + global styles

components/
├── TextDecrypt.jsx      Text scrambling animation
├── GlitchContainer.jsx  CSS glitch effect wrapper
├── ScanlineOverlay.jsx  CRT monitor effect
└── BreachToggle.jsx     Mode toggle button

lib/
├── useBreachMode.js     Zustand store
└── utils.ts             Tailwind merge utilities

tailwind.config.js       Theme configuration
package.json             Dependencies
```

---

## ✨ Key Features

✅ Dual-mode portfolio (Corporate ↔ Hacker)  
✅ Text decryption animation with character scrambling  
✅ CSS clip-path glitch effects  
✅ CRT scanline overlay  
✅ Smooth transitions between modes  
✅ Zustand state management  
✅ Framer Motion animations  
✅ Tailwind CSS + tailwind-merge  
✅ Type-safe with JSX support  

---

## 🎬 Usage Example

```jsx
'use client';

import { useBreachMode } from '@/lib/useBreachMode';
import { TextDecrypt } from '@/components/TextDecrypt';
import { GlitchContainer } from '@/components/GlitchContainer';
import { BreachToggle } from '@/components/BreachToggle';

export default function Home() {
  const { isBreached } = useBreachMode();

  return (
    <main className={isBreached ? 'bg-black' : 'bg-white'}>
      <BreachToggle />
      <TextDecrypt 
        textNormal="Hello" 
        textHacker="WARNING" 
      />
      <GlitchContainer>
        <div>Content here</div>
      </GlitchContainer>
    </main>
  );
}
```

---

## 🔧 Customization

### Change Glitch Animation Speed
Edit `GlitchContainer.jsx`:
```jsx
animation: 'glitch 0.3s infinite' // Change 0.3s
```

### Change Scanline Speed
Edit `ScanlineOverlay.jsx`:
```jsx
animation: 'scanlines 8s linear infinite' // Change 8s
```

### Change Colors
Edit `tailwind.config.js`:
```js
hacker: {
  text: '#00FF41', // Change neon color
}
```

### Customize TextDecrypt Speed
Edit `TextDecrypt.jsx`:
```jsx
const duration = 0.5; // Faster = higher number
```

---

## 📦 Dependencies

- `next@^14.2.0` - React framework
- `react@^18.2.0` - UI library
- `framer-motion@^10.16.4` - Animations
- `zustand@^4.4.1` - State management
- `tailwindcss@^3.3.5` - Styling
- `tailwind-merge@^2.2.0` - Class merging

---

## 🚀 Deploy

```bash
npm run build
npm start
```

Deploy to Vercel:
```bash
vercel deploy
```

---

## 💡 Tips

1. **Custom Fonts**: Edit `app/globals.css` to import different fonts
2. **Add More Projects**: Extend the featured section in `app/page.js`
3. **Dark Mode Hook**: Use `useBreachMode` in any component to access mode state
4. **Global Styling**: Modify colors in `tailwind.config.js`

---

**System Breach Portfolio** - Where Professional Meets Cyberpunk 🔓
