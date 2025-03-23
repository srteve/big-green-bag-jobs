
import { ReactNode, useEffect } from "react";
import { Navbar } from "./Navbar";
import { useLocation } from "react-router-dom";

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
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-bgb-50 to-bgb-100">
      <Navbar />
      <main 
        id="main-content" 
        className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        {children}
      </main>
      <footer className="w-full py-6 px-4 bg-bgb-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Big Green Bag</h3>
              <p className="text-bgb-300 text-sm">
                Connecting Shopify experts with the best brands in ecommerce.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-bgb-300 hover:text-white transition-colors text-sm">Home</a></li>
                <li><a href="/jobs" className="text-bgb-300 hover:text-white transition-colors text-sm">Browse Jobs</a></li>
                <li><a href="/brands" className="text-bgb-300 hover:text-white transition-colors text-sm">Brands</a></li>
                <li><a href="/profile" className="text-bgb-300 hover:text-white transition-colors text-sm">My Profile</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-bgb-300 text-sm mb-2">
                Have questions? Reach out to us.
              </p>
              <a 
                href="mailto:hello@biggreenbag.com" 
                className="text-sm inline-block px-4 py-2 bg-primary/90 text-white rounded-md hover:bg-primary transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-bgb-700 text-center text-bgb-400 text-sm">
            © {new Date().getFullYear()} Big Green Bag. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
