# 🚀 Neural Nexus - Command Reference

## ⚡ INSTANT START (Copy & Paste)

```bash
npm install && npm run dev
```

Then open: **http://localhost:3000**

---

## 📋 COMPLETE COMMAND LIST

### Installation

```bash
# Install all dependencies
npm install

# Install with clean slate (if issues)
rm -rf node_modules package-lock.json
npm install

# Verify installation
npm list --depth=0
```

### Development

```bash
# Start development server (hot reload)
npm run dev

# Start on different port
npm run dev -- -p 3001

# Start with debug logging
DEBUG=* npm run dev
```

### Building

```bash
# Build for production
npm run build

# Build and start production server
npm run build && npm start

# Start production server (already built)
npm start
```

### Testing & Linting

```bash
# Run ESLint
npm run lint

# Fix linting issues automatically
npm run lint -- --fix
```

### Clean Up

```bash
# Clear Next.js cache
rm -rf .next

# Clear all caches and rebuild
rm -rf .next node_modules package-lock.json
npm install

# Clear npm cache
npm cache clean --force
```

---

## 🔧 DEVELOPMENT WORKFLOW

### Step 1: Initial Setup
```bash
npm install
```

### Step 2: Start Dev Server
```bash
npm run dev
```

### Step 3: Open in Browser
```
http://localhost:3000
```

### Step 4: Edit Code
- Modify `components/ProjectGraph.jsx` (3D scene)
- Modify `components/Node.jsx` (nodes)
- Modify `app/page.js` (UI layout)
- Modify `lib/store.js` (state)

### Step 5: See Changes
Changes appear instantly (hot reload)

### Step 6: Build for Production
```bash
npm run build
npm start
```

---

## 🚀 DEPLOYMENT COMMANDS

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (interactive)
vercel

# Deploy to production
vercel --prod

# Deploy specific environment
vercel env pull  # Get env vars
vercel --prod
```

### Netlify

```bash
# Build locally first
npm run build

# Deploy folder
# Upload "out" or ".next" to Netlify

# Or use Netlify CLI
npm i -g netlify-cli
netlify deploy
```

### Docker Deployment

```bash
# Build Docker image
docker build -t neural-nexus .

# Run container
docker run -p 3000:3000 neural-nexus
```

### Self-Hosted (VPS/Server)

```bash
# On your server:
git clone <your-repo>
cd portfolio
npm install
npm run build

# Run with PM2 (process manager)
npm i -g pm2
pm2 start npm --name "neural-nexus" -- start
pm2 startup
pm2 save

# Check status
pm2 status
pm2 logs
```

---

## 🎨 CUSTOMIZATION COMMANDS

### Update Dependencies

```bash
# Check for outdated packages
npm outdated

# Update all packages
npm update

# Update specific package
npm install three@latest

# Install new package
npm install framer-motion
```

### Git Commands

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial Neural Nexus setup"

# Push to GitHub
git push origin main
```

---

## 🐛 TROUBLESHOOTING COMMANDS

### Port Issues

```bash
# Find what's using port 3000
lsof -i :3000  # macOS/Linux
netstat -ano | findstr :3000  # Windows

# Kill process using port 3000
kill -9 <PID>  # macOS/Linux
taskkill /PID <PID> /F  # Windows
```

### Cache Issues

```bash
# Clear Next.js cache
rm -rf .next

# Clear npm cache
npm cache clean --force

# Clear browser cache
# Chrome: Ctrl+Shift+Delete (Cmd+Shift+Delete on Mac)
```

### Module Issues

```bash
# Reinstall dependencies
rm -rf node_modules
npm install

# Check for duplicate dependencies
npm ls <package-name>

# Audit for security issues
npm audit

# Fix security issues
npm audit fix
```

### Build Issues

```bash
# Check build errors
npm run build

# Build with verbose output
npm run build -- --debug

# Check Next.js config
cat next.config.js
```

---

## 📊 MONITORING COMMANDS

### Performance

```bash
# Analyze bundle size
npm run build  # Check output size

# Check build time
time npm run build

# Monitor during dev
npm run dev  # Watch console output
```

### Logging

```bash
# View npm debug log
cat ~/.npm/_logs/*

# View Next.js debug output
DEBUG=next:* npm run dev
```

---

## 🔐 SECURITY COMMANDS

### Dependencies

```bash
# Audit security vulnerabilities
npm audit

# Fix vulnerabilities automatically
npm audit fix

# Fix vulnerabilities (including breaking changes)
npm audit fix --force

# Check for outdated security patches
npm outdated --long
```

