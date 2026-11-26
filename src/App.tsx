import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import North from "./pages/North";
import Deckly from "./pages/Deckly";
import DeepReveal from "./pages/DeepReveal";
import CoreSkillsTrack from "./pages/CoreSkillsTrack";
import CorporateTrack from "./pages/CorporateTrack";
import JoinHub from "./pages/JoinHub";
import Company from "./pages/Company";
import NotFound from "./pages/NotFound";
import ScrollToTop from "@/components/ScrollToTop";

const App = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/north/onboarding" element={<North />} />
            <Route path="/venture/deckly" element={<Deckly />} />
            <Route path="/venture/deep-reveal" element={<DeepReveal />} />
            <Route path="/core-skills-track" element={<CoreSkillsTrack />} />
            <Route path="/corporate-track" element={<CorporateTrack />} />
            <Route path="/join-hub" element={<JoinHub />} />
            <Route path="/company" element={<Company />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  );
};

export default App;
