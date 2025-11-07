import { FormEvent } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Button } from "./ui/button";

export const ContactSection = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email");
    window.open(`mailto:pranavchiku11@gmail.com?subject=Neuralis%20Project%20Inquiry&body=${encodeURIComponent(
      `Name: ${formData.get("name")}\nCompany: ${formData.get("company")}\nEmail: ${email}\n\nMessage:\n${formData.get("message")}`
    )}`);
    form.reset();
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      <div className="mx-auto max-w-5xl px-6 lg:px-0">
        <SectionHeading
          eyebrow="Engage"
          title="Let’s build the next intelligent system together"
          description="Tell us about your mission. We’ll assemble the right blend of agentic intelligence and performance engineering."
        />
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="mt-16 grid gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-xl shadow-black/30"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
              Name
              <input
                required
                name="name"
                placeholder="Ada Lovelace"
                className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 shadow-inner shadow-black/40 transition focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
              Email
              <input
                required
                type="email"
                name="email"
                placeholder="you@enterprise.com"
                className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 shadow-inner shadow-black/40 transition focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </label>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
              Company
              <input
                name="company"
                placeholder="IntraIntel.ai"
                className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 shadow-inner shadow-black/40 transition focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
              Project Horizon
              <select
                name="horizon"
                className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 shadow-inner shadow-black/40 transition focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                <option value="0-3">0-3 months</option>
                <option value="3-6">3-6 months</option>
                <option value="6+">6+ months</option>
              </select>
            </label>
          </div>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            Mission Brief
            <textarea
              required
              name="message"
              rows={5}
              placeholder="Share context about your systems, goals, and current bottlenecks."
              className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100 shadow-inner shadow-black/40 transition focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </label>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-slate-200">
              We reply within two business days. NDA-supported engagements available on request.
            </p>
            <Button type="submit" size="lg">
              Initiate Collaboration
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};
