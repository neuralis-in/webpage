import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Deck } from "./pages/Deck";
import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Deck />
    </ThemeProvider>
  </StrictMode>
);
