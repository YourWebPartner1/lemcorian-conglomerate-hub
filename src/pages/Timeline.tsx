import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Timeline = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title="Corporate Timeline"
        description="Explore Lemcorian's corporate timeline from establishment to becoming a diversified multidivision conglomerate. Learn about our growth, expansion, and strategic milestones."
        keywords="Lemcorian timeline, corporate history, company milestones, business growth, corporate development, company evolution"
        image={`${import.meta.env.BASE_URL}/hero-background-premium.jpg`}
        url="/timeline"
      />
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-10 md:pt-20 lg:pt-28 pb-12 md:pb-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4" data-aos="fade-up">
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Corporate Timeline
            </h1>
            <p className="text-base md:text-xl lg:text-2xl max-w-3xl text-primary-foreground/90 leading-relaxed">
              A chronological overview of Lemcorian's development from establishment to becoming a diversified multidivision conglomerate.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-10 md:py-14 lg:py-20 relative bg-gradient-to-b from-background via-muted/20 to-background" data-aos="fade-up">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-[30px] md:left-[60px] top-0 bottom-0 w-1 bg-primary/20 hidden sm:block"></div>
                
                <div className="space-y-8 md:space-y-12 lg:space-y-16">
                  {/* 2025 */}
                  <div className="relative pl-0 sm:pl-16 md:pl-32" data-aos="fade-up" data-aos-delay="0">
                    <div className="absolute left-0 sm:left-[7px] md:left-[37px] w-8 h-8 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center shadow-lg hidden sm:flex">
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-primary-foreground rounded-full"></div>
                    </div>
                    <div className="bg-card border-2 border-primary/30 rounded-lg p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                      <div className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 md:mb-4">2025</div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">
                        Company Established as a Conglomerate
                      </h3>
                      <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                        Lemcorian Group founded with a vision to build a diversified multidivision enterprise focused on essential sectors.
                      </p>
                    </div>
                  </div>

                  {/* 2026 */}
                  <div className="relative pl-0 sm:pl-16 md:pl-32" data-aos="fade-up" data-aos-delay="100">
                    <div className="absolute left-0 sm:left-[7px] md:left-[37px] w-8 h-8 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center shadow-lg hidden sm:flex">
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-primary-foreground rounded-full"></div>
                    </div>
                    <div className="bg-card border-2 border-primary/30 rounded-lg p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                      <div className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 md:mb-4">2026</div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">
                        Expansion into Agricultural Products
                      </h3>
                      <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                        Launch of Agricultural Products division with focus on coffee and vegetable supply chains.
                      </p>
                    </div>
                  </div>

                  {/* 2027 */}
                  <div className="relative pl-0 sm:pl-16 md:pl-32" data-aos="fade-up" data-aos-delay="200">
                    <div className="absolute left-0 sm:left-[7px] md:left-[37px] w-8 h-8 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center shadow-lg hidden sm:flex">
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-primary-foreground rounded-full"></div>
                    </div>
                    <div className="bg-card border-2 border-primary/30 rounded-lg p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                      <div className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 md:mb-4">2027</div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">
                        Launch of Chemical Division
                      </h3>
                      <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                        Introduction of industrial and pharmaceutical chemical operations, expanding corporate capabilities.
                      </p>
                    </div>
                  </div>

                  {/* 2028 */}
                  <div className="relative pl-0 sm:pl-16 md:pl-32" data-aos="fade-up" data-aos-delay="300">
                    <div className="absolute left-0 sm:left-[7px] md:left-[37px] w-8 h-8 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center shadow-lg hidden sm:flex">
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-primary-foreground rounded-full"></div>
                    </div>
                    <div className="bg-card border-2 border-primary/30 rounded-lg p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                      <div className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 md:mb-4">2028</div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">
                        Introduction of Medical Equipment & Instruments
                      </h3>
                      <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                        Establishment of Medical Equipment & Instruments division, producing syringes, gloves, masks, and essential healthcare items.
                      </p>
                    </div>
                  </div>

                  {/* 2029 */}
                  <div className="relative pl-0 sm:pl-16 md:pl-32" data-aos="fade-up" data-aos-delay="400">
                    <div className="absolute left-0 sm:left-[7px] md:left-[37px] w-8 h-8 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center shadow-lg hidden sm:flex">
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-primary-foreground rounded-full"></div>
                    </div>
                    <div className="bg-card border-2 border-primary/30 rounded-lg p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                      <div className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 md:mb-4">2029</div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">
                        Consolidation of Operations
                      </h3>
                      <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                        Strategic consolidation phase focusing on operational efficiency, structured management, and sustainable growth across all divisions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Direction */}
        <section className="py-10 md:py-14 lg:py-20 bg-muted/30" data-aos="fade-up">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 md:mb-8 text-foreground" data-aos="fade-down">
                Moving Forward
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Lemcorian continues to build on its foundation of diversification, structure, and operational excellence. Our commitment remains focused on delivering value across all business sectors while maintaining the highest standards of corporate integrity.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Timeline;
