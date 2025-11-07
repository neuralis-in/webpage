import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AgentsSection } from "../components/AgentsSection";
import { Button } from "../components/ui/button";

export const AgentsPage = () => (
  <div className="space-y-20">
    <AgentsSection />
    <section className="mx-auto max-w-4xl px-6 text-center lg:px-0">
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-10">
        <h3 className="text-2xl font-semibold text-white">Dive into complete workflows</h3>
        <p className="mt-4 text-sm text-slate-200">
          Inspect stack integrations, policy guardrails, and telemetry loops that keep each agent production-ready.
        </p>
        <Button asChild size="lg" className="mt-6">
          <Link to="/agents/learn-more">
            Learn more about the agents
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  </div>
);

export default AgentsPage;
