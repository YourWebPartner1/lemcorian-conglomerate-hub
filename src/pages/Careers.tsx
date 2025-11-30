import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import careersBackground from "@/assets/careers-background.jpg";

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="py-24 md:py-32 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${careersBackground})` }}
        >
          <div className="absolute inset-0 bg-primary/85"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">
              Build Your Future with Lemcorian
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl text-primary-foreground/90 leading-relaxed">
              Join a diversified conglomerate committed to growth, structure, and excellence. At Lemcorian, we offer opportunities across multiple divisions with clear pathways for professional development and career advancement.
            </p>
          </div>
        </section>

      {/* Why Work With Us */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-16 text-foreground">
              Why Work With Us
            </h2>
            <div className="max-w-5xl">
              <ul className="space-y-6 text-lg">
                <li className="border-l-4 border-primary pl-8 py-4 bg-card rounded-r-lg shadow-sm hover:shadow-md transition-all duration-300">
                  Opportunities across multiple business divisions and sectors
                </li>
                <li className="border-l-4 border-primary pl-8 py-4 bg-card rounded-r-lg shadow-sm hover:shadow-md transition-all duration-300">
                  Structured career development and professional growth programs
                </li>
                <li className="border-l-4 border-primary pl-8 py-4 bg-card rounded-r-lg shadow-sm hover:shadow-md transition-all duration-300">
                  Work with a globally-focused conglomerate with clear strategic direction
                </li>
                <li className="border-l-4 border-primary pl-8 py-4 bg-card rounded-r-lg shadow-sm hover:shadow-md transition-all duration-300">
                  Commitment to operational excellence and corporate integrity
                </li>
                <li className="border-l-4 border-primary pl-8 py-4 bg-card rounded-r-lg shadow-sm hover:shadow-md transition-all duration-300">
                  Competitive compensation and comprehensive benefits
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Current Openings */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-16 text-foreground">
              Current Openings
            </h2>
            <div className="max-w-5xl space-y-6">
              <div className="bg-card border border-border p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  Agricultural Products Division
                </h3>
                <p className="text-muted-foreground text-lg">
                  Supply Chain Manager, Quality Control Specialist, Operations Coordinator
                </p>
              </div>

              <div className="bg-card border border-border p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  Chemicals Division
                </h3>
                <p className="text-muted-foreground text-lg">
                  Chemical Engineer, Production Supervisor, Safety Compliance Officer
                </p>
              </div>

              <div className="bg-card border border-border p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  Medical Equipment & Instruments Division
                </h3>
                <p className="text-muted-foreground text-lg">
                  Manufacturing Specialist, Quality Assurance Manager, Distribution Coordinator
                </p>
              </div>

              <div className="bg-card border border-border p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  Corporate Headquarters
                </h3>
                <p className="text-muted-foreground text-lg">
                  Financial Analyst, HR Manager, Legal Advisor
                </p>
              </div>
            </div>

            <div className="mt-12 max-w-5xl">
              <p className="text-xl text-foreground text-center">
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
