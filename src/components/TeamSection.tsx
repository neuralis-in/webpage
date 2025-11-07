import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { team } from "../data/team";

export const TeamSection = () => (
  <section id="team" className="relative py-28">
    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
    <div className="mx-auto max-w-6xl px-6 lg:px-0">
      <SectionHeading
        eyebrow="Team"
        title="Builders of Neuralis's agentic future"
        description="A collective of compiler engineers, ML practitioners, and product strategists delivering production-ready autonomy."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true, amount: 0.35 }}
            className="h-full"
          >
            <Card className="relative flex h-full flex-col justify-between overflow-hidden border-white/10 bg-white/[0.04] p-6">
              <CardHeader className="flex flex-col items-center space-y-4 text-center">
                <div className="relative">
                  <span className="absolute inset-0 rounded-full bg-primary/30 blur-2xl opacity-40" aria-hidden />
                  <img
                    src={member.avatar}
                    alt={`${member.name} avatar`}
                    className="relative h-20 w-20 rounded-full border border-white/20 bg-slate-900/60 object-cover shadow-lg shadow-primary/30"
                    loading="lazy"
                  />
                </div>
                <CardTitle className="text-lg text-white">{member.name}</CardTitle>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-200">
                  {member.role}
                </p>
              </CardHeader>
              <CardContent className="mt-4 flex flex-1 items-center text-sm text-slate-200">
                <p>{member.bio}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
