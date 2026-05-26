import "./styles/blog.css";
import "./styles/home.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { App } from "./App";

// `import.meta.env.BASE_URL` mirrors Vite's `base` config (e.g. "/webpage/").
// React Router expects a basename without a trailing slash, and "/" is fine
// when running locally.
const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
