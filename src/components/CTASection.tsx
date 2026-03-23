import { motion } from "framer-motion";

export const CTASection = () => (
  <section className="relative py-40 overflow-hidden">
    {/* Top divider */}
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

    {/* Background glow */}
    <div className="glow-spot w-[700px] h-[700px] bg-white/[0.02] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

    <div className="relative max-w-4xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
          Ready to build?
        </h2>
        <p className="mt-6 text-lg text-white/35 max-w-xl mx-auto leading-relaxed">
          Tell us about your systems, goals, and bottlenecks. We&rsquo;ll
          architect the right solution.
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
      </motion.div>
    </div>
  </section>
);
