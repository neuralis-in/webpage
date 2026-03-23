import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Ambient glow orbs */}
      <div className="glow-spot w-[600px] h-[600px] bg-white/[0.03] -top-48 left-1/2 -translate-x-1/2" />
      <div className="glow-spot w-[400px] h-[400px] bg-white/[0.02] bottom-0 -right-32" />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-white/50">
            Scientific Computing & Agentic AI
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-white leading-[1.05]"
        >
          We build intelligent
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/50">
            systems that ship
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-8 text-lg md:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed"
        >
          Neuralis consults on compilers, high-performance compute, and
          autonomous AI agents for teams that need precision engineering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="mailto:contact@neuralis.in?subject=Neuralis%20Project%20Inquiry"
            className="group relative px-8 py-3.5 bg-white text-black text-sm font-semibold rounded-full overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            <span className="relative z-10">Start a project</span>
          </a>
          <a
            href="#clients"
            className="px-8 py-3.5 text-sm font-medium text-white/50 border border-white/10 rounded-full hover:text-white/80 hover:border-white/20 transition-all"
          >
            See our work
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/20">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  );
};
