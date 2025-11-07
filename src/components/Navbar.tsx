import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";
import { useTheme } from "../context/ThemeContext";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Agents", to: "/agents" },
  { label: "Clients", to: "/clients" },
  // { label: "Team", to: "/team" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" }
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    cn(
      "rounded-full px-4 py-2 text-sm font-medium text-slate-200 transition-all hover:text-white",
      isActive && "bg-white/10 text-white shadow-glow"
    );

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex justify-center">
      <div className="mt-6 w-full max-w-6xl rounded-full border border-white/10 bg-slate-900/60 px-6 py-3 backdrop-blur-xl">
        <nav className="flex items-center justify-between">
          <NavLink
            to="/"
            className="flex items-center gap-3 text-left text-lg font-semibold tracking-tight text-white"
            onClick={() => setMobileOpen(false)}
            aria-label="Neuralis Home"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/80 via-violet-500/80 to-emerald-400/80 text-slate-950 shadow-glow">
              S
            </span>
            <div className="leading-tight">
              <span>Neuralis</span>
              <p className="text-xs font-normal uppercase tracking-[0.28em] text-slate-200">
                Agentic Intelligence
              </p>
            </div>
          </NavLink>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClasses} onClick={() => setMobileOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="hidden md:inline-flex text-slate-200"
              onClick={toggleTheme}
              aria-label={`Activate ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <button
              className="rounded-full border border-white/20 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200 transition hover:bg-white/10 md:hidden"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle navigation"
            >
              Menu
            </button>
            <Button
              size="sm"
              onClick={() =>
                window.open("mailto:pranavchiku11@gmail.com?subject=Neuralis%20Inquiry", "_blank")
              }
            >
              Start a Project
            </Button>
          </div>
        </nav>
        {mobileOpen && (
          <div className="mt-4 flex flex-wrap items-center gap-2 md:hidden">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "flex-1 rounded-full px-4 py-2 text-center text-sm font-medium text-slate-200 transition hover:text-white",
                    isActive && "bg-white/10 text-white shadow-glow"
                  )
                }
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <button
              className="flex-1 rounded-full border border-white/20 px-4 py-2 text-center text-sm font-medium text-slate-200 transition hover:bg-white/10"
              onClick={() => {
                toggleTheme();
                setMobileOpen(false);
              }}
              aria-label={`Activate ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? "Switch to Light" : "Switch to Dark"}
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
