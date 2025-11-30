import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ArrowRight } from "lucide-react";

const FlowChart = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO
        title="Corporate Flow Chart"
        description="View the organizational structure and flow chart of Lemcorian, showing our divisions and their product categories."
        keywords="Lemcorian flow chart, organizational structure, corporate hierarchy, divisions, agricultural products, chemicals, medical equipment"
        image="/hero-background-premium.jpg"
        url="/flow-chart"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-10 md:pt-20 lg:pt-28 pb-12 md:pb-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4" data-aos="fade-up">
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            Corporate Flow Chart
          </h1>
          <p className="text-base md:text-xl lg:text-2xl max-w-3xl text-primary-foreground/90 leading-relaxed">
            Our organizational structure and division hierarchy.
          </p>
        </div>
      </section>

      {/* Flow Chart Section */}
      <main className="py-10 md:py-14 lg:py-20 flex-1 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl shadow-corporate-lg p-8 md:p-12 lg:p-16">
            {/* Root Node - Lemcorian */}
            <div className="flex justify-center mb-8 md:mb-12" data-aos="fade-down" data-aos-duration="800">
              <div className="bg-gradient-to-br from-primary to-primary/80 border-2 border-primary/30 rounded-2xl shadow-corporate-lg px-10 md:px-14 py-6 md:py-8 group hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground text-center spacing-refined">
                  Lemcorian
                </h3>
              </div>
            </div>

            {/* Connector Line from Root */}
            <div className="flex justify-center mb-6 md:mb-8">
              <div className="w-1 h-8 md:h-12 bg-primary rounded-full"></div>
            </div>

            {/* Main Divisions Row - Horizontal Layout */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8" data-aos="fade-up">
              {/* Agricultural Products */}
              <div className="flex flex-col items-center w-full md:w-auto" data-aos="fade-up" data-aos-duration="800" data-aos-delay="0">
                <div className="bg-card border-2 border-primary/60 rounded-xl shadow-corporate px-6 md:px-8 py-4 md:py-5 text-center card-hover min-w-[200px] md:min-w-[220px] group">
                  <h4 className="font-semibold text-lg md:text-xl lg:text-2xl text-foreground group-hover:text-primary transition-colors duration-300 spacing-refined">
                    Agricultural Products
                  </h4>
                </div>
                
                {/* Connector Line */}
                <div className="w-1 h-5 md:h-7 bg-gradient-to-b from-primary to-primary/60 mt-3 md:mt-4 rounded-full"></div>
                
                {/* Sub-items */}
                <div className="w-full md:w-auto mt-3 md:mt-4 space-y-2.5 md:space-y-3">
                  {/* Coffee Subcategories */}
                  <div className="bg-card border border-border/60 rounded-lg shadow-corporate px-4 md:px-5 py-2.5 md:py-3 text-center card-hover group" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                    <p className="text-sm md:text-base font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300 mb-1.5">Coffee</p>
                    <div className="flex flex-col gap-1.5 mt-2">
                      <div className="bg-muted/50 rounded px-2 py-1 text-xs md:text-sm">Speciality Coffee</div>
                      <div className="bg-muted/50 rounded px-2 py-1 text-xs md:text-sm">Common Coffee</div>
                    </div>
                  </div>
                  {/* Vegetables Items */}
                  <div className="bg-card border border-border/60 rounded-lg shadow-corporate px-4 md:px-5 py-2.5 md:py-3 text-center card-hover group" data-aos="fade-up" data-aos-duration="600" data-aos-delay="150">
                    <p className="text-sm md:text-base font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300 mb-1.5">Vegetables</p>
                    <div className="flex flex-wrap justify-center gap-1 mt-2">
                      <div className="bg-muted/50 rounded px-2 py-1 text-xs">Onion</div>
                      <div className="bg-muted/50 rounded px-2 py-1 text-xs">Ginger</div>
                      <div className="bg-muted/50 rounded px-2 py-1 text-xs">Garlic</div>
                      <div className="bg-muted/50 rounded px-2 py-1 text-xs">Potato</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow 1 */}
              <div className="hidden md:flex items-center justify-center text-primary my-8 md:my-0" data-aos="fade-left" data-aos-delay="200">
                <ArrowRight className="h-8 w-8 md:h-10 md:w-10" />
              </div>

              {/* Chemicals */}
              <div className="flex flex-col items-center w-full md:w-auto" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                <div className="bg-card border-2 border-primary/60 rounded-xl shadow-corporate px-6 md:px-8 py-4 md:py-5 text-center card-hover min-w-[200px] md:min-w-[220px] group">
                  <h4 className="font-semibold text-lg md:text-xl lg:text-2xl text-foreground group-hover:text-primary transition-colors duration-300 spacing-refined">
                    Chemicals
                  </h4>
                </div>
                
                {/* Connector Line */}
                <div className="w-1 h-5 md:h-7 bg-gradient-to-b from-primary to-primary/60 mt-3 md:mt-4 rounded-full"></div>
                
                {/* Sub-items */}
                <div className="w-full md:w-auto mt-3 md:mt-4 space-y-2.5 md:space-y-3">
                  <div className="bg-card border border-border/60 rounded-lg shadow-corporate px-4 md:px-5 py-2.5 md:py-3 text-center card-hover group" data-aos="fade-up" data-aos-duration="600" data-aos-delay="250">
                    <p className="text-sm md:text-base font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">Industrial</p>
                  </div>
                  <div className="bg-card border border-border/60 rounded-lg shadow-corporate px-4 md:px-5 py-2.5 md:py-3 text-center card-hover group" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                    <p className="text-sm md:text-base font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">Pharmaceutical</p>
                  </div>
                </div>
              </div>

              {/* Arrow 2 */}
              <div className="hidden md:flex items-center justify-center text-primary my-8 md:my-0" data-aos="fade-left" data-aos-delay="300">
                <ArrowRight className="h-8 w-8 md:h-10 md:w-10" />
              </div>

              {/* Medical Equipment & Instruments */}
              <div className="flex flex-col items-center w-full md:w-auto" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                <div className="bg-card border-2 border-primary/60 rounded-xl shadow-corporate px-6 md:px-8 py-4 md:py-5 text-center card-hover min-w-[200px] md:min-w-[240px] group">
                  <h4 className="font-semibold text-lg md:text-xl lg:text-2xl text-foreground group-hover:text-primary transition-colors duration-300 spacing-refined">
                    Medical Equipment
                  </h4>
                </div>
                
                {/* Connector Line */}
                <div className="w-1 h-5 md:h-7 bg-gradient-to-b from-primary to-primary/60 mt-3 md:mt-4 rounded-full"></div>
                
                {/* Sub-items */}
                <div className="w-full md:w-auto mt-3 md:mt-4 space-y-2.5 md:space-y-3">
                  <div className="bg-card border border-border/60 rounded-lg shadow-corporate px-4 md:px-5 py-2.5 md:py-3 text-center card-hover group" data-aos="fade-up" data-aos-duration="600" data-aos-delay="350">
                    <p className="text-sm md:text-base font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">Syringes</p>
                  </div>
                  <div className="bg-card border border-border/60 rounded-lg shadow-corporate px-4 md:px-5 py-2.5 md:py-3 text-center card-hover group" data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
                    <p className="text-sm md:text-base font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">Gloves</p>
                  </div>
                  <div className="bg-card border border-border/60 rounded-lg shadow-corporate px-4 md:px-5 py-2.5 md:py-3 text-center card-hover group" data-aos="fade-up" data-aos-duration="600" data-aos-delay="450">
                    <p className="text-sm md:text-base font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">Masks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FlowChart;

