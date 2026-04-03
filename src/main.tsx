import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import { Deck } from "./pages/Deck";
import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/+$/, "")}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/deck" element={<Deck />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
