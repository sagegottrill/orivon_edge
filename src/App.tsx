
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import StartProject from "./pages/StartProject";
import BookConsultation from "./pages/BookConsultation";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";
import CoreSkillsTrack from "./pages/CoreSkillsTrack";
import CorporateTrack from "./pages/CorporateTrack";
import JoinHub from "./pages/JoinHub";
import PathfindingDashboard from "./pages/PathfindingDashboard";
import NorthLanding from './pages/NorthLanding';
import CoursesBrowser from "./pages/CoursesBrowser";
import LearningPathView from "./pages/LearningPathView";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import DecklyLanding from './pages/DecklyLanding';
import DeepRevealLanding from './pages/DeepRevealLanding';
import Auth from "./pages/Auth";

const queryClient = new QueryClient();

import ScrollToTop from "@/components/ScrollToTop";

const App = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/project/:slug" element={<ProjectDetail />} />
              <Route path="/start-project" element={<StartProject />} />
              <Route path="/book-consultation" element={<BookConsultation />} />
              <Route path="/core-skills-track" element={<CoreSkillsTrack />} />
              <Route path="/corporate-track" element={<CorporateTrack />} />
              <Route path="/join-hub" element={<JoinHub />} />
              <Route path="/north/dashboard" element={<PathfindingDashboard />} />
              <Route path="/north/onboarding" element={<NorthLanding />} />
              <Route path="/north" element={<NorthLanding />} />
              <Route path="/north/courses" element={<CoursesBrowser />} />
              <Route path="/north/path" element={<LearningPathView />} />
              <Route path="/venture/deckly" element={<DecklyLanding />} />
              <Route path="/pitch-assessor" element={<DecklyLanding />} />
              <Route path="/north/admin" element={<AdminDashboard />} />
              <Route path="/dashboard" element={<UserDashboard />} />
              <Route path="/venture/deep-reveal" element={<DeepRevealLanding />} />
              <Route path="/problem-finder" element={<DeepRevealLanding />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
