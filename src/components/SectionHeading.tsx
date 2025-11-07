import { motion } from "framer-motion";
import { cn } from "../lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  className
}: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.6 }}
    className={cn("mx-auto max-w-3xl text-center", className)}
  >
    {eyebrow && (
      <span className="mb-3 inline-flex items-center rounded-full border border-primary/40 bg-primary/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.38em] text-primary">
        {eyebrow}
      </span>
    )}
    <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-base text-slate-200 md:text-lg">{description}</p>
    )}
  </motion.div>
);
