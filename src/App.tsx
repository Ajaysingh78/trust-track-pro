import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, type UserRole } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Landing from "./pages/Landing";
import Beneficiary from "./pages/Beneficiary";
import Officer from "./pages/Officer";
import Admin from "./pages/Admin";
import AIInsights from "./pages/AIInsights";
import Pilot from "./pages/Pilot";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [currentRole, setCurrentRole] = useState<UserRole>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navbar currentRole={currentRole} onRoleChange={setCurrentRole} />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/beneficiary" element={<Beneficiary />} />
                <Route path="/officer" element={<Officer />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/ai-insights" element={<AIInsights />} />
                <Route path="/pilot" element={<Pilot />} />
                <Route path="/contact" element={<Contact />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
