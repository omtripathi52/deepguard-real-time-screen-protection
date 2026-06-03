import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "@/components/layout/Layout";
import ScrollToTop from "@/components/ScrollToTop";

import Index from "@/pages/Index";
import Product from "@/pages/Product";
import Solutions from "@/pages/Solutions";
import Technology from "@/pages/Technology";
import Trust from "@/pages/Trust";
import Blog from "@/pages/Blog";
import Events from "@/pages/Events";
import Careers from "@/pages/Careers";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/product" element={<Product />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/trust" element={<Trust />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/events" element={<Events />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
