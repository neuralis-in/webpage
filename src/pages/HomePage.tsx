import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ClientsSection } from "../components/ClientsSection";
import { Hero } from "../components/Hero";
import { SectionHeading } from "../components/SectionHeading";
import { Button } from "../components/ui/button";

const quickLinks = [
  {
    title: "Explore autonomous agents",
    description: "Meet the DevOps, Product, Finance, Research, and Build agents engineered for resilient workflows.",
    to: "/agents"
  },
  {
    title: "See enterprise impact",
    description: "Discover how teams like IntraIntel.ai deploy agentic intelligence with measurable outcomes.",
    to: "/clients"
  },
  // {
  //   title: "Meet the builders",
  //   description: "A frontier team of compiler developers, ML engineers, and product strategists powering Neuralis.",
  //   to: "/team"
  // }
];

export const HomePage = () => (
  <div className="space-y-24">
    <Hero />

    <section className="relative">
      <div className="mx-auto max-w-5xl px-6 lg:px-0">
        <SectionHeading
          eyebrow="Operate Intelligently"
          title="Neuralis activates autonomous systems end-to-end"
          description="From compiler-grade performance to agent orchestration, we embed intelligence across your stack."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {quickLinks.map((item) => (
            <div
              key={item.to}
              className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-left transition hover:border-primary/40 hover:shadow-glow"
            >
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-slate-200">{item.description}</p>
              </div>
              <Button asChild variant="ghost" className="quick-link-button mt-6 justify-start text-primary">
                <Link to={item.to}>
                  Continue <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>

    <ClientsSection />
  </div>
);

export default HomePage;
