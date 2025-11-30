import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Globe2, TrendingUp, Award } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO
        title="Lemcorian – Global Multidivision Conglomerate"
        description="Lemcorian is a global conglomerate operating across agricultural products, chemicals, and medical equipment. Discover our diversified business divisions and global operations."
        keywords="Lemcorian, conglomerate, agriculture, chemicals, medical equipment, corporate, global enterprise, agricultural products, coffee, vegetables, industrial chemicals, pharmaceutical, medical supplies"
        image={`${import.meta.env.BASE_URL}/hero-background-premium.jpg`}
        url={`${import.meta.env.BASE_URL}`}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat pt-10 md:pt-20 lg:pt-28"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(10, 26, 63, 0.85), rgba(10, 26, 63, 0.4)), url(${import.meta.env.BASE_URL}/hero-background-premium.jpg)` 
        }}
      >
        <div className="container mx-auto px-4 text-center py-12 md:py-20" data-aos="fade-up">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white font-serif mb-4 md:mb-6 lg:mb-8 tracking-tight sm:tracking-[0.15em]">
            Lemcorian – Global Multidivision Conglomerate
          </h1>
          <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-white/95 mb-3 md:mb-4 lg:mb-6 max-w-3xl mx-auto tracking-wide font-light px-2">
            A Global Multidivision Conglomerate
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 mb-6 md:mb-8 lg:mb-12 max-w-3xl mx-auto tracking-wide px-2">
            Operating across Agriculture, Chemicals, and Medical Equipment & Instruments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/divisions" className="cursor-pointer">
              <Button 
                size="lg" 
                className="bg-white text-[#0A1A3F] hover:bg-white/90 font-semibold px-6 md:px-8 py-4 md:py-6 text-sm md:text-base shadow-lg cursor-pointer transition-all duration-300 rounded-md"
                aria-label="Explore Lemcorian divisions"
              >
                Explore Our Divisions
              </Button>
            </Link>
            <Link to="/about" className="cursor-pointer">
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-6 md:px-8 py-4 md:py-6 text-sm md:text-base cursor-pointer transition-all duration-300 rounded-md"
                aria-label="Learn more about Lemcorian"
              >
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-10 md:py-14 lg:py-20 bg-background" data-aos="fade-up">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center space-y-6 md:space-y-8">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 md:mb-6" data-aos="fade-down">
              Global Multidivision Conglomerate
            </h2>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-foreground/80 leading-relaxed max-w-4xl mx-auto">
              Lemcorian is a diversified conglomerate operating across agriculture, chemicals, and medical equipment. 
              Our structure reflects clarity, expansion, and strategic leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Division Overview Section */}
      <section className="py-10 md:py-14 lg:py-20 bg-muted/30" data-aos="fade-up">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 md:mb-6" data-aos="fade-down">
              Corporate Division Overview
            </h2>
            <div className="w-32 h-1 bg-primary mx-auto mb-6 md:mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {/* Agricultural Products Card */}
            <div className="bg-card border border-border rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden" data-aos="zoom-in">
              <div className="w-full h-[220px] overflow-hidden">
                <img 
                  src={`${import.meta.env.BASE_URL}/agricultural-products.jpg`} 
                  alt="Coffee beans and fresh produce from Lemcorian Agricultural Products division" 
                  className="w-full h-full object-cover max-w-full"
                  loading="lazy"
                  style={{ maxWidth: "100%" }}
                  fetchPriority="low"
                  decoding="async"
                />
              </div>
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">
                  Agricultural Products
                </h3>
                <ul className="space-y-2 md:space-y-3 text-base md:text-lg text-muted-foreground flex-1 leading-relaxed">
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
            <div className="bg-card border border-border rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden" data-aos="zoom-in" data-aos-delay="100">
              <div className="w-full h-[220px] overflow-hidden">
                <img 
                  src={`${import.meta.env.BASE_URL}/chemicals.jpg`} 
                  alt="Industrial laboratory and chemical plant operations at Lemcorian Chemicals division" 
                  className="w-full h-full object-cover max-w-full"
                  loading="lazy"
                  style={{ maxWidth: "100%" }}
                  fetchPriority="low"
                  decoding="async"
                />
              </div>
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">
                  Chemicals
                </h3>
                <ul className="space-y-2 md:space-y-3 text-base md:text-lg text-muted-foreground flex-1 leading-relaxed">
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
            <div className="bg-card border border-border rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden" data-aos="zoom-in" data-aos-delay="200">
              <div className="w-full h-[220px] overflow-hidden">
                <img 
                  src={`${import.meta.env.BASE_URL}/medical-equipment.jpg`} 
                  alt="Medical equipment including syringes, gloves, and medical tools from Lemcorian Medical Equipment division" 
                  className="w-full h-full object-cover max-w-full"
                  loading="lazy"
                  style={{ maxWidth: "100%" }}
                  fetchPriority="low"
                  decoding="async"
                />
              </div>
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">
                  Medical Equipment & Instruments
                </h3>
                <ul className="space-y-2 md:space-y-3 text-base md:text-lg text-muted-foreground flex-1 leading-relaxed">
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

      {/* Global Reach Section */}
      <section 
        className="py-10 md:py-14 lg:py-20 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}/global-reach.jpg)` }}
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-primary/90"></div>
        <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-foreground mb-4 md:mb-6" data-aos="fade-down">
              Global Reach
            </h2>
            <div className="w-32 h-1 bg-primary-foreground mx-auto mb-6 md:mb-8"></div>
            <p className="text-base md:text-lg lg:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Operations across key international markets with established presence in multiple continents. 
              Delivering excellence through strategic partnerships and regional expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
            <div className="text-center p-6 md:p-8 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <Globe2 className="h-10 w-10 md:h-12 md:w-12 text-primary-foreground mx-auto mb-4" />
              <h3 className="font-semibold text-primary-foreground text-xl md:text-2xl mb-3">25+ Countries</h3>
              <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed">
                Active operations across key global markets
              </p>
            </div>

            <div className="text-center p-6 md:p-8 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <TrendingUp className="h-10 w-10 md:h-12 md:w-12 text-primary-foreground mx-auto mb-4" />
              <h3 className="font-semibold text-primary-foreground text-xl md:text-2xl mb-3">Sustainable Growth</h3>
              <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed">
                Consistent expansion across all divisions
              </p>
            </div>

            <div className="text-center p-6 md:p-8 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <Award className="h-10 w-10 md:h-12 md:w-12 text-primary-foreground mx-auto mb-4" />
              <h3 className="font-semibold text-primary-foreground text-xl md:text-2xl mb-3">Industry Leadership</h3>
              <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed">
                Recognized excellence in quality and service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Lemcorian Section */}
      <section className="py-10 md:py-14 lg:py-20 bg-background" data-aos="fade-up">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 md:mb-6" data-aos="fade-down">
              Why Choose LEMCORIAN
            </h2>
            <div className="w-32 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            <div className="flex items-start gap-4 md:gap-6 p-6 md:p-8 rounded-lg bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300">
              <CheckCircle2 className="h-6 w-6 md:h-8 md:w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground text-lg md:text-xl mb-3">Global Presence</h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  Operating across multiple continents with established supply chains and distribution networks worldwide.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 md:gap-6 p-6 md:p-8 rounded-lg bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300">
              <CheckCircle2 className="h-6 w-6 md:h-8 md:w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground text-lg md:text-xl mb-3">Quality Assurance</h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  Rigorous quality control measures and international certifications across all product lines.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 md:gap-6 p-6 md:p-8 rounded-lg bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300">
              <CheckCircle2 className="h-6 w-6 md:h-8 md:w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground text-lg md:text-xl mb-3">Diverse Portfolio</h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  Three specialized divisions serving agricultural, chemical, and medical sectors with expertise.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 md:gap-6 p-6 md:p-8 rounded-lg bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300">
              <CheckCircle2 className="h-6 w-6 md:h-8 md:w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground text-lg md:text-xl mb-3">Sustainable Practices</h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  Commitment to environmental responsibility and ethical business practices in all operations.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 md:gap-6 p-6 md:p-8 rounded-lg bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300">
              <CheckCircle2 className="h-6 w-6 md:h-8 md:w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground text-lg md:text-xl mb-3">Industry Expertise</h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  Decades of combined experience with specialized knowledge in each operational sector.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 md:gap-6 p-6 md:p-8 rounded-lg bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300">
              <CheckCircle2 className="h-6 w-6 md:h-8 md:w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground text-lg md:text-xl mb-3">Reliable Partnership</h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
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
