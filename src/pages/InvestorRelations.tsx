import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const InvestorRelations = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Investor Relations
            </h1>
            <p className="text-lg md:text-xl max-w-3xl text-primary-foreground/90">
              Lemcorian Group is committed to transparency, structured growth, and sustainable value creation. We maintain clear communication with our stakeholders and uphold the highest standards of corporate governance.
            </p>
          </div>
        </section>

        {/* Corporate Values for Investors */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-foreground">
              Corporate Values for Investors
            </h2>
            <div className="max-w-4xl">
              <ul className="space-y-4 text-lg text-muted-foreground">
                <li className="border-l-4 border-primary pl-6 py-2">
                  <span className="font-semibold text-foreground">Diversification:</span> Operations across agricultural, chemical, and medical sectors reduce risk and enhance stability.
                </li>
                <li className="border-l-4 border-primary pl-6 py-2">
                  <span className="font-semibold text-foreground">Operational Excellence:</span> Structured management and clear accountability across all divisions.
                </li>
                <li className="border-l-4 border-primary pl-6 py-2">
                  <span className="font-semibold text-foreground">Strategic Growth:</span> Focused expansion aligned with market demands and long-term objectives.
                </li>
                <li className="border-l-4 border-primary pl-6 py-2">
                  <span className="font-semibold text-foreground">Transparency:</span> Regular financial disclosures and adherence to corporate governance standards.
                </li>
                <li className="border-l-4 border-primary pl-6 py-2">
                  <span className="font-semibold text-foreground">Compliance:</span> Strict regulatory compliance and commitment to ethical business practices.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Reports & Disclosures */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-foreground">
              Reports & Disclosures
            </h2>
            <div className="max-w-4xl space-y-6">
              <div className="bg-background border border-border p-6 rounded-sm">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  Annual Financial Reports
                </h3>
                <p className="text-muted-foreground">
                  Comprehensive annual reports detailing financial performance, operational highlights, and strategic initiatives across all divisions.
                </p>
              </div>

              <div className="bg-background border border-border p-6 rounded-sm">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  Quarterly Earnings Statements
                </h3>
                <p className="text-muted-foreground">
                  Regular updates on quarterly performance, revenue streams, and key operational metrics.
                </p>
              </div>

              <div className="bg-background border border-border p-6 rounded-sm">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  Corporate Governance Reports
                </h3>
                <p className="text-muted-foreground">
                  Documentation of governance practices, board composition, and compliance with regulatory standards.
                </p>
              </div>

              <div className="bg-background border border-border p-6 rounded-sm">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  Investor Presentations
                </h3>
                <p className="text-muted-foreground">
                  Strategic presentations outlining business direction, growth plans, and market opportunities.
                </p>
              </div>

              <div className="mt-8 p-6 bg-muted/50 border border-border rounded-sm">
                <p className="text-foreground">
                  For access to detailed reports and investor inquiries, please contact our Investor Relations department at <span className="font-semibold">investors@lemcorian.com</span>
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
