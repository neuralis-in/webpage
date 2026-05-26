import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";
import intraintelLogo from "../assets/intraintel-logo.svg";
import equitiLogo from "../assets/equiti-logo.svg";

const TOTAL_SLIDES = 10;

function useSlideNavigation() {
  const [current, setCurrent] = useState(0);
  const isAnimating = useRef(false);

  const go = useCallback(
    (dir: 1 | -1) => {
      if (isAnimating.current) return;
      setCurrent((prev) => {
        const next = prev + dir;
        if (next < 0 || next >= TOTAL_SLIDES) return prev;
        isAnimating.current = true;
        setTimeout(() => {
          isAnimating.current = false;
        }, 600);
        return next;
      });
    },
    []
  );

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (Math.abs(e.deltaY) < 10) return;
      go(e.deltaY > 0 ? 1 : -1);
    };

    let touchStartY = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const onTouchEnd = (e: TouchEvent) => {
      const delta = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(delta) > 40) go(delta > 0 ? 1 : -1);
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === " " || e.key === "ArrowRight") {
        e.preventDefault();
        go(1);
      }
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKey);
    };
  }, [go]);

  return { current, setCurrent, go };
}

const slideVariants = {
  enter: (dir: number) => ({
    opacity: 0,
    y: dir > 0 ? 60 : -60,
  }),
  center: {
    opacity: 1,
    y: 0,
  },
  exit: (dir: number) => ({
    opacity: 0,
    y: dir > 0 ? -60 : 60,
  }),
};

function SlideWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "h-screen w-screen flex flex-col items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm mb-8">
      <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
      <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/40">
        {children}
      </span>
    </span>
  );
}

function NumberBadge({ n }: { n: number }) {
  return (
    <span className="flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/[0.04] text-sm font-mono text-white/40 mb-6">
      0{n}
    </span>
  );
}

function SlideTitle() {
  return (
    <SlideWrapper>
      <div className="glow-spot w-[600px] h-[600px] bg-white/[0.025] top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="relative text-center max-w-4xl">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Neuralis
        </motion.h1>
        <motion.p
          className="mt-6 text-lg md:text-2xl text-white/40 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          Scientific Computing &middot; Agentic AI &middot; Compiler Engineering
        </motion.p>
        <motion.div
          className="mt-10 text-sm text-white/20 tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Client Deck &middot; {new Date().getFullYear()}
        </motion.div>
      </div>
    </SlideWrapper>
  );
}

function SlideAbout() {
  return (
    <SlideWrapper>
      <div className="glow-spot w-[500px] h-[500px] bg-white/[0.015] top-1/2 right-0 -translate-y-1/2" />
      <div className="relative max-w-3xl text-center">
        <Badge>Who we are</Badge>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          Precision engineering
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/50">
            for hard problems
          </span>
        </h2>
        <p className="mt-8 text-base md:text-lg text-white/40 leading-relaxed max-w-2xl mx-auto">
          Neuralis is a consulting studio that builds compilers, high-performance
          compute pipelines, and autonomous AI agents for teams that need
          production-grade precision. We work at the intersection of systems
          engineering and applied intelligence.
        </p>
      </div>
    </SlideWrapper>
  );
}

function SlideServicesOverview() {
  const services = [
    {
      n: 1,
      title: "Agentic AI",
      brief: "Autonomous systems that reason, decide, and act",
    },
    {
      n: 2,
      title: "Scientific Computing",
      brief: "GPU-accelerated HPC for production workloads",
    },
    {
      n: 3,
      title: "Compiler Engineering",
      brief: "Custom toolchains and domain-specific languages",
    },
  ];

  return (
    <SlideWrapper>
      <div className="glow-spot w-[500px] h-[500px] bg-white/[0.015] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="relative max-w-5xl w-full">
        <Badge>Our offerings</Badge>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">
          What we build
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04]"
            >
              <NumberBadge n={s.n} />
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{s.brief}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}

