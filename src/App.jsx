import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Outlet,
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
const NotFound = lazy(() => import("./pages/NotFound"));
import Loading from "./components/ui/Loading";

function MainLayout() {
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-accent-gold selection:text-forest-deep">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
      {location.pathname !== "/plan-your-trip" && <FooterMinimal />}

      {/* Global Cinematic Edge Blurs */}
      <div className="fixed top-0 inset-x-0 h-20 refined-edge-fade-top z-60 pointer-events-none" />
      <div className="fixed bottom-0 inset-x-0 h-20 refined-edge-fade-bottom z-60 pointer-events-none" />
    </div>
  );
}

function AppContent() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/packages/:packageId" element={<PackageDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/plan-your-trip" element={<PersonalizedTour />} />
      </Route>
      <Route
        path="*"
        element={
          <div className="min-h-screen bg-forest-deep font-sans selection:bg-accent-gold selection:text-forest-deep">
            <Suspense fallback={<Loading />}>
              <NotFound />
            </Suspense>
          </div>
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
