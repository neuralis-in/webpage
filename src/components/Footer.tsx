export const Footer = () => (
  <footer className="border-t border-white/10 bg-slate-950/80 py-10">
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-slate-200 md:flex-row md:items-center md:justify-between lg:px-0">
      <div>
        <p className="text-base font-semibold text-white">Neuralis</p>
        <p className="mt-1 max-w-lg text-sm text-slate-200">
          Scientific Computing, Compilers, and Open-source Agentic AI Consulting
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-6">
        <a
          href="mailto:pranavchiku11@gmail.com"
          className="text-slate-200 transition hover:text-primary"
        >
          pranavchiku11@gmail.com
        </a>
        <a
          href="https://github.com/neuralis"
          target="_blank"
          rel="noreferrer"
          className="text-slate-200 transition hover:text-primary"
        >
          GitHub
        </a>
        <p className="text-slate-300">© {new Date().getFullYear()} Neuralis. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
