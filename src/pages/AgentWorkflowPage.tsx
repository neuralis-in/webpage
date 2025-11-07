import { motion } from "framer-motion";
import { ArrowUpRight, CircuitBoard, GitBranch, ServerCog, ShieldCheck, Workflow } from "lucide-react";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { agents } from "../data/agents";
import { SectionHeading } from "../components/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";

const workflows = {
  devops: {
    title: "DevOps Agent",
    headline: "Slack-native delivery pipelines spanning GitHub, GCP services, and API-first operations.",
    stream: [
      {
        title: "Slack command ingestion",
        detail:
          "The Slack app listens for tagged prompts like \"@devops create github repository alpha\" or \"@devops create cloud run service payments\", parses intent, and expands it into an executable task graph."
      },
      {
        title: "Repo intelligence",
        detail:
          "Watches GitHub events, scores change risk, and seeds repository scaffolds through GitHub APIs and templated automation."
      },
      {
        title: "Progressive rollout",
        detail:
          "Uses n8n flows to sequence GCP Cloud Build, Cloud Run, and secret management APIs, validating health checks before traffic shifts."
      },
      {
        title: "Ops co-pilot",
        detail:
          "Links incident runbooks, GCP monitoring alerts, and remediation scripts; posts status and confirmations back in Slack to close the loop."
      }
    ],
    stack: ["Slack", "n8n", "GitHub", "GCP Cloud Run", "GCP Cloud Build", "Google Cloud APIs", "GCP Monitoring"]
  },
  "product-manager": {
    title: "Product Manager Agent",
    headline: "Telemetry-grounded roadmap orchestration that ingests statements of work and allocates talent with precision.",
    stream: [
      {
        title: "Statement of Work parsing",
        detail:
          "Ingests SoWs, chunks them with semantic embeddings, extracts contractual requirements, and maps acceptance criteria."
      },
      {
        title: "Epic + story synthesis",
        detail:
          "Decomposes requirements into epics, user stories, and subtasks, attaching effort estimates and dependency graphs."
      },
      {
        title: "Bandwidth-aware assignment",
        detail:
          "Evaluates developer bandwidth, expertise, and historical velocity; assigns work to balanced squads and predicts delivery timelines."
      }
    ],
    stack: ["Slack", "n8n", "Jira", "GCP Document AI", "GCP BigQuery"]
  },
  invoice: {
    title: "Invoice Generation Agent",
    headline: "Automated billing that reconciles time tracking, produces client-ready invoices, and closes the books.",
    stream: [
      {
        title: "Timekeeping ingestion",
        detail:
          "Pulls timesheets from Clockify, enriches with developer rate cards, and validates entries against engagement rules."
      },
      {
        title: "Invoice synthesis",
        detail:
          "Queries the internal PostgreSQL roster, applies templated invoice layouts, and dispatches PDFs to clients through email automations."
      },
      {
        title: "Accounting sync",
        detail:
          "Writes line-item revenue and cost allocations into the internal accounting sheet, generating an up-to-date P&L snapshot."
      }
    ],
    stack: ["Clockify API", "PostgreSQL", "Slack", "n8n", "GCP Cloud Functions", "Google Sheets"]
  },
  research: {
    title: "Research Agent",
    headline: "Autonomous literature sweeps, benchmark reproduction, and design partner briefs.",
    stream: [
      {
        title: "Corpus assembly",
        detail:
          "Scrapes arXiv, OpenReview, GitHub; applies semantic deduplication; writes embeddings to a pgvector warehouse."
      },
      {
        title: "Hypothesis engine",
        detail:
          "Runs chain-of-thought reasoning over evaluation matrices, contrasts SoTA, and recommends experiment deltas."
      },
      {
        title: "Synthesis",
        detail:
          "Generates briefs with citations, code blocks, and risk commentary; syncs to Confluence and Slack channels."
      }
    ],
    stack: ["arXiv", "OpenReview", "GitHub", "Postgres+pgvector", "Weights & Biases"]
  },
  build: {
    title: "Build Agent",
    headline: "Compiler-aware builds, benchmark regression detection, and artifact provenance tracking.",
    stream: [
      {
        title: "Dependency graph",
        detail:
          "Analyzes CMake/Bazel graphs, warms caches, and computes minimal rebuild sets leveraging LLVM toolchain metadata."
      },
      {
        title: "Benchmark guardrails",
        detail:
          "Spins up HPC runners, executes micro-benchmarks, and flags regressions with time-series anomaly detection."
      },
      {
        title: "Artifacts & provenance",
        detail:
          "Publishes SBOMs, signs artifacts with Cosign, and stores provenance manifests complying with SLSA."
      }
    ],
    stack: ["LFortran", "LLVM", "CMake", "Bazel", "Grafana", "Cosign"]
  }
} as const;

const architectureCards = [
  {
    title: "Autonomy orchestration",
    description:
      "Agents run on a multi-tenant control plane with vector memory, policy enforcement, and event-driven scaling via Temporal.io.",
    icon: Workflow
  },
  {
    title: "Toolchain integration",
    description:
      "Secure connectors bridge CI runners, data warehouses, and ERP stacks; zero-trust proxies guard every action.",
    icon: CircuitBoard
  },
  {
    title: "Observability + guardrails",
    description:
      "Prometheus, OpenTelemetry, and fine-grained audit trails feed dashboards and trigger auto-mitigation policies.",
    icon: ShieldCheck
  }
];

export const AgentWorkflowPage = () => {
  const [params, setParams] = useSearchParams();
  const active = params.get("agent") ?? "devops";

  const orderedAgents = useMemo(() => agents, []);

  const activeWorkflow = workflows[(active as keyof typeof workflows) ?? "devops"] ?? workflows.devops;

  return (
    <div className="space-y-24">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-0">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.45em] text-slate-200"
          >
            Learn More
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-semibold text-white md:text-5xl"
          >
            Agentic workflows built to operate in production
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mx-auto mt-6 max-w-3xl text-lg text-slate-200"
          >
            Every agent combines foundation-model reasoning with deterministic control flows, compiler-grade tooling, and
            federated observability. Choose an agent below to inspect its autonomous workflow.
          </motion.p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {orderedAgents.map((agent) => (
              <Button
                key={agent.slug}
                variant={agent.slug === active ? "default" : "outline"}
                size="sm"
                onClick={() => setParams({ agent: agent.slug })}
              >
                {agent.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 lg:px-0">
        <Card className="border-white/10 bg-white/[0.03] p-10">
          <CardHeader className="space-y-4 text-left">
            <CardTitle className="text-2xl text-white">{activeWorkflow.title}</CardTitle>
            <p className="text-base text-slate-200">{activeWorkflow.headline}</p>
          </CardHeader>
          <CardContent className="mt-6 grid gap-8 md:grid-cols-[0.4fr_1fr]">
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Stack</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-200">
                {activeWorkflow.stack.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <ServerCog className="h-4 w-4 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              {activeWorkflow.stream.map((stage, idx) => (
                <motion.div
                  key={stage.title}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.05] p-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-sm font-semibold text-primary">
                      {idx + 1}
                    </span>
                    <h4 className="text-lg font-semibold text-white">{stage.title}</h4>
                  </div>
                  <p className="mt-3 text-sm text-slate-200">{stage.detail}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="relative py-12">
        <div className="pointer-events-none absolute inset-x-0 top-1/2 h-40 -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        <div className="mx-auto max-w-5xl px-6 lg:px-0">
          <SectionHeading
            eyebrow="Architecture"
            title="Autonomy control plane"
            description="Agents compile workflows into deterministic DAGs that trigger tools, constrained by policies and real-time telemetry."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {architectureCards.map((card) => {
              const Icon = card.icon;
              return (
                <Card key={card.title} className="h-full border-white/10 bg-white/[0.03] p-6">
                  <CardHeader className="flex items-center gap-4">
                    <div className="rounded-2xl bg-primary/15 p-3 text-primary shadow-inner shadow-primary/30">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg text-white">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="mt-4 text-sm text-slate-200">{card.description}</CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 lg:px-0">
        <Card className="border-white/10 bg-slate-900/70 p-8">
          <CardHeader className="space-y-4 text-left">
            <CardTitle className="text-2xl text-white">Incident-to-insight loop</CardTitle>
            <p className="text-sm text-slate-200">
              Agents integrate with Git, observability, and chat to close the loop from detection to remediation.
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              {["Detect", "Diagnose", "Resolve"].map((phase, idx) => (
                <div key={phase} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <div className="flex items-center gap-3">
                    <GitBranch className="h-5 w-5 text-primary" />
                    <h4 className="text-base font-semibold text-white">{phase}</h4>
                  </div>
                  <p className="mt-3 text-sm text-slate-200">
                    {idx === 0 &&
                      "Streaming signals from Prometheus + OpenTelemetry trigger anomaly detection and spin up a context window."}
                    {idx === 1 &&
                      "Embeds logs, traces, and recent commits; drafts hypotheses with source links and risk scoring."}
                    {idx === 2 &&
                      "Executes runbooks via Terraform Cloud, creates retros in Notion, and files patches through protected PRs."}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto max-w-4xl px-6 text-center lg:px-0">
        <SectionHeading
          eyebrow="Next Steps"
          title="Ready to launch your agentic workflow?"
          description="Neuralis architects the operating model, infrastructure, and guardrails so your teams ship with confidence."
        />
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            onClick={() =>
              window.open("mailto:pranavchiku11@gmail.com?subject=Neuralis%20Agentic%20Workflow", "_blank")
            }
          >
            Discuss Integration
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open("https://github.com/pranavchiku", "_blank")}
          >
            Review Engineering Playbooks
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AgentWorkflowPage;
