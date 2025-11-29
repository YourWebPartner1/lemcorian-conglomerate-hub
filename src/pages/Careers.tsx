import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Build Your Future with Lemcorian
            </h1>
            <p className="text-lg md:text-xl max-w-3xl text-primary-foreground/90">
              Join a diversified conglomerate committed to growth, structure, and excellence. At Lemcorian, we offer opportunities across multiple divisions with clear pathways for professional development and career advancement.
            </p>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-foreground">
              Why Work With Us
            </h2>
            <div className="max-w-4xl">
              <ul className="space-y-4 text-lg text-muted-foreground">
                <li className="border-l-4 border-primary pl-6 py-2">
                  Opportunities across multiple business divisions and sectors
                </li>
                <li className="border-l-4 border-primary pl-6 py-2">
                  Structured career development and professional growth programs
                </li>
                <li className="border-l-4 border-primary pl-6 py-2">
                  Work with a globally-focused conglomerate with clear strategic direction
                </li>
                <li className="border-l-4 border-primary pl-6 py-2">
                  Commitment to operational excellence and corporate integrity
                </li>
                <li className="border-l-4 border-primary pl-6 py-2">
                  Competitive compensation and comprehensive benefits
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Current Openings */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-foreground">
              Current Openings
            </h2>
            <div className="max-w-4xl space-y-6">
              <div className="bg-background border border-border p-6 rounded-sm">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  Agricultural Products Division
                </h3>
                <p className="text-muted-foreground">
                  Supply Chain Manager, Quality Control Specialist, Operations Coordinator
                </p>
              </div>

              <div className="bg-background border border-border p-6 rounded-sm">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  Chemicals Division
                </h3>
                <p className="text-muted-foreground">
                  Chemical Engineer, Production Supervisor, Safety Compliance Officer
                </p>
              </div>

              <div className="bg-background border border-border p-6 rounded-sm">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  Medical Equipment & Instruments Division
                </h3>
                <p className="text-muted-foreground">
                  Manufacturing Specialist, Quality Assurance Manager, Distribution Coordinator
                </p>
              </div>

              <div className="bg-background border border-border p-6 rounded-sm">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  Corporate Headquarters
                </h3>
                <p className="text-muted-foreground">
                  Financial Analyst, HR Manager, Legal Advisor
                </p>
              </div>
            </div>

            <div className="mt-12 max-w-4xl">
              <p className="text-lg text-foreground mb-4">
                To apply, please submit your details through our <Link to="/contact" className="text-primary hover:underline font-semibold">contact form</Link>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
