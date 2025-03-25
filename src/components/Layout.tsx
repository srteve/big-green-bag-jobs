
import { ReactNode, useEffect } from "react";
import Navbar from "./Navbar"; // Changed from import { Navbar } from "./Navbar";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
    
    // Add entrance animation
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.style.opacity = '0';
      mainContent.style.transform = 'translateY(10px)';
      
      setTimeout(() => {
        mainContent.style.opacity = '1';
        mainContent.style.transform = 'translateY(0)';
        mainContent.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
      }, 50);
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-background relative overflow-hidden">
      {/* Background blobs */}
      <div className="hidden md:block">
        <div className="blob blob-nebula w-[500px] h-[500px] top-[10%] right-[5%] animate-blob" style={{ animationDelay: '0s' }}></div>
        <div className="blob blob-coral w-[400px] h-[400px] top-[40%] left-[5%] animate-blob" style={{ animationDelay: '1s' }}></div>
        <div className="blob blob-mint w-[600px] h-[600px] bottom-[10%] right-[15%] animate-blob" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Background mesh pattern */}
      <div className="absolute inset-0 bg-mesh-pattern opacity-50 pointer-events-none"></div>
      
      <Navbar />
      <main 
        id="main-content" 
        className="relative flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 z-10"
      >
        {children}
      </main>
      <footer className="relative w-full py-6 px-4 bg-gradient-to-r from-nebula-800 to-nebula-900 text-white z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Big Green Bag</h3>
              <p className="text-white/70 text-sm">
                Connecting Shopify experts with the best brands in ecommerce.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-white/70 hover:text-white transition-colors text-sm">Home</Link></li>
                <li><Link to="/jobs" className="text-white/70 hover:text-white transition-colors text-sm">Browse Jobs</Link></li>
                <li><Link to="/brands" className="text-white/70 hover:text-white transition-colors text-sm">Brands</Link></li>
                <li><Link to="/premium-services" className="text-white/70 hover:text-white transition-colors text-sm">Premium Services</Link></li>
                <li><Link to="/profile" className="text-white/70 hover:text-white transition-colors text-sm">My Profile</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-white/70 text-sm mb-2">
                Have questions? Reach out to us.
              </p>
              <a 
                href="mailto:hello@biggreenbag.com" 
                className="text-sm inline-block px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-md transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/10 text-center text-white/40 text-sm">
            © {new Date().getFullYear()} Big Green Bag. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
