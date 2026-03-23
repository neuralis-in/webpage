import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { ArrowUpRight } from "lucide-react";
import intraintelLogo from "../assets/intraintel-logo.svg";
import equitiLogo from "../assets/equiti-logo.svg";

const clients = [
  {
    name: "Intraintel.ai",
    url: "https://intraintel.ai",
    logo: intraintelLogo,
    logoClass: "h-10 w-10",
    description:
      "Architected autonomous DevOps and research agents, fusing open-source and proprietary stacks into a unified intelligent control plane.",
    quote:
      "Neuralis helped us ship faster and with more confidence by building the agentic backbone of our platform.",
    attribution: "Dev Roy, CEO",
  },
  {
    name: "Equiti",
    url: "https://equiti.com",
    logo: equitiLogo,
    logoClass: "h-7 w-auto",
    description:
      "Delivered high-performance computing infrastructure and AI-driven automation for financial trading systems.",
  },
];

export const ClientsSection = () => (
  <section id="clients" className="relative py-32 overflow-hidden">
    {/* Top divider */}
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

    <div className="relative max-w-6xl mx-auto px-6">
      <SectionHeading
        eyebrow="Clients"
        title="Trusted by teams building at the frontier"
      />

      <div className="mt-20 grid gap-6 md:grid-cols-2">
        {clients.map((client, idx) => (
          <motion.a
            key={client.name}
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
            viewport={{ once: true, amount: 0.4 }}
            className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-10 md:p-12 transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04]"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.04] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className={`${client.logoClass} brightness-0 invert opacity-80`}
                  />
                  <h3 className="text-2xl font-semibold text-white">
                    {client.name}
                  </h3>
                </div>
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 group-hover:border-white/20 transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white/70 transition-colors" />
                </div>
              </div>

              <p className="text-sm text-white/40 leading-relaxed">
                {client.description}
              </p>

              {client.quote && (
                <div className="mt-8 pt-8 border-t border-white/[0.06]">
                  <p className="text-sm text-white/30 italic leading-relaxed">
                    &ldquo;{client.quote}&rdquo;
                  </p>
                  {client.attribution && (
                    <p className="mt-4 text-xs font-medium tracking-wide text-white/20">
                      {client.attribution}
                    </p>
                  )}
                </div>
              )}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);
