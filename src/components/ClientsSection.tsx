import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

export const ClientsSection = () => (
  <section id="clients" className="relative py-28">
    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
    <div className="mx-auto max-w-6xl px-6 lg:px-0">
      <SectionHeading
        eyebrow="Trusted Impact"
        title="Partnering with frontier organizations"
        description="We embed with teams pushing the boundaries of agentic automation, HPC workloads, and mission-critical AI deployments."
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="mt-16 grid gap-10 md:grid-cols-[1.2fr_0.8fr]"
      >
        <div className="glass relative overflow-hidden rounded-3xl border border-white/10 p-8">
          <div className="absolute inset-0 bg-grid-pattern bg-[length:42px_42px] opacity-20" />
          <div className="relative space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-200">
              Featured Client
            </p>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-lg font-semibold text-cyan-300">
                II
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">IntraIntel.ai</h3>
                <p className="text-sm text-slate-200/85">
                  Autonomous intelligence for enterprise data operations.
                </p>
              </div>
            </div>
            <blockquote className="text-lg text-slate-200">
              “Neuralis architected our autonomous DevOps and research agents, fusing open-source and
              proprietary stacks into a single intelligent control plane. We ship faster and with
              more confidence.”
            </blockquote>
            <p className="text-sm text-slate-200">— Dev Roy, CEO, IntraIntel.ai</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200">
            <h4 className="text-base font-semibold text-white">Future Collaborations</h4>
            <p className="mt-2">
              We're engaging with research labs, space systems teams, and financial platforms to
              deploy resilient agentic infrastructure. Reach out to explore partnerships.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200">
            <h4 className="text-base font-semibold text-white">Open Source</h4>
            <p className="mt-2">
              Neuralis contributes to compilers, distributed runtime optimizations, and agent
              orchestration frameworks. Collaborators gain access to our internal toolchain.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
