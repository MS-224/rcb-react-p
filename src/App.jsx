import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index.jsx";
import TeamPage from "./pages/TeamPage.jsx";
import FixturesPage from "./pages/FixturesPage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import NewsPage from "./pages/NewsPage.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import NewsArticlePage from "./pages/NewsArticlePage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import AdminLoginPage from "./pages/AdminLoginPage.jsx";
import GalleryPreview from "./components/GalleryPreview.jsx";
import FixturesSection from "./components/FixturesSection.jsx";
import SponsorsSection from "./components/SponsorsSection.jsx";
import ShopSection from "./components/ShopSection.jsx";
import GallerySection from "./components/GallerySection.jsx";
import TeamSection from "./components/TeamSection.jsx";
import Navigation from "./components/Navigation.jsx";
import TeamPreview from "./components/TeamPreview.jsx";
import NewsPreview from "./components/NewsPreview.jsx";
import ShopPreview from "./components/ShopPreview.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Footer from "./components/Footer.jsx";
import FixturesPreview from "./components/FixturesPreview.jsx";

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
