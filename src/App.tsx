import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import IdeasHub from "./pages/IdeasHub";
import TeamMatching from "./pages/TeamMatching";
import CommunityHub from "./pages/CommunityHub";
import Workspace from "./pages/Workspace";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import FindIdeas from "./pages/FindIdeas";
import FindTeammates from "./pages/FindTeammates";
import CommunityInfo from "./pages/CommunityInfo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ideas" element={<IdeasHub />} />
          <Route path="/find-ideas" element={<FindIdeas />} />
          <Route path="/find-teammates" element={<FindTeammates />} />
          <Route path="/community-info" element={<CommunityInfo />} />
          <Route path="/teams" element={<TeamMatching />} />
          <Route path="/community" element={<CommunityHub />} />
          <Route path="/workspace/:id" element={<Workspace />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;