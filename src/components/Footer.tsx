import logo from "../assets/neuralis-logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2.5">
            <img
              src={logo}
              alt="Neuralis"
              className="h-6 w-6 rounded-full object-contain"
            />
            <span className="text-sm font-semibold text-white/80">Neuralis</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-white/25">
            <a
              href="mailto:contact@neuralis.in"
              className="hover:text-white/50 transition-colors"
            >
              contact@neuralis.in
            </a>
            <span className="w-px h-3 bg-white/10" />
            <a
              href="tel:+919879765662"
              className="hover:text-white/50 transition-colors"
            >
              +91 98797 65662
            </a>
          </div>

          <span className="text-xs text-white/15">
            &copy; {currentYear} Neuralis Inc.
          </span>
        </div>
      </div>
    </footer>
  );
};
