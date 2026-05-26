import blogIndexHtml from "./content/blog-index.html?raw";

import { PageShell } from "../site/PageShell";

export function BlogIndex() {
  return (
    <PageShell
      html={blogIndexHtml}
      title="Field notes — Neuralis"
      description="Field notes from the Neuralis engineering bench — essays on compilers, agents, scientific computing, and shipping precision systems."
    />
  );
}
