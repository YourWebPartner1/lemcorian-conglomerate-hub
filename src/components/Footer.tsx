import { Link } from "react-router-dom";
import footerBackground from "@/assets/footer-background.jpg";

const Footer = () => {
  return (
    <footer 
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
              Lemcorian is a diversified multidivision conglomerate with operations across Agricultural Products, Chemicals, and Medical Equipment & Instruments. We prioritize clarity, structure, and value across all our business sectors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4 text-primary-foreground">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/divisions" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Divisions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Divisions */}
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
              </li>
            </ul>
          </div>

          {/* Corporate Office */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4 text-primary-foreground">CORPORATE OFFICE</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p className="font-semibold text-primary-foreground">Lemcorian Headquarters</p>
              <p>Email: contact@lemcorian.com</p>
              <p>Phone: +91 XXXXXXXXXX</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-primary-foreground/20 pt-6 pb-6">
          <p className="text-xs text-primary-foreground/60 text-center max-w-4xl mx-auto">
            <span className="font-semibold">DISCLAIMER:</span> This website provides an overview of the Lemcorian Group and its business divisions. All information is strictly for corporate communication purposes.
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2025 Lemcorian Group. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
