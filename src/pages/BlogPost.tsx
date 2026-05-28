import { Navigate, useParams } from "react-router-dom";

import complianceHtml from "./content/post-everything-everywhere-is-compliance.html?raw";
import multiAgentHtml from "./content/post-building-multi-agent-systems.html?raw";
import llvmHtml from "./content/post-llvm-for-compiler-engineering.html?raw";
import cudaHtml from "./content/post-beyond-cuda-heterogeneous-gpu.html?raw";
import ragHtml from "./content/post-hidden-cost-of-rag.html?raw";

import { PageShell } from "../site/PageShell";

type PostMeta = {
  html: string;
  title: string;
  description: string;
};

const POSTS: Record<string, PostMeta> = {
  "everything-everywhere-is-compliance": {
    html: complianceHtml,
    title:
      "Everything, everywhere is compliance | Neuralis",
    description:
      "Two thresholds have flipped in regulated AI: the model finally clears the bar, and the buyer finally leans in. What it takes to put agents into compliance workflows that survive an audit."
  },
  "building-multi-agent-systems": {
    html: multiAgentHtml,
    title: "Building production-grade multi-agent systems | Neuralis",
    description:
      "What changes when an LLM is allowed to touch your infrastructure, and why most agent frameworks ship the wrong defaults."
  },
  "llvm-for-compiler-engineering": {
    html: llvmHtml,
    title: "Why we bet on LLVM for compiler engineering | Neuralis",
    description:
      "A field-tested case for the IR-first approach to custom toolchains, DSLs, and accelerator targets."
  },
  "beyond-cuda-heterogeneous-gpu": {
    html: cudaHtml,
    title: "Beyond CUDA: the future of heterogeneous GPU computing | Neuralis",
    description:
      "A pragmatic look at SYCL, ROCm, oneAPI, and what portable kernels actually cost in production."
  },
  "hidden-cost-of-rag": {
    html: ragHtml,
    title: "The hidden cost of RAG: lessons from production | Neuralis",
    description:
      "Five deployments of lessons on hybrid retrieval, evaluation, latency budgets, and when fine-tuning actually wins."
  }
};

export function BlogPost() {
  const { slug = "" } = useParams<{ slug: string }>();
  const cleanSlug = slug.replace(/\.html$/, "");
  if (cleanSlug !== slug) {
    return <Navigate to={`/blog/${cleanSlug}`} replace />;
  }
  const post = POSTS[cleanSlug];
  if (!post) return <Navigate to="/blog" replace />;

  return (
    <PageShell
      html={post.html}
      title={post.title}
      description={post.description}
    />
  );
}
