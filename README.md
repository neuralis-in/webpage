# Neuralis Website

Neuralis — Scientific Computing, Compilers, and Open-source Agentic AI Consulting — is a React + TailwindCSS website that showcases consulting services for agentic intelligence systems, distributed agent frameworks, and compiler-grade performance engineering.

## 🚀 Tech Stack
- React 18 with Vite for fast dev + build cycles
- TypeScript for type-safe components and data
- TailwindCSS & custom glassmorphism utilities for the futuristic UI
- shadcn/ui primitives (buttons, cards) for accessible, themeable components
- Framer Motion for scroll-triggered animations
- lucide-react iconography
- react-tsparticles (tsparticles-slim) powering the neural particle background

## 📦 Getting Started
```bash
npm install
npm run dev
```

Open the prompted localhost URL (default: `http://localhost:5173`) to explore the live experience. Build production assets with:
```bash
npm run build
```

## 🧭 Site Structure
- `Hero`: Animated headline, particle-lit call-to-actions
- `Agents`: Agent cards for DevOps, Product, Invoice, Research, Build agents
- `Clients`: Testimonial highlight (IntraIntel.ai) and partnership callouts
- `About`: Mission narrative, core domains, founder blurb with parallax motion
- `Contact`: Glassmorphism form that launches a pre-filled email draft

## 🛠 Customization Tips
- Update agent data in `src/data/agents.ts`
- Adjust particle styling in `src/components/ParticlesBackground.tsx`
- Tailor branding in `tailwind.config.js` and global utilities in `src/index.css`

## 🌌 Vision
The experience leans into a minimalist, neon-futuristic aesthetic — reflecting Neuralis’s focus on agentic AI orchestration, HPC-oriented compilers, and open-source infrastructure.
