import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { ParticlesBackground } from "./components/ParticlesBackground";
import { AboutPage } from "./pages/AboutPage";
import { AgentsPage } from "./pages/AgentsPage";
import { AgentWorkflowPage } from "./pages/AgentWorkflowPage";
import { ClientsPage } from "./pages/ClientsPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
// import { TeamPage } from "./pages/TeamPage";

const App = () => {
  return (
    <div className="relative isolate min-h-screen overflow-x-hidden bg-slate-950 text-slate-100 antialiased">
      <ParticlesBackground />
      <div className="relative z-10">
        <Navbar />
        <main className="pt-24 pb-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/agents" element={<AgentsPage />} />
            <Route path="/agents/learn-more" element={<AgentWorkflowPage />} />
            <Route path="/clients" element={<ClientsPage />} />
            {/*
            <Route path="/team" element={<TeamPage />} />
            */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
