import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import logo from "../assets/neuralis-logo.png";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-[#050505]/80 backdrop-blur-2xl border-b border-white/[0.06] py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <img
            src={logo}
            alt="Neuralis"
            className="h-8 w-8 rounded-full object-contain"
          />
          <span className="text-sm font-semibold tracking-tight text-white/90">
            Neuralis
          </span>
        </a>

        <a
          href="mailto:contact@neuralis.in"
          className="text-xs font-medium tracking-wide text-white/40 hover:text-white/70 transition-colors"
        >
          Get in touch &rarr;
        </a>
      </div>
    </header>
  );
};
