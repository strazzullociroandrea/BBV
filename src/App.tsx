import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ChiSiamoAbout from "./pages/ChiSiamoAbout";
import ChiSiamoSquadre from "./pages/ChiSiamoSquadre";
import ChiSiamoIniziative from "./pages/ChiSiamoIniziative";
import Corsi from "./pages/Corsi";
import Calendario from "./pages/Calendario";
import Partnership from "./pages/Partnership";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chi-siamo/about" element={<ChiSiamoAbout />} />
          <Route path="/chi-siamo/squadre" element={<ChiSiamoSquadre />} />
          <Route path="/chi-siamo/iniziative" element={<ChiSiamoIniziative />} />
          <Route path="/corsi" element={<Corsi />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/partnership" element={<Partnership />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
