import { Link } from "react-router-dom";
import footerBackground from "@/assets/footer-background.jpg";
<<<<<<< HEAD
import globalReach from "@/assets/global-reach.jpg";
=======
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da

const Footer = () => {
  return (
    <footer 
<<<<<<< HEAD
      className="relative border-t border-[#1b2942] mt-0 bg-cover bg-center"
      style={{ 
        backgroundImage: `linear-gradient(to bottom, rgba(10, 26, 63, 0.92), rgba(10, 26, 63, 0.88)), url(${globalReach})` 
      }}
    >
      {/* Subtle Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMCAyMCBMIDQwIDIwIE0gMjAgMCBMIDIwIDQwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')`
        }}
      ></div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-primary/95"></div>
      
      <div className="container mx-auto px-4 md:px-8 lg:px-12 pt-12 pb-10 md:pt-16 md:pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-16 mb-8 md:mb-12">
          {/* Company Overview */}
          <div className="md:pl-0 lg:pl-4 space-y-4 md:space-y-0">
            <h3 className="font-serif text-lg md:text-xl font-bold mb-6 text-primary-foreground">COMPANY OVERVIEW</h3>
            <p className="text-sm md:text-base text-primary-foreground/80 leading-relaxed">
=======
      className="relative border-t-2 border-primary/20 mt-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${footerBackground})` }}
    >
      <div className="absolute inset-0 bg-primary/95"></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Overview */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-primary-foreground">COMPANY OVERVIEW</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
              Lemcorian is a diversified multidivision conglomerate with operations across Agricultural Products, Chemicals, and Medical Equipment & Instruments. We prioritize clarity, structure, and value across all our business sectors.
            </p>
          </div>

          {/* Quick Links */}
<<<<<<< HEAD
          <div className="md:pl-0 lg:pl-4 space-y-4 md:space-y-0">
            <h4 className="font-serif text-lg md:text-xl font-bold mb-4 md:mb-6 text-primary-foreground">QUICK LINKS</h4>
            <ul className="space-y-3 text-sm md:text-base">
              <li>
                <Link 
                  to="/" 
                  className="text-primary-foreground/80 hover:text-primary-foreground hover:underline transition-all duration-200 cursor-pointer leading-relaxed block"
                  aria-label="Navigate to homepage"
                >
=======
          <div>
            <h4 className="font-serif text-lg font-bold mb-4 text-primary-foreground">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
                  Home
                </Link>
              </li>
              <li>
<<<<<<< HEAD
                <Link 
                  to="/about" 
                  className="text-primary-foreground/80 hover:text-primary-foreground hover:underline transition-all duration-200 cursor-pointer leading-relaxed block"
                  aria-label="Navigate to about page"
                >
=======
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
                  About
                </Link>
              </li>
              <li>
<<<<<<< HEAD
                <Link 
                  to="/divisions" 
                  className="text-primary-foreground/80 hover:text-primary-foreground hover:underline transition-all duration-200 cursor-pointer leading-relaxed block"
                  aria-label="Navigate to divisions page"
                >
=======
                <Link to="/divisions" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
                  Divisions
                </Link>
              </li>
              <li>
<<<<<<< HEAD
                <Link 
                  to="/leadership" 
                  className="text-primary-foreground/80 hover:text-primary-foreground hover:underline transition-all duration-200 cursor-pointer leading-relaxed block"
                  aria-label="Navigate to leadership page"
                >
                  Leadership
                </Link>
              </li>
              <li>
                <Link 
                  to="/careers" 
                  className="text-primary-foreground/80 hover:text-primary-foreground hover:underline transition-all duration-200 cursor-pointer leading-relaxed block"
                  aria-label="Navigate to careers page"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link 
                  to="/investors" 
                  className="text-primary-foreground/80 hover:text-primary-foreground hover:underline transition-all duration-200 cursor-pointer leading-relaxed block"
                  aria-label="Navigate to investor relations page"
                >
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link 
                  to="/timeline" 
                  className="text-primary-foreground/80 hover:text-primary-foreground hover:underline transition-all duration-200 cursor-pointer leading-relaxed block"
                  aria-label="Navigate to timeline page"
                >
                  Timeline
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-primary-foreground/80 hover:text-primary-foreground hover:underline transition-all duration-200 cursor-pointer leading-relaxed block"
                  aria-label="Navigate to contact page"
                >
=======
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Divisions */}
<<<<<<< HEAD
          <div className="md:pl-0 lg:pl-4 space-y-4 md:space-y-0">
            <h4 className="font-serif text-lg md:text-xl font-bold mb-4 md:mb-6 text-primary-foreground">OUR DIVISIONS</h4>
            <ul className="space-y-4 text-sm md:text-base text-primary-foreground/80 leading-relaxed">
              <li>
                <div className="font-semibold text-primary-foreground mb-1">Agricultural Products</div>
                <div className="text-xs md:text-sm">Coffee, Vegetables</div>
              </li>
              <li>
                <div className="font-semibold text-primary-foreground mb-1">Chemicals</div>
                <div className="text-xs md:text-sm">Industrial, Pharmaceutical</div>
              </li>
              <li>
                <div className="font-semibold text-primary-foreground mb-1">Medical Equipment & Instruments</div>
                <div className="text-xs md:text-sm">Syringes, Gloves, Masks, etc.</div>
=======
          <div>
            <h4 className="font-serif text-lg font-bold mb-4 text-primary-foreground">OUR DIVISIONS</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>
                <div className="font-semibold text-primary-foreground">Agricultural Products</div>
                <div className="text-xs">Coffee, Vegetables</div>
              </li>
              <li>
                <div className="font-semibold text-primary-foreground">Chemicals</div>
                <div className="text-xs">Industrial, Pharmaceutical</div>
              </li>
              <li>
                <div className="font-semibold text-primary-foreground">Medical Equipment & Instruments</div>
                <div className="text-xs">Syringes, Gloves, Masks, etc.</div>
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
              </li>
            </ul>
          </div>

          {/* Corporate Office */}
<<<<<<< HEAD
          <div className="md:pl-0 lg:pl-4 space-y-4 md:space-y-0">
            <h4 className="font-serif text-lg md:text-xl font-bold mb-4 md:mb-6 text-primary-foreground">CORPORATE OFFICE</h4>
            <div className="space-y-3 text-sm md:text-base text-primary-foreground/80 leading-relaxed">
              <p className="font-semibold text-primary-foreground">Lemcorian Headquarters</p>
              <p>123 Global Trade Center<br />International Business District<br />Floor 45, Tower A</p>
              <p>Email: <a href="mailto:contact@lemcorian.com" className="hover:text-primary-foreground hover:underline transition-all duration-200">contact@lemcorian.com</a></p>
              <p>Phone: <a href="tel:+15551234567" className="hover:text-primary-foreground hover:underline transition-all duration-200">+1 (555) 123-4567</a></p>
=======
          <div>
            <h4 className="font-serif text-lg font-bold mb-4 text-primary-foreground">CORPORATE OFFICE</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p className="font-semibold text-primary-foreground">Lemcorian Headquarters</p>
              <p>Email: contact@lemcorian.com</p>
              <p>Phone: +91 XXXXXXXXXX</p>
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
            </div>
          </div>
        </div>

        {/* Disclaimer */}
<<<<<<< HEAD
        <div className="border-t border-primary-foreground/20 pt-8 pb-6">
          <p className="text-xs md:text-sm text-primary-foreground/60 text-center max-w-4xl mx-auto leading-relaxed">
=======
        <div className="border-t border-primary-foreground/20 pt-6 pb-6">
          <p className="text-xs text-primary-foreground/60 text-center max-w-4xl mx-auto">
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
            <span className="font-semibold">DISCLAIMER:</span> This website provides an overview of the Lemcorian Group and its business divisions. All information is strictly for corporate communication purposes.
          </p>
        </div>

        {/* Copyright */}
<<<<<<< HEAD
        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-sm md:text-base text-primary-foreground/60 leading-relaxed">
            &copy; {new Date().getFullYear()} Lemcorian Group. All Rights Reserved.
          </p>
=======
        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2025 Lemcorian Group. All Rights Reserved.</p>
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
        </div>
      </div>
    </footer>
  );
};

export default Footer;
