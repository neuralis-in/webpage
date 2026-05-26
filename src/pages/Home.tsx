import homeHtml from "./content/home.html?raw";

import { PageShell } from "../site/PageShell";

export function Home() {
  return (
    <PageShell
      html={homeHtml}
      title="Neuralis — Precision engineering for hard problems"
      description="Neuralis is a consulting studio that builds compilers, high-performance compute pipelines, and autonomous AI agents for teams that need production-grade precision."
    />
  );
}
