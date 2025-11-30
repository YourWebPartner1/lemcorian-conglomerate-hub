import { Link } from "react-router-dom";
import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/company/lemcorian", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/lemcorian", label: "Twitter" },
    { icon: Facebook, href: "https://facebook.com/lemcorian", label: "Facebook" },
  ];

  return (
    <footer 
      className="relative border-t border-primary/30 mt-0 bg-cover bg-center"
      style={{ 
        backgroundImage: `linear-gradient(135deg, rgba(10, 26, 63, 0.95) 0%, rgba(10, 26, 63, 0.90) 50%, rgba(10, 26, 63, 0.88) 100%), url(/global-reach.jpg)` 
      }}
      data-aos="fade-up"
    >
      {/* Subtle Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMCAyMCBMIDQwIDIwIE0gMjAgMCBMIDIwIDQwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')`
        }}
      ></div>
      
      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/98 via-primary/95 to-primary/92"></div>
      
      <div className="container mx-auto px-4 md:px-8 lg:px-12 pt-16 pb-12 md:pt-20 md:pb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-16 mb-12 md:mb-16">
          {/* Company Overview */}
          <motion.div 
            className="md:pl-0 lg:pl-4 space-y-5"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <h3 className="font-serif text-xl md:text-2xl font-bold mb-6 text-primary-foreground tracking-tight">COMPANY OVERVIEW</h3>
            <p className="text-sm md:text-base text-primary-foreground/85 leading-relaxed spacing-refined">
              Lemcorian is a diversified multidivision conglomerate with operations across Agricultural Products, Chemicals, and Medical Equipment & Instruments. We prioritize clarity, structure, and value across all our business sectors.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                    aria-label={social.label}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="md:pl-0 lg:pl-4 space-y-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h4 className="font-serif text-xl md:text-2xl font-bold mb-6 text-primary-foreground tracking-tight">QUICK LINKS</h4>
            <ul className="space-y-3.5 text-sm md:text-base">
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
          </motion.div>

          {/* Our Divisions */}
          <motion.div 
            className="md:pl-0 lg:pl-4 space-y-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h4 className="font-serif text-xl md:text-2xl font-bold mb-6 text-primary-foreground tracking-tight">OUR DIVISIONS</h4>
            <ul className="space-y-5 text-sm md:text-base text-primary-foreground/85 leading-relaxed">
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
          </motion.div>

          {/* Corporate Office */}
          <motion.div 
            className="md:pl-0 lg:pl-4 space-y-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h4 className="font-serif text-xl md:text-2xl font-bold mb-6 text-primary-foreground tracking-tight">CORPORATE OFFICE</h4>
            <div className="space-y-4 text-sm md:text-base text-primary-foreground/85 leading-relaxed">
              <p className="font-semibold text-primary-foreground text-base">Lemcorian Headquarters</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary-foreground/70 mt-0.5 flex-shrink-0" />
                  <p>123 Global Trade Center<br />International Business District<br />Floor 45, Tower A</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary-foreground/70 flex-shrink-0" />
                  <a href="mailto:contact@lemcorian.com" className="hover:text-primary-foreground hover:underline transition-all duration-200">contact@lemcorian.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary-foreground/70 flex-shrink-0" />
                  <a href="tel:+15551234567" className="hover:text-primary-foreground hover:underline transition-all duration-200">+1 (555) 123-4567</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.div 
          className="border-t border-primary-foreground/20 pt-10 pb-8"
          data-aos="fade-up"
        >
          <p className="text-xs md:text-sm text-primary-foreground/65 text-center max-w-4xl mx-auto leading-relaxed spacing-refined">
            <span className="font-semibold text-primary-foreground/80">DISCLAIMER:</span> This website provides an overview of the Lemcorian Group and its business divisions. All information is strictly for corporate communication purposes.
          </p>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="border-t border-primary-foreground/20 pt-8 pb-6 text-center"
          data-aos="fade-up"
        >
          <p className="text-sm md:text-base text-primary-foreground/70 leading-relaxed spacing-refined">
            &copy; {new Date().getFullYear()} Lemcorian Group. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
