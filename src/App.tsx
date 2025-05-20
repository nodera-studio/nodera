
// src/App.tsx

// Import components for showing notifications (Toasts/Sonner)
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
// Import provider for nice tooltips on hover
import { TooltipProvider } from "@/components/ui/tooltip";
// Import things for managing data fetching
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Import tools from React Router for navigation
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import our actual page components
import Index from "./pages/Index"; // The homepage
import NotFound from "./pages/NotFound"; // The "404 Not Found" page
import Services from "./pages/Services"; // Services landing page
import ServiceDetail from "./pages/ServiceDetail"; // Service detail page
import Work from "./pages/Work"; // Work portfolio page

// Create a client for managing data fetching (details not important now)
const queryClient = new QueryClient();

// Define the main App component
const App = () => (
  // Provider for data fetching
  <QueryClientProvider client={queryClient}>
    {/* Provider for tooltips */}
    <TooltipProvider>
      {/* Components to show notifications */}
      <Toaster />
      <Sonner />

      {/* This enables website navigation */}
      <BrowserRouter>
        {/* This holds all the different page routes */}
        <Routes>
          {/* Route 1: If the URL path is exactly "/", show the Index page */}
          <Route path="/" element={<Index />} />
          
          {/* Services routes */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
          
          {/* Work route */}
          <Route path="/work" element={<Work />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          {/* Example: <Route path="/about" element={<AboutPage />} /> */}

          {/* Catch-all Route: If no other path matches, show the NotFound page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
