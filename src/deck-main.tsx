import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ThemeProvider } from "./context/ThemeContext";
import { Deck } from "./pages/Deck";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Deck />
    </ThemeProvider>
  </StrictMode>
);
