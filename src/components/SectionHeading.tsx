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
  className,
}: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.6 }}
    className={cn("mx-auto max-w-3xl text-center", className)}
  >
    {eyebrow && (
      <span className="mb-4 inline-block text-xs font-medium tracking-[0.3em] uppercase text-white/40">
        {eyebrow}
      </span>
    )}
    <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
      {title}
    </h2>
    {description && (
      <p className="mt-5 text-base text-white/50 md:text-lg leading-relaxed">
        {description}
      </p>
    )}
  </motion.div>
);
