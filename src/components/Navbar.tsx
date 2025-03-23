
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Briefcase, Heart, User, Menu, X, SparklesIcon } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Jobs", path: "/jobs", icon: Briefcase },
    { name: "Brands", path: "/brands", icon: Heart },
    { name: "Profile", path: "/profile", icon: User },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-white/70 backdrop-blur-lg shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-2"
              aria-label="Big Green Bag home"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-candy flex items-center justify-center">
                <SparklesIcon className="h-5 w-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl">Big Green Bag</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors relative group ${
                  location.pathname === link.path
                    ? "text-nebula"
                    : "text-bgb-700 hover:text-nebula"
                }`}
              >
                <div className="flex items-center space-x-1">
                  <link.icon className="w-4 h-4" />
                  <span>{link.name}</span>
                </div>
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-candy rounded-full" />
                )}
              </Link>
            ))}
            <Button variant="outline" size="sm" className="ml-2 border-nebula-200 text-nebula-700">
              <Search className="w-4 h-4 mr-1" />
              Search
            </Button>
            <Button size="sm" className="ml-2 bg-gradient-candy hover:opacity-90 transition-opacity">
              Sign In
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              className="text-nebula"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md border-t border-gray-200 animate-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? "bg-nebula-50 text-nebula"
                    : "text-bgb-700 hover:bg-nebula-50 hover:text-nebula"
                }`}
                style={{ animationDelay: `${navLinks.indexOf(link) * 50}ms` }}
              >
                <div className="flex items-center space-x-2">
                  <link.icon className="w-5 h-5" />
                  <span>{link.name}</span>
                </div>
              </Link>
            ))}
            <div className="pt-2 flex flex-col space-y-2">
              <Button variant="outline" className="w-full justify-start border-nebula-200 text-nebula-700">
                <Search className="w-4 h-4 mr-2" />
                Search Jobs
              </Button>
              <Button className="w-full bg-gradient-candy hover:opacity-90 transition-opacity">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
