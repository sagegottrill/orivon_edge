
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

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="dark">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
