import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import FooterMinimal from "./components/layout/FooterMinimal";

import Home from "./pages/Home";
// Pages - Lazy Loaded
const About = lazy(() => import("./pages/About"));
const Destinations = lazy(() => import("./pages/Destinations"));
const Packages = lazy(() => import("./pages/Packages"));
const PackageDetail = lazy(() => import("./pages/PackageDetail"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const PersonalizedTour = lazy(() => import("./pages/PersonalizedTour"));

import ScrollToTop from "./components/utils/ScrollToTop";
import { JourneyProvider } from "./context/JourneyProvider";
import Loading from "./components/ui/Loading";

function AppContent() {
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-accent-gold selection:text-forest-deep">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/packages/:packageId" element={<PackageDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/plan-your-trip" element={<PersonalizedTour />} />
          </Routes>
        </Suspense>
      </main>
      {location.pathname !== "/plan-your-trip" && <FooterMinimal />}

      {/* Global Cinematic Edge Blurs (Refined ChatGPT-style) */}
      <div className="fixed top-0 inset-x-0 h-32 refined-edge-fade-top z-60 pointer-events-none backdrop-blur-[1px]" />
      <div className="fixed bottom-0 inset-x-0 h-32 refined-edge-fade-bottom z-60 pointer-events-none backdrop-blur-[1px]" />
    </div>
  );
}

function App() {
  return (
    <Router>
      <JourneyProvider>
        <ScrollToTop />
        <AppContent />
      </JourneyProvider>
    </Router>
  );
}

export default App;
