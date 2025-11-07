import { LucideIcon, BrainCircuit, ChartSpline, Cog, FileText, ServerCog } from "lucide-react";

export type Agent = {
  name: string;
  slug: string;
  description: string;
  summary: string;
  icon: LucideIcon;
};

export const agents: Agent[] = [
  {
    name: "DevOps Agent",
    slug: "devops",
    description: "Autonomous CI/CD, observability, and infrastructure hardening.",
    summary:
      "Our DevOps Agent orchestrates cloud environments, applies IaC practices, and keeps pipelines resilient.",
    icon: ServerCog
  },
  {
    name: "Product Manager Agent",
    slug: "product-manager",
    description: "Roadmap synthesis, dependency tracking, and delivery telemetry.",
    summary:
      "Continuously aligns stakeholder intent with development, generating adaptive roadmaps and actionable insights.",
    icon: ChartSpline
  },
  {
    name: "Invoice Generation Agent",
    slug: "invoice",
    description: "Ingests, reconciles, and dispatches mission-critical invoices.",
    summary:
      "Applies document intelligence to remove latency and error in finance automation from ingestion to delivery.",
    icon: FileText
  },
  {
    name: "Research Agent",
    slug: "research",
    description: "Literature sweeps, synthesis, and experiment design guidance.",
    summary:
      "Scours academic and open-source ecosystems to distill strategies, benchmarks, and implementation directions.",
    icon: BrainCircuit
  },
  {
    name: "Build Agent",
    slug: "build",
    description: "Compiles, benchmarks, and optimizes scientific codebases.",
    summary:
      "Implements compiler-optimized build pipelines, regression detection, and reproducible benchmarking systems.",
    icon: Cog
  }
];
