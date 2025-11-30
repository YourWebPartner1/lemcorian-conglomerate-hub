import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import investorBackground from "@/assets/investor-background.jpg";
import { TrendingUp, DollarSign, Globe2 } from "lucide-react";

const InvestorRelations = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="py-24 md:py-32 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${investorBackground})` }}
        >
          <div className="absolute inset-0 bg-primary/90"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">
              Investor Relations
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl text-primary-foreground/90 leading-relaxed">
              Transparent communication and sustainable value creation for our stakeholders.
            </p>
          </div>
        </section>

        {/* Corporate Statistics */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
                Corporate Statistics
              </h2>
              <div className="w-32 h-1 bg-primary mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              <div className="text-center p-10 bg-card border border-border rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Globe2 className="h-14 w-14 text-primary mx-auto mb-4" />
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-3">25+</div>
                <p className="text-xl text-muted-foreground">Countries</p>
                <p className="text-sm text-muted-foreground/80 mt-2">Active global operations</p>
              </div>

              <div className="text-center p-10 bg-card border border-border rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
                <TrendingUp className="h-14 w-14 text-primary mx-auto mb-4" />
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-3">3</div>
                <p className="text-xl text-muted-foreground">Major Divisions</p>
                <p className="text-sm text-muted-foreground/80 mt-2">Diversified portfolio</p>
              </div>

              <div className="text-center p-10 bg-card border border-border rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
                <DollarSign className="h-14 w-14 text-primary mx-auto mb-4" />
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-3">Multi</div>
                <p className="text-xl text-muted-foreground">Market Sectors</p>
                <p className="text-sm text-muted-foreground/80 mt-2">Agricultural, Chemical, Medical</p>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="border-t-2 border-border"></div>
        </div>

        {/* Corporate Values for Investors */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-16 text-foreground text-center">
              Corporate Values for Investors
            </h2>
            <div className="max-w-5xl mx-auto">
              <ul className="space-y-6 text-lg">
                <li className="border-l-4 border-primary pl-8 py-4 bg-card rounded-r-lg shadow-sm">
                  <span className="font-semibold text-foreground text-xl block mb-2">Diversification</span>
                  <span className="text-muted-foreground">Operations across agricultural, chemical, and medical sectors reduce risk and enhance stability.</span>
                </li>
                <li className="border-l-4 border-primary pl-8 py-4 bg-card rounded-r-lg shadow-sm">
                  <span className="font-semibold text-foreground text-xl block mb-2">Operational Excellence</span>
                  <span className="text-muted-foreground">Structured management and clear accountability across all divisions.</span>
                </li>
                <li className="border-l-4 border-primary pl-8 py-4 bg-card rounded-r-lg shadow-sm">
                  <span className="font-semibold text-foreground text-xl block mb-2">Strategic Growth</span>
                  <span className="text-muted-foreground">Focused expansion aligned with market demands and long-term objectives.</span>
                </li>
                <li className="border-l-4 border-primary pl-8 py-4 bg-card rounded-r-lg shadow-sm">
                  <span className="font-semibold text-foreground text-xl block mb-2">Transparency</span>
                  <span className="text-muted-foreground">Regular financial disclosures and adherence to corporate governance standards.</span>
                </li>
                <li className="border-l-4 border-primary pl-8 py-4 bg-card rounded-r-lg shadow-sm">
                  <span className="font-semibold text-foreground text-xl block mb-2">Compliance</span>
                  <span className="text-muted-foreground">Strict regulatory compliance and commitment to ethical business practices.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="border-t-2 border-border"></div>
        </div>

        {/* Reports & Disclosures */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-16 text-foreground text-center">
              Reports & Disclosures
            </h2>
            <div className="max-w-5xl mx-auto space-y-6">
              <div className="bg-card border border-border p-8 rounded-lg shadow-sm">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  Annual Financial Reports
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Comprehensive annual reports detailing financial performance, operational highlights, and strategic initiatives across all divisions.
                </p>
              </div>

              <div className="bg-card border border-border p-8 rounded-lg shadow-sm">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  Quarterly Earnings Statements
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Regular updates on quarterly performance, revenue streams, and key operational metrics.
                </p>
              </div>

              <div className="bg-card border border-border p-8 rounded-lg shadow-sm">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  Corporate Governance Reports
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Documentation of governance practices, board composition, and compliance with regulatory standards.
                </p>
              </div>

              <div className="bg-card border border-border p-8 rounded-lg shadow-sm">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  Investor Presentations
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Strategic presentations outlining business direction, growth plans, and market opportunities.
                </p>
              </div>

              <div className="mt-10 p-8 bg-primary/5 border-2 border-primary/20 rounded-lg">
                <p className="text-foreground text-lg text-center">
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
