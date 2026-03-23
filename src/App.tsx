import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ServicesSection } from "./components/ServicesSection";
import { ClientsSection } from "./components/ClientsSection";
import { CTASection } from "./components/CTASection";

const App = () => {
  return (
    <div className="noise relative min-h-screen bg-[#050505] text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <ClientsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
