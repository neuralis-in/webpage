import { Navigate, Route, Routes } from "react-router-dom";

import { useScrollToHash } from "./hooks/useScrollToHash";
import { BlogIndex } from "./pages/BlogIndex";
import { BlogPost } from "./pages/BlogPost";
import { Home } from "./pages/Home";
import { SiteFooter } from "./site/SiteFooter";
import { SiteNav } from "./site/SiteNav";

/**
 * Marketing + blog SPA. The pitch deck still lives at /deck via its own Vite
 * entry, so we don't route to it here.
 */
export function App() {
  useScrollToHash();

  return (
    <>
      <SiteNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        {/* Backwards-compat redirect for the previous static blog index URL. */}
        <Route path="/blog.html" element={<Navigate to="/blog" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <SiteFooter />
    </>
  );
}

export default App;
