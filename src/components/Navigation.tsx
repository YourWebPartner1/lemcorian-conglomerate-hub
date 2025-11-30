import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/divisions", label: "Divisions" },
    { path: "/leadership", label: "Leadership" },
    { path: "/careers", label: "Careers" },
<<<<<<< HEAD
    { path: "/investors", label: "Investor Relations" },
=======
    { path: "/investor-relations", label: "Investor Relations" },
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
    { path: "/timeline", label: "Timeline" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
<<<<<<< HEAD
      <div className="container mx-auto px-4 pb-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="text-xl font-bold text-primary font-serif cursor-pointer transition-colors hover:text-primary/90"
            aria-label="Navigate to Lemcorian homepage"
          >
=======
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-primary font-serif">
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
            LEMCORIAN
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
<<<<<<< HEAD
                className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                  isActive(link.path) ? "text-primary" : "text-muted-foreground"
                }`}
                aria-label={`Navigate to ${link.label} page`}
=======
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-muted-foreground"
                }`}
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
<<<<<<< HEAD
                className={`block py-3 px-2 text-base font-medium transition-colors hover:text-primary cursor-pointer touch-manipulation ${
                  isActive(link.path) ? "text-primary" : "text-muted-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
                aria-label={`Navigate to ${link.label} page`}
=======
                className={`block py-2 text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-muted-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