### Environment

```bash
# Check for exposed secrets
grep -r "password\|secret\|key" --include="*.js"

# Create .env file (don't commit!)
echo ".env" >> .gitignore
echo ".env.local" >> .gitignore
```

---

## 📈 OPTIMIZATION COMMANDS

### Bundle Analysis

```bash
# Analyze bundle (requires @next/bundle-analyzer)
npm install --save-dev @next/bundle-analyzer
npm run analyze

# Manual build analysis
npm run build  # Check ".next" folder size
```

### Database Commands (if using)

```bash
# Migrate database (example)
npm run db:migrate

# Seed database (example)
npm run db:seed

# Reset database (example)
npm run db:reset
```

---

## 🔄 WORKFLOW SHORTCUTS

### Full Rebuild

```bash
npm cache clean --force && rm -rf .next node_modules && npm install && npm run dev
```

### Deploy Shortcut

```bash
npm run build && npm run export
```

### Develop + Test

```bash
npm run dev & npm run test
```

---

## 📚 REFERENCE

### Environment Variables

Create `.env.local`:

```bash
# Next.js
NEXT_PUBLIC_API_URL=http://localhost:3000

# Three.js
NEXT_PUBLIC_DEBUG=false

# Custom
NEXT_PUBLIC_APP_NAME=Neural Nexus
```

### NPM Useful Flags

```bash
-g            # Global install
--save        # Add to dependencies
--save-dev    # Add to devDependencies
-D            # Shorthand for --save-dev
--force       # Force installation
--legacy-peer-deps  # Ignore peer dependency conflicts
--omit=dev    # Skip dev dependencies
```

---

## ✅ VERIFICATION COMMANDS

```bash
# Verify Node.js version (need 16+)
node --version

# Verify npm version
npm --version

# Verify Next.js installation
npx next --version

# List all dependencies
npm list

# List dependencies tree
npm list --depth=3

# Check installed package info
npm info three
npm info zustand
npm info @react-three/fiber
```

---

## 🎯 COMMON WORKFLOWS

### Daily Development

```bash
# Morning: Fresh start
npm run dev

# During day: Edit code (auto-reload)

# Evening: Commit work
git add .
git commit -m "Feature: [description]"
git push

# Deploy when ready
npm run build
vercel
```

### Bug Fixing

```bash
# Reproduce issue
npm run dev

# Debug in browser (F12)

# Fix code

# Clear cache if stuck
rm -rf .next

# Restart dev server
npm run dev

# Test fix

# Commit
git add .
git commit -m "Fix: [issue]"
```

### Feature Addition

```bash
# Create feature branch
git checkout -b feature/my-feature

# Start dev server
npm run dev

# Edit components
# Edit pages
# Edit styles

# Test in browser

# Commit changes
git add .
git commit -m "Feature: [description]"

# Push to GitHub
git push origin feature/my-feature

# Create Pull Request (on GitHub)

# Merge when ready
git checkout main
git merge feature/my-feature
git push
```

---

## 🌐 DEPLOYMENT VERIFICATION

After deployment, verify:

```bash
# Check if site is live
curl https://yoursite.com

# Check for errors
curl https://yoursite.com/api/health

# Check performance
# Use Lighthouse: https://developers.google.com/web/tools/lighthouse
# Use PageSpeed: https://pagespeed.web.dev/

# Monitor in production
pm2 logs
# or Vercel dashboard
```

---

## 🎓 LEARNING RESOURCES

```bash
# Next.js docs
open https://nextjs.org/docs

# Three.js docs
open https://threejs.org/docs

# React Three Fiber
open https://docs.pmnd.rs/react-three-fiber

# Zustand
open https://github.com/pmndrs/zustand

# Tailwind
open https://tailwindcss.com/docs
```

---

## 🆘 EMERGENCY COMMANDS

If everything breaks:

```bash
# Nuclear option: Complete clean install
rm -rf .next node_modules package-lock.json yarn.lock
npm cache clean --force
npm install
npm run dev
```

If that doesn't work:

```bash
# Start fresh
git reset --hard HEAD
git clean -fd
npm install
npm run dev
```

---

## ✨ YOU'RE READY!

**Start here:**

```bash
npm install && npm run dev
```

**Then customize:**

Edit `components/ProjectGraph.jsx` and `PROJECT_NODES`

**Then deploy:**

```bash
npm run build
vercel
```

Happy coding! 🚀✨
