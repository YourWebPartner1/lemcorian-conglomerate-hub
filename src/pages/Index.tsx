import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";
import { CheckCircle2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBackground})` }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white font-serif mb-6">
            LEMCORIAN
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            A Global Multidivision Conglomerate
          </p>
          <Link to="/divisions">
            <Button size="lg" variant="secondary" className="font-semibold">
              Explore Our Divisions
            </Button>
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif">
              Global Multidivision Conglomerate
            </h2>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed max-w-4xl mx-auto">
              Lemcorian is a diversified conglomerate operating across agriculture, chemicals, and medical equipment. 
              Our structure reflects clarity, expansion, and strategic leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Flowchart Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif mb-3">
              Corporate Division Flowchart
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-card border-2 border-border p-10 md:p-16 rounded-sm shadow-sm">
              <pre className="font-mono text-base md:text-lg text-foreground leading-loose overflow-x-auto">
{`LEMCORIAN
│
├── Agricultural Products
│      ├── Coffee
│      └── Vegetables
│
├── Chemicals
│      ├── Industrial
│      └── Pharmaceutical
│
└── Medical Equipment & Instruments
       ├── Syringes
       ├── Gloves
       ├── Masks
       └── etc.`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Lemcorian Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif mb-3">
              Why Choose LEMCORIAN
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Global Presence</h3>
                <p className="text-foreground/70">
                  Operating across multiple continents with established supply chains and distribution networks worldwide.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Quality Assurance</h3>
                <p className="text-foreground/70">
                  Rigorous quality control measures and international certifications across all product lines.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Diverse Portfolio</h3>
                <p className="text-foreground/70">
                  Three specialized divisions serving agricultural, chemical, and medical sectors with expertise.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Sustainable Practices</h3>
                <p className="text-foreground/70">
                  Commitment to environmental responsibility and ethical business practices in all operations.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Industry Expertise</h3>
                <p className="text-foreground/70">
                  Decades of combined experience with specialized knowledge in each operational sector.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Reliable Partnership</h3>
                <p className="text-foreground/70">
                  Proven track record of delivering consistent quality and maintaining long-term business relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