function SlideAgenticAI() {
  const capabilities = [
    "Multi-agent orchestration with tool use and memory",
    "RAG pipelines with hybrid retrieval and reranking",
    "Workflow automation across APIs, databases, and infra",
    "Guardrails, evaluation, and observability built in",
    "Fine-tuning and prompt engineering for domain tasks",
  ];

  return (
    <SlideWrapper>
      <div className="glow-spot w-[400px] h-[400px] bg-white/[0.02] top-0 right-0" />
      <div className="relative max-w-4xl w-full">
        <Badge>Service deep dive</Badge>
        <div className="flex items-center gap-4 mb-6">
          <NumberBadge n={1} />
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Agentic AI
          </h2>
        </div>
        <p className="text-base md:text-lg text-white/40 leading-relaxed mb-12 max-w-2xl">
          We build autonomous agents that orchestrate workflows, make decisions,
          and scale across your infrastructure, from research prototypes to
          production deployments.
        </p>
        <div className="space-y-4">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="flex items-start gap-4 py-3 border-b border-white/[0.04] last:border-0"
            >
              <span className="mt-0.5 w-6 h-6 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-xs font-mono text-white/30 shrink-0">
                {i + 1}
              </span>
              <span className="text-sm md:text-base text-white/60">{cap}</span>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}

function SlideScientificComputing() {
  const capabilities = [
    "GPU-accelerated numerical simulations (CUDA, OpenCL)",
    "HPC pipeline design for large-scale data processing",
    "Custom linear algebra and optimization kernels",
    "Cloud-native compute orchestration (Kubernetes, Slurm)",
    "Performance profiling and bottleneck elimination",
  ];

  return (
    <SlideWrapper>
      <div className="glow-spot w-[400px] h-[400px] bg-white/[0.02] bottom-0 left-0" />
      <div className="relative max-w-4xl w-full">
        <Badge>Service deep dive</Badge>
        <div className="flex items-center gap-4 mb-6">
          <NumberBadge n={2} />
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Scientific Computing
          </h2>
        </div>
        <p className="text-base md:text-lg text-white/40 leading-relaxed mb-12 max-w-2xl">
          HPC pipelines, GPU-accelerated workloads, and numerical systems built
          for production-grade precision, from simulation to deployment.
        </p>
        <div className="space-y-4">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="flex items-start gap-4 py-3 border-b border-white/[0.04] last:border-0"
            >
              <span className="mt-0.5 w-6 h-6 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-xs font-mono text-white/30 shrink-0">
                {i + 1}
              </span>
              <span className="text-sm md:text-base text-white/60">{cap}</span>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}

function SlideCompilerEngineering() {
  const capabilities = [
    "LLVM-based compiler frontends and optimization passes",
    "Domain-specific language (DSL) design and implementation",
    "Code generation for custom hardware targets",
    "Static analysis tooling and linting frameworks",
    "Interpreter and runtime system development",
  ];

  return (
    <SlideWrapper>
      <div className="glow-spot w-[400px] h-[400px] bg-white/[0.02] top-1/3 right-0" />
      <div className="relative max-w-4xl w-full">
        <Badge>Service deep dive</Badge>
        <div className="flex items-center gap-4 mb-6">
          <NumberBadge n={3} />
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Compiler Engineering
          </h2>
        </div>
        <p className="text-base md:text-lg text-white/40 leading-relaxed mb-12 max-w-2xl">
          Custom toolchains, LLVM optimizations, and domain-specific languages
          that turn intent into performance, from parsing to codegen.
        </p>
        <div className="space-y-4">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="flex items-start gap-4 py-3 border-b border-white/[0.04] last:border-0"
            >
              <span className="mt-0.5 w-6 h-6 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-xs font-mono text-white/30 shrink-0">
                {i + 1}
              </span>
              <span className="text-sm md:text-base text-white/60">{cap}</span>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}

function SlideProcess() {
  const steps = [
    {
      phase: "Discovery",
      desc: "We map your architecture, constraints, and goals in a focused technical deep-dive.",
    },
    {
      phase: "Architecture",
      desc: "We design the system (data flows, APIs, infra) and align on scope before writing code.",
    },
    {
      phase: "Build & Ship",
      desc: "Iterative delivery with weekly demos. Production-ready code, tested and documented.",
    },
    {
      phase: "Support",
      desc: "Post-launch monitoring, optimization, and knowledge transfer to your team.",
    },
  ];

  return (
    <SlideWrapper>
      <div className="glow-spot w-[500px] h-[500px] bg-white/[0.015] top-1/2 left-0 -translate-y-1/2" />
      <div className="relative max-w-4xl w-full">
        <Badge>How we work</Badge>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">
          Engagement model
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.phase}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8"
            >
              <span className="text-xs font-mono text-white/25 tracking-wider mb-4 block">
                Phase 0{i + 1}
              </span>
              <h3 className="text-xl font-semibold mb-3">{step.phase}</h3>
              <p className="text-sm text-white/40 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}

function SlideClients() {
  const clients = [
    {
      name: "Intraintel.ai",
      logo: intraintelLogo,
      logoClass: "h-10 w-10",
      work: "Architected autonomous DevOps and research agents, fusing open-source and proprietary stacks into a unified intelligent control plane.",
      quote:
        "Neuralis helped us ship faster and with more confidence by building the agentic backbone of our platform.",
    },
    {
      name: "Equiti",
      logo: equitiLogo,
      logoClass: "h-7 w-auto",
      work: "Delivered high-performance computing infrastructure and AI-driven automation for financial trading systems.",
    },
  ];

  return (
    <SlideWrapper>
      <div className="glow-spot w-[500px] h-[500px] bg-white/[0.015] bottom-0 right-0" />
      <div className="relative max-w-5xl w-full">
        <Badge>Track record</Badge>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">
          Trusted by teams at the frontier
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {clients.map((c) => (
            <div
              key={c.name}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={c.logo}
                  alt={c.name}
                  className={`${c.logoClass} brightness-0 invert opacity-80`}
                />
                <h3 className="text-xl font-semibold">{c.name}</h3>
              </div>
              <p className="text-sm text-white/40 leading-relaxed">{c.work}</p>
              {c.quote && (
                <div className="mt-6 pt-6 border-t border-white/[0.06]">
                  <p className="text-sm text-white/30 italic leading-relaxed">
                    &ldquo;{c.quote}&rdquo;
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}

function SlideWhyNeuralis() {
  const differentiators = [
    {
      title: "Deep technical bench",
      desc: "Our engineers have shipped compilers, HPC systems, and AI agents at scale. We don't just consult; we build.",
    },
    {
      title: "End-to-end ownership",
      desc: "From architecture to deployment, we own the outcome. No hand-offs, no gaps.",
    },
    {
      title: "Research-grade rigor",
      desc: "We bring academic depth to production problems: peer-reviewed methods, battle-tested code.",
    },
  ];

  return (
    <SlideWrapper>
      <div className="glow-spot w-[500px] h-[500px] bg-white/[0.015] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="relative max-w-4xl w-full">
        <Badge>Why us</Badge>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">
          What sets us apart
        </h2>
        <div className="space-y-6">
          {differentiators.map((d, i) => (
            <div
              key={d.title}
              className="flex items-start gap-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/[0.04] text-sm font-mono text-white/40 shrink-0">
                0{i + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold mb-2">{d.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {d.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}

function SlideCTA() {
  return (
    <SlideWrapper>
      <div className="glow-spot w-[700px] h-[700px] bg-white/[0.025] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="relative text-center max-w-3xl">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
          Let&rsquo;s build
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/50">
            something remarkable
          </span>
        </h2>
        <p className="mt-8 text-base md:text-lg text-white/35 max-w-xl mx-auto leading-relaxed">
          Tell us about your systems, goals, and bottlenecks.
          <br />
          We&rsquo;ll architect the right solution.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="mailto:contact@neuralis.in?subject=Neuralis%20Project%20Inquiry"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-white text-black text-sm font-semibold rounded-full transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.12)]"
          >
            Start a conversation
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-black/40 group-hover:bg-black transition-colors" />
          </a>
          <a
            href="tel:+919879765662"
            className="text-sm text-white/30 hover:text-white/60 transition-colors"
          >
            +91 98797 65662
          </a>
        </div>
        <div className="mt-16 text-xs text-white/15">
          contact@neuralis.in &middot; neuralis.in
        </div>
      </div>
    </SlideWrapper>
  );
}

const slides = [
  SlideTitle,
  SlideAbout,
  SlideServicesOverview,
  SlideAgenticAI,
  SlideScientificComputing,
  SlideCompilerEngineering,
  SlideProcess,
  SlideClients,
  SlideWhyNeuralis,
  SlideCTA,
];

function ProgressDots({
  current,
  total,
  onNavigate,
}: {
  current: number;
  total: number;
  onNavigate: (idx: number) => void;
}) {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2.5">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onNavigate(i)}
          className={cn(
            "w-2 h-2 rounded-full transition-all duration-300",
            i === current
              ? "bg-white/80 scale-125"
              : "bg-white/15 hover:bg-white/30"
          )}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  );
}

function SlideCounter({ current, total }: { current: number; total: number }) {
  return (
    <div className="fixed bottom-6 left-6 z-50 text-xs font-mono text-white/20 tracking-wider">
      {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
    </div>
  );
}

export function Deck() {
  const { current, setCurrent } = useSlideNavigation();
  const [direction, setDirection] = useState(0);
  const prevSlide = useRef(0);

  useEffect(() => {
    setDirection(current > prevSlide.current ? 1 : -1);
    prevSlide.current = current;
  }, [current]);

  const CurrentSlide = slides[current];

  return (
    <div className="noise relative h-screen w-screen bg-[#050505] text-white antialiased overflow-hidden select-none">
      <div className="fixed top-5 left-6 z-50 flex items-center gap-2">
        <a href="/" className="flex items-center gap-2 group">
          <span className="text-xs font-semibold tracking-tight text-white/50 group-hover:text-white/80 transition-colors">
            Neuralis
          </span>
        </a>
      </div>

      <ProgressDots
        current={current}
        total={TOTAL_SLIDES}
        onNavigate={(idx) => setCurrent(idx)}
      />

      <SlideCounter current={current} total={TOTAL_SLIDES} />

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <CurrentSlide />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
