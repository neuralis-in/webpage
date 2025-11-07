import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative flex min-h-screen flex-col justify-center pt-16">
      <div className="hero-ambient">
        <div className="hero-glow hero-glow--cyan left-1/2 top-16 h-[18rem] w-[18rem] -translate-x-1/2 sm:h-[20rem] sm:w-[20rem]" />
        <div className="hero-glow hero-glow--violet -left-16 bottom-10 h-[18rem] w-[18rem] sm:h-[20rem] sm:w-[20rem]" />
        <div className="hero-glow hero-glow--emerald right-0 top-1/2 h-[16rem] w-[16rem] -translate-y-1/2 sm:right-6 sm:h-[18rem] sm:w-[18rem]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-6 md:grid-cols-[1.1fr_0.9fr] md:items-center lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.48em] text-slate-200">
            Neuralis Consulting
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            Building the Next Generation of{" "}
            <span className="hero-title-gradient bg-clip-text text-transparent">
              Agentic Intelligence
            </span>
          </h1>
          <p className="max-w-xl text-lg text-slate-200 md:text-xl">
            We design and deploy autonomous AI systems for scientific computing and enterprise
            automation. Agent orchestration, open-source infrastructure, and compiler-level
            efficiency come together to unlock resilient intelligent operations.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="lg" onClick={() => navigate("/agents")}>
              Explore Agents
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate("/contact")}>
              Work With Us
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8"
        >
          <div className="absolute inset-0 bg-grid-pattern bg-[length:48px_48px] opacity-30" />
          <div className="relative space-y-6">
            <h3 className="text-lg font-semibold text-slate-100">
              Agentic intelligence, engineered for scale.
            </h3>
            <p className="text-sm text-slate-200/90">
              Distributed agent frameworks, compiler-guided optimizations, and mission-ready open
              source tooling engineered by a team that has delivered for the frontier.
            </p>
            <div className="grid gap-4 text-sm">
              {[
                {
                  title: "Full-stack autonomy",
                  body: "From research to deployment, our agents self-coordinate across DevOps, product, and finance."
                },
                {
                  title: "Performance-first",
                  body: "We cut latency with compiler-level optimizations and orchestrate HPC-grade infrastructure."
                },
                {
                  title: "Enterprise aligned",
                  body: "Security, observability, and compliance so you can scale autonomous systems responsibly."
                }
              ].map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-xs text-slate-200/85">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
