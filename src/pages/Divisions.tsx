import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Divisions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold text-primary font-serif mb-12">
            Our Divisions
          </h1>

          <div className="space-y-20">
            {/* Agricultural Products Division */}
            <section>
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
                  Agricultural Products
                </h2>
                <div className="w-24 h-1 bg-primary"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Coffee</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Sourcing, processing, and distribution of premium coffee varieties from global growing regions.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Vegetables</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Fresh and preserved vegetable supply chain serving domestic and international markets.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Chemicals Division */}
            <section>
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
                  Chemicals
                </h2>
                <div className="w-24 h-1 bg-primary"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Industrial</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Manufacturing essential industrial chemical solutions for processing, production, and specialized manufacturing applications.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Pharmaceutical</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Chemical components for healthcare and drug development, meeting stringent regulatory requirements.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Medical Equipment & Instruments Division */}
            <section>
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
                  Medical Equipment & Instruments
                </h2>
                <div className="w-24 h-1 bg-primary"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Syringes, Gloves, Masks, etc.
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Essential medical items for healthcare systems including disposable medical supplies, surgical instruments, and diagnostic equipment meeting international regulatory standards.
                    </p>
                  </div>
                </div>

                <div className="bg-muted/30 p-6 rounded-sm">
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    All medical products are manufactured in ISO-certified facilities and comply with FDA, CE, and other relevant international regulatory standards.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Divisions;
