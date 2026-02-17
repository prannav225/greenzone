import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import FooterMinimal from "./components/layout/FooterMinimal";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Workshops from "./pages/Workshops";
import NLP from "./pages/NLP";
import EQ from "./pages/EQ";
import AgriTourism from "./pages/AgriTourism";
import OutboundLearning from "./pages/OutboundLearning";
import Destinations from "./pages/Destinations";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import ScrollToTop from "./components/utils/ScrollToTop";
import FloatingActions from "./components/ui/FloatingActions";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/nlp" element={<NLP />} />
            <Route path="/eq" element={<EQ />} />
            <Route path="/agri-tourism" element={<AgriTourism />} />
            <Route path="/outbound-learning" element={<OutboundLearning />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </div>
        <FooterMinimal />
        <FloatingActions />
      </div>
    </Router>
  );
}

export default App;
