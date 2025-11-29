import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Timeline = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Corporate Timeline
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl text-primary-foreground/90 leading-relaxed">
              A chronological overview of Lemcorian's development from establishment to becoming a diversified multidivision conglomerate.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-[60px] top-0 bottom-0 w-1 bg-primary/20 hidden md:block"></div>
                
                <div className="space-y-16">
                  {/* 2025 */}
                  <div className="relative pl-0 md:pl-32">
                    <div className="absolute left-0 md:left-[37px] w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg hidden md:flex">
                      <div className="w-3 h-3 bg-primary-foreground rounded-full"></div>
                    </div>
                    <div className="bg-card border-2 border-primary/30 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                      <div className="font-serif text-4xl font-bold text-primary mb-4">2025</div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        Company Established as a Conglomerate
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        Lemcorian Group founded with a vision to build a diversified multidivision enterprise focused on essential sectors.
                      </p>
                    </div>
                  </div>

                  {/* 2026 */}
                  <div className="relative pl-0 md:pl-32">
                    <div className="absolute left-0 md:left-[37px] w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg hidden md:flex">
                      <div className="w-3 h-3 bg-primary-foreground rounded-full"></div>
                    </div>
                    <div className="bg-card border-2 border-primary/30 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                      <div className="font-serif text-4xl font-bold text-primary mb-4">2026</div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        Expansion into Agricultural Products
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        Launch of Agricultural Products division with focus on coffee and vegetable supply chains.
                      </p>
                    </div>
                  </div>

                  {/* 2027 */}
                  <div className="relative pl-0 md:pl-32">
                    <div className="absolute left-0 md:left-[37px] w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg hidden md:flex">
                      <div className="w-3 h-3 bg-primary-foreground rounded-full"></div>
                    </div>
                    <div className="bg-card border-2 border-primary/30 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                      <div className="font-serif text-4xl font-bold text-primary mb-4">2027</div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        Launch of Chemical Division
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        Introduction of industrial and pharmaceutical chemical operations, expanding corporate capabilities.
                      </p>
                    </div>
                  </div>

                  {/* 2028 */}
                  <div className="relative pl-0 md:pl-32">
                    <div className="absolute left-0 md:left-[37px] w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg hidden md:flex">
                      <div className="w-3 h-3 bg-primary-foreground rounded-full"></div>
                    </div>
                    <div className="bg-card border-2 border-primary/30 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                      <div className="font-serif text-4xl font-bold text-primary mb-4">2028</div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        Introduction of Medical Equipment & Instruments
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        Establishment of Medical Equipment & Instruments division, producing syringes, gloves, masks, and essential healthcare items.
                      </p>
                    </div>
                  </div>

                  {/* 2029 */}
                  <div className="relative pl-0 md:pl-32">
                    <div className="absolute left-0 md:left-[37px] w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg hidden md:flex">
                      <div className="w-3 h-3 bg-primary-foreground rounded-full"></div>
                    </div>
                    <div className="bg-card border-2 border-primary/30 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                      <div className="font-serif text-4xl font-bold text-primary mb-4">2029</div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        Consolidation of Operations
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
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
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8 text-foreground">
                Moving Forward
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
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
