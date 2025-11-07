import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "./SectionHeading";

const domains = [
  {
    title: "Scientific Computing",
    description: "From HPC schedulers to GPU compilers, we engineer autonomy that understands physics-grade workloads."
  },
  {
    title: "Compiler Engineering",
    description: "Custom toolchains, LLVM optimizations, and DSLs that translate intent into performant execution."
  },
  {
    title: "Agentic AI",
    description: "Distributed orchestration, policy-driven behaviors, and continuous evaluation loops."
  },
  {
    title: "Open Source",
    description: "We build in the open, contributing primitives that anchor the agentic ecosystem."
  }
];

export const AboutSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section id="about" className="relative py-28">
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
      <div className="mx-auto max-w-6xl px-6 lg:px-0">
        <SectionHeading
          eyebrow="Mission DNA"
          title="Engineering agency at the intersection of compute and intelligence"
          description="Neuralis exists to accelerate the adoption of agentic systems in environments where precision, repeatability, and trust are non-negotiable."
        />

        <motion.div
          ref={ref}
          style={{ y }}
          className="mt-16 grid gap-12 md:grid-cols-[1fr_0.9fr]"
        >
          <div className="space-y-6 text-lg text-slate-200">
            <p>
              We are systems builders who have designed compilers, orchestrated HPC clusters, and
              deployed autonomous workflows across regulated industries. Our consulting practice
              combines deep technical architecture with pragmatic delivery.
            </p>
            <p>
              Agentic intelligence demands rigor. We pair open-source transparency with enterprise
              guardrails, ensuring every agent is observable, auditable, and resilient under load.
            </p>
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 text-sm text-slate-100">
              <h3 className="text-base font-semibold text-white">Our Founder</h3>
              <p className="mt-2">
                Pranav Goswami is a Machine Learning Engineer at Warner Bros. Discovery, Compiler
                Developer with the LFortran project, and JavaScript Developer at stdlib-js. A 2024
                Computer Science graduate from IIT Jodhpur and GSoC 2023 recipient with fortran-lang,
                Pranav optimized the SciPy Fortran toolchain to compile under LFortran. He brings
                production-grade autonomy, compiler engineering depth, and open-source leadership to
                every Neuralis engagement.
              </p>
            </div>
          </div>
          <div className="grid gap-6">
            {domains.map((domain, idx) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                viewport={{ once: true, amount: 0.5 }}
                className="rounded-3xl border border-white/10 bg-slate-900/70 p-6"
              >
                <h4 className="text-lg font-semibold text-white">{domain.title}</h4>
                <p className="mt-2 text-sm text-slate-100">{domain.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
