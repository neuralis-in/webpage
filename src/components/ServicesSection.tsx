import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    title: "Agentic AI",
    description:
      "Autonomous agents that orchestrate workflows, make decisions, and scale across your infrastructure.",
  },
  {
    title: "Scientific Computing",
    description:
      "HPC pipelines, GPU-accelerated workloads, and numerical systems built for production-grade precision.",
  },
  {
    title: "Compiler Engineering",
    description:
      "Custom toolchains, LLVM optimizations, and domain-specific languages that turn intent into performance.",
  },
];

export const ServicesSection = () => (
  <section id="services" className="relative py-32 overflow-hidden">
    {/* Top divider */}
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

    {/* Background glow */}
    <div className="glow-spot w-[500px] h-[500px] bg-white/[0.015] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

    <div className="relative max-w-6xl mx-auto px-6">
      <SectionHeading
        eyebrow="What we do"
        title="Engineering at the edge of compute and intelligence"
      />

      <div className="mt-20 grid gap-6 md:grid-cols-3">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
            viewport={{ once: true, amount: 0.4 }}
            className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-10 transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04]"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg border border-white/10 bg-white/[0.04] text-xs font-mono text-white/40">
                  0{idx + 1}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
