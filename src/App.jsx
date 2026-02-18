import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import FooterMinimal from "./components/layout/FooterMinimal";

import Home from "./pages/Home";
// Pages - Lazy Loaded
const About = lazy(() => import("./pages/About"));
const Workshops = lazy(() => import("./pages/Workshops"));
const NLP = lazy(() => import("./pages/NLP"));
const EQ = lazy(() => import("./pages/EQ"));
const AgriTourism = lazy(() => import("./pages/AgriTourism"));
const OutboundLearning = lazy(() => import("./pages/OutboundLearning"));
const Destinations = lazy(() => import("./pages/Destinations"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));

import ScrollToTop from "./components/utils/ScrollToTop";
import FloatingActions from "./components/ui/FloatingActions";
import { JourneyProvider } from "./context/JourneyProvider";
import BuildJourneyDrawer from "./components/destinations/BuildJourneyDrawer";
import Loading from "./components/ui/Loading";

function AppContent() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-accent-gold selection:text-forest-deep">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<Loading />}>
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
        </Suspense>
      </main>
      <FooterMinimal />
      <FloatingActions />
      <BuildJourneyDrawer />
    </div>
  );
}

function App() {
  return (
    <JourneyProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </JourneyProvider>
  );
}

export default App;
