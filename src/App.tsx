import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import TeamPage from "./pages/TeamPage";
import FixturesPage from "./pages/FixturesPage";
import GalleryPage from "./pages/GalleryPage";
import NewsPage from "./pages/NewsPage";
import ShopPage from "./pages/ShopPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import NotFound from "./pages/NotFound";
import NewsArticlePage from "./pages/NewsArticlePage";
import AdminPage from "./pages/AdminPage";
import AdminLoginPage from "./pages/AdminLoginPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/fixtures" element={<FixturesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<NewsArticlePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/admin" element={localStorage.getItem('rcbAdminAuth') === 'true' ? <AdminPage /> : <Navigate to="/admin-login" />} />
          <Route path="/admin-login" element={<AdminLoginPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
