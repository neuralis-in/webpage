import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { agents } from "../data/agents";
import { SectionHeading } from "./SectionHeading";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export const AgentsSection = () => (
  <section id="agents" className="relative z-10 overflow-hidden py-28">
    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
    <div className="mx-auto max-w-6xl px-6 lg:px-0">
      <SectionHeading
        eyebrow="Autonomous Stack"
        title="Agents orchestrated for the enterprise edge"
        description="Composable intelligence designed for infrastructure, product, finance, research, and high-performance compute workloads."
      />
      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {agents.map((agent, index) => {
          const Icon = agent.icon;
          return (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.4 }}
              className="h-full"
            >
              <Card className="group flex h-full flex-col justify-between border-white/10 bg-white/[0.03] p-6">
                <CardHeader>
                  <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-white/10 shadow-inner shadow-primary/40 transition group-hover:shadow-glow">
                    <Icon className="h-6 w-6 text-primary" />
                    <motion.span
                      layoutId="glow"
                      className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <CardTitle>{agent.name}</CardTitle>
                  <CardDescription>{agent.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{agent.summary}</p>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="group/btn text-primary"
                  >
                    <Link to={`/agents/learn-more?agent=${agent.slug}`}>
                      Learn More
                      <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);
