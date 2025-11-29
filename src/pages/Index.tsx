import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";
import agriculturalProducts from "@/assets/agricultural-products.jpg";
import chemicals from "@/assets/chemicals.jpg";
import medicalEquipment from "@/assets/medical-equipment.jpg";
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

      {/* Corporate Division Overview Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif mb-4">
              Corporate Division Overview
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Agricultural Products Card */}
            <div className="bg-card border border-border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <div className="overflow-hidden h-56">
                <img 
                  src={agriculturalProducts} 
                  alt="Agricultural Products" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Agricultural Products
                </h3>
                <ul className="space-y-3 text-lg text-muted-foreground flex-1">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Coffee</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Vegetables</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Chemicals Card */}
            <div className="bg-card border border-border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <div className="overflow-hidden h-56">
                <img 
                  src={chemicals} 
                  alt="Chemicals Division" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Chemicals
                </h3>
                <ul className="space-y-3 text-lg text-muted-foreground flex-1">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Industrial</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Pharmaceutical</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Medical Equipment Card */}
            <div className="bg-card border border-border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <div className="overflow-hidden h-56">
                <img 
                  src={medicalEquipment} 
                  alt="Medical Equipment & Instruments" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Medical Equipment & Instruments
                </h3>
                <ul className="space-y-3 text-lg text-muted-foreground flex-1">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Syringes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Gloves</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Masks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>etc.</span>
                  </li>
                </ul>
              </div>
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
