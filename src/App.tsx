
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index";
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
import Auth from "./pages/Auth";

const queryClient = new QueryClient();

import ScrollToTop from "@/components/ScrollToTop";

const App = () => (
  <ThemeProvider defaultTheme="light">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/venture-studio" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
            <Route path="/start-project" element={<StartProject />} />
            <Route path="/book-consultation" element={<BookConsultation />} />
            <Route path="/core-skills-track" element={<CoreSkillsTrack />} />
            <Route path="/corporate-track" element={<CorporateTrack />} />
            <Route path="/join-hub" element={<JoinHub />} />
            <Route path="/pathfinding/dashboard" element={<PathfindingDashboard />} />
            <Route path="/pathfinding/onboarding" element={<NorthLanding />} />
            <Route path="/pathfinding" element={<NorthLanding />} />
            <Route path="/pathfinding/courses" element={<CoursesBrowser />} />
            <Route path="/pathfinding/path" element={<LearningPathView />} />
            <Route path="/pathfinding/admin" element={<AdminDashboard />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
