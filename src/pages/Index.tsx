import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBackgroundPremium from "@/assets/hero-background-premium.jpg";
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
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(10, 26, 63, 0.85), rgba(10, 26, 63, 0.4)), url(${heroBackgroundPremium})` 
        }}
      >
        <div className="container mx-auto px-4 text-center py-32">
          <h1 className="text-6xl md:text-8xl font-bold text-white font-serif mb-8 tracking-[0.15em]">
            LEMCORIAN
          </h1>
          <p className="text-2xl md:text-3xl text-white/95 mb-6 max-w-3xl mx-auto tracking-wide font-light">
            A Global Multidivision Conglomerate
          </p>
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto tracking-wide">
            Operating across Agriculture, Chemicals, and Medical Equipment & Instruments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/divisions">
              <Button 
                size="lg" 
                className="bg-white text-[#0A1A3F] hover:bg-white/90 font-semibold px-8 py-6 text-base shadow-lg"
              >
                Explore Our Divisions
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-base"
              >
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-28 md:py-32 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Global Multidivision Conglomerate
            </h2>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-4xl mx-auto">
              Lemcorian is a diversified conglomerate operating across agriculture, chemicals, and medical equipment. 
              Our structure reflects clarity, expansion, and strategic leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Division Overview Section */}
      <section className="py-28 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Corporate Division Overview
            </h2>
            <div className="w-32 h-1 bg-primary mx-auto"></div>
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
      <section className="py-28 md:py-32 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose LEMCORIAN
            </h2>
            <div className="w-32 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="flex items-start gap-6 p-6 rounded-lg bg-card border border-border hover:shadow-md transition-shadow">
              <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground text-xl mb-3">Global Presence</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Operating across multiple continents with established supply chains and distribution networks worldwide.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 rounded-lg bg-card border border-border hover:shadow-md transition-shadow">
              <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground text-xl mb-3">Quality Assurance</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Rigorous quality control measures and international certifications across all product lines.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 rounded-lg bg-card border border-border hover:shadow-md transition-shadow">
              <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground text-xl mb-3">Diverse Portfolio</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Three specialized divisions serving agricultural, chemical, and medical sectors with expertise.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 rounded-lg bg-card border border-border hover:shadow-md transition-shadow">
              <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground text-xl mb-3">Sustainable Practices</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Commitment to environmental responsibility and ethical business practices in all operations.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 rounded-lg bg-card border border-border hover:shadow-md transition-shadow">
              <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground text-xl mb-3">Industry Expertise</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Decades of combined experience with specialized knowledge in each operational sector.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-6 rounded-lg bg-card border border-border hover:shadow-md transition-shadow">
              <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground text-xl mb-3">Reliable Partnership</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
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
