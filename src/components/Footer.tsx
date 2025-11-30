import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer 
      className="relative border-t border-[#1b2942] mt-0 bg-cover bg-center"
      style={{ 
        backgroundImage: `linear-gradient(to bottom, rgba(10, 26, 63, 0.92), rgba(10, 26, 63, 0.88)), url(${import.meta.env.BASE_URL}global-reach.jpg)` 
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
              Lemcorian is a diversified multidivision conglomerate with operations across Agricultural Products, Chemicals, and Medical Equipment & Instruments. We prioritize clarity, structure, and value across all our business sectors.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:pl-0 lg:pl-4 space-y-4 md:space-y-0">
            <h4 className="font-serif text-lg md:text-xl font-bold mb-4 md:mb-6 text-primary-foreground">QUICK LINKS</h4>
            <ul className="space-y-3 text-sm md:text-base">
              <li>
                <Link 
                  to="/" 
                  className="text-primary-foreground/80 hover:text-primary-foreground hover:underline transition-all duration-200 cursor-pointer leading-relaxed block"
                  aria-label="Navigate to homepage"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-primary-foreground/80 hover:text-primary-foreground hover:underline transition-all duration-200 cursor-pointer leading-relaxed block"
                  aria-label="Navigate to about page"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/divisions" 
                  className="text-primary-foreground/80 hover:text-primary-foreground hover:underline transition-all duration-200 cursor-pointer leading-relaxed block"
                  aria-label="Navigate to divisions page"
                >
                  Divisions
                </Link>
              </li>
              <li>
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
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Divisions */}
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
              </li>
            </ul>
          </div>

          {/* Corporate Office */}
          <div className="md:pl-0 lg:pl-4 space-y-4 md:space-y-0">
            <h4 className="font-serif text-lg md:text-xl font-bold mb-4 md:mb-6 text-primary-foreground">CORPORATE OFFICE</h4>
            <div className="space-y-3 text-sm md:text-base text-primary-foreground/80 leading-relaxed">
              <p className="font-semibold text-primary-foreground">Lemcorian Headquarters</p>
              <p>123 Global Trade Center<br />International Business District<br />Floor 45, Tower A</p>
              <p>Email: <a href="mailto:contact@lemcorian.com" className="hover:text-primary-foreground hover:underline transition-all duration-200">contact@lemcorian.com</a></p>
              <p>Phone: <a href="tel:+15551234567" className="hover:text-primary-foreground hover:underline transition-all duration-200">+1 (555) 123-4567</a></p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-primary-foreground/20 pt-8 pb-6">
          <p className="text-xs md:text-sm text-primary-foreground/60 text-center max-w-4xl mx-auto leading-relaxed">
            <span className="font-semibold">DISCLAIMER:</span> This website provides an overview of the Lemcorian Group and its business divisions. All information is strictly for corporate communication purposes.
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-sm md:text-base text-primary-foreground/60 leading-relaxed">
            &copy; {new Date().getFullYear()} Lemcorian Group. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
