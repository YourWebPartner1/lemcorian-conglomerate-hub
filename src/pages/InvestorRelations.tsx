import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import investorBackground from "@/assets/investor-background.jpg";
import { TrendingUp, DollarSign, Globe2 } from "lucide-react";

const InvestorRelations = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title="Investor Relations"
        description="Transparent communication and sustainable value creation for Lemcorian stakeholders. Access corporate statistics, financial reports, and investor information for our diversified multidivision conglomerate."
        keywords="Lemcorian investor relations, financial reports, corporate statistics, investor information, annual reports, quarterly earnings, corporate governance, investment"
        image="/investor-background.jpg"
        url="/investors"
      />
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="pt-10 md:pt-20 lg:pt-28 pb-12 md:pb-20 bg-cover bg-center relative"
          style={{ backgroundImage: `linear-gradient(to bottom, rgba(10, 26, 63, 0.88), rgba(10, 26, 63, 0.82)), url(${investorBackground})` }}
        >
          <div className="absolute inset-0 bg-primary/90"></div>
          <div className="container mx-auto px-4 relative z-10" data-aos="fade-up">
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-primary-foreground">
              Investor Relations
            </h1>
            <p className="text-base md:text-xl lg:text-2xl max-w-3xl text-primary-foreground/90 leading-relaxed">
              Transparent communication and sustainable value creation for our stakeholders.
            </p>
          </div>
        </section>

        {/* Corporate Statistics */}
        <section className="py-10 md:py-14 lg:py-20 bg-muted/30" data-aos="fade-up">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="text-center mb-12 md:mb-16 lg:mb-20">
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 md:mb-6" data-aos="fade-down">
                Corporate Statistics
              </h2>
              <div className="w-32 h-1 bg-primary mx-auto mb-6 md:mb-8"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
              <div className="text-center p-6 md:p-10 bg-card border border-border rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="0">
                <Globe2 className="h-10 w-10 md:h-14 md:w-14 text-primary mx-auto mb-4" />
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">25+</div>
                <p className="text-lg md:text-xl text-muted-foreground">Countries</p>
                <p className="text-xs md:text-sm text-muted-foreground/80 mt-2">Active global operations</p>
              </div>

              <div className="text-center p-6 md:p-10 bg-card border border-border rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="100">
                <TrendingUp className="h-10 w-10 md:h-14 md:w-14 text-primary mx-auto mb-4" />
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">3</div>
                <p className="text-lg md:text-xl text-muted-foreground">Major Divisions</p>
                <p className="text-xs md:text-sm text-muted-foreground/80 mt-2">Diversified portfolio</p>
              </div>

              <div className="text-center p-6 md:p-10 bg-card border border-border rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="200">
                <DollarSign className="h-10 w-10 md:h-14 md:w-14 text-primary mx-auto mb-4" />
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">Multi</div>
                <p className="text-lg md:text-xl text-muted-foreground">Market Sectors</p>
                <p className="text-xs md:text-sm text-muted-foreground/80 mt-2">Agricultural, Chemical, Medical</p>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="border-t-2 border-border"></div>
        </div>

        {/* Corporate Values for Investors */}
        <section className="py-10 md:py-14 lg:py-20" data-aos="fade-up">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="text-center mb-12 md:mb-16 lg:mb-20">
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 text-foreground" data-aos="fade-down">
                Corporate Values for Investors
              </h2>
              <div className="w-32 h-1 bg-primary mx-auto mb-6 md:mb-8"></div>
            </div>
            <div className="max-w-5xl mx-auto">
              <ul className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed">
                <li className="border-l-4 border-primary pl-6 md:pl-8 py-4 md:py-6 bg-card rounded-r-lg shadow-sm">
                  <span className="font-semibold text-foreground text-lg md:text-xl block mb-2">Diversification</span>
                  <span className="text-muted-foreground">Operations across agricultural, chemical, and medical sectors reduce risk and enhance stability.</span>
                </li>
                <li className="border-l-4 border-primary pl-6 md:pl-8 py-4 md:py-6 bg-card rounded-r-lg shadow-sm">
                  <span className="font-semibold text-foreground text-lg md:text-xl block mb-2">Operational Excellence</span>
                  <span className="text-muted-foreground">Structured management and clear accountability across all divisions.</span>
                </li>
                <li className="border-l-4 border-primary pl-6 md:pl-8 py-4 md:py-6 bg-card rounded-r-lg shadow-sm">
                  <span className="font-semibold text-foreground text-lg md:text-xl block mb-2">Strategic Growth</span>
                  <span className="text-muted-foreground">Focused expansion aligned with market demands and long-term objectives.</span>
                </li>
                <li className="border-l-4 border-primary pl-6 md:pl-8 py-4 md:py-6 bg-card rounded-r-lg shadow-sm">
                  <span className="font-semibold text-foreground text-lg md:text-xl block mb-2">Transparency</span>
                  <span className="text-muted-foreground">Regular financial disclosures and adherence to corporate governance standards.</span>
                </li>
                <li className="border-l-4 border-primary pl-6 md:pl-8 py-4 md:py-6 bg-card rounded-r-lg shadow-sm">
                  <span className="font-semibold text-foreground text-lg md:text-xl block mb-2">Compliance</span>
                  <span className="text-muted-foreground">Strict regulatory compliance and commitment to ethical business practices.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="border-t-2 border-border"></div>
        </div>

        {/* Reports & Disclosures */}
        <section className="py-10 md:py-14 lg:py-20 bg-muted/30" data-aos="fade-up">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="text-center mb-12 md:mb-16 lg:mb-20">
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 text-foreground" data-aos="fade-down">
                Reports & Disclosures
              </h2>
              <div className="w-32 h-1 bg-primary mx-auto mb-6 md:mb-8"></div>
            </div>
            <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
              <div className="bg-card border border-border p-6 md:p-8 rounded-lg shadow-sm">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-3">
                  Annual Financial Reports
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Comprehensive annual reports detailing financial performance, operational highlights, and strategic initiatives across all divisions.
                </p>
              </div>

              <div className="bg-card border border-border p-6 md:p-8 rounded-lg shadow-sm">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-3">
                  Quarterly Earnings Statements
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Regular updates on quarterly performance, revenue streams, and key operational metrics.
                </p>
              </div>

              <div className="bg-card border border-border p-6 md:p-8 rounded-lg shadow-sm">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-3">
                  Corporate Governance Reports
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Documentation of governance practices, board composition, and compliance with regulatory standards.
                </p>
              </div>

              <div className="bg-card border border-border p-6 md:p-8 rounded-lg shadow-sm">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-3">
                  Investor Presentations
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Strategic presentations outlining business direction, growth plans, and market opportunities.
                </p>
              </div>

              <div className="mt-8 md:mt-10 p-6 md:p-8 bg-primary/5 border-2 border-primary/20 rounded-lg">
                <p className="text-foreground text-base md:text-lg text-center leading-relaxed">
                  For access to detailed reports and investor inquiries, please contact our Investor Relations department at <span className="font-semibold text-primary">investors@lemcorian.com</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InvestorRelations;
