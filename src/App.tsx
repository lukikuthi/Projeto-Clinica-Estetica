import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import SplashScreen from "./components/SplashScreen";
import Index from "./pages/Index";
import Procedimentos from "./pages/Procedimentos";
import ProcedimentoDetalhe from "./pages/ProcedimentoDetalhe";
import Sobre from "./pages/Sobre";
import AntesDepois from "./pages/AntesDepois";
import Depoimentos from "./pages/Depoimentos";
import Blog from "./pages/Blog";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [startVideo, setStartVideo] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <SplashScreen
          onComplete={() => setShowSplash(false)}
          onNearComplete={() => setStartVideo(true)}
        />
        <HashRouter>
          <Layout>
            <Routes>
              <Route
                path="/"
                element={
                  <Index isLoading={showSplash} startVideo={startVideo} />
                }
              />
              <Route path="/procedimentos" element={<Procedimentos />} />
              <Route
                path="/procedimentos/:slug"
                element={<ProcedimentoDetalhe />}
              />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/antes-depois" element={<AntesDepois />} />
              <Route path="/depoimentos" element={<Depoimentos />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;