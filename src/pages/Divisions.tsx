import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Divisions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            Our Divisions
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl text-primary-foreground/90 leading-relaxed">
            Three specialized divisions serving essential sectors with operational excellence and global reach.
          </p>
        </div>
      </section>

      <main className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-24">
            {/* Agricultural Products Division */}
            <section>
              <div className="mb-12">
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
                  Agricultural Products
                </h2>
                <div className="w-32 h-1 bg-primary"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="border border-border rounded-lg p-8 bg-card shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Coffee</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Sourcing, processing, and distribution of premium coffee varieties from global growing regions.
                  </p>
                </div>

                <div className="border border-border rounded-lg p-8 bg-card shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Vegetables</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Fresh and preserved vegetable supply chain serving domestic and international markets.
                  </p>
                </div>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t-2 border-border"></div>

            {/* Chemicals Division */}
            <section>
              <div className="mb-12">
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
                  Chemicals
                </h2>
                <div className="w-32 h-1 bg-primary"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="border border-border rounded-lg p-8 bg-card shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Industrial</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Manufacturing essential industrial chemical solutions for processing, production, and specialized manufacturing applications.
                  </p>
                </div>

                <div className="border border-border rounded-lg p-8 bg-card shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Pharmaceutical</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Chemical components for healthcare and drug development, meeting stringent regulatory requirements.
                  </p>
                </div>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t-2 border-border"></div>

            {/* Medical Equipment & Instruments Division */}
            <section>
              <div className="mb-12">
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
                  Medical Equipment & Instruments
                </h2>
                <div className="w-32 h-1 bg-primary"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="border border-border rounded-lg p-8 bg-card shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                    Essential Medical Supplies
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Comprehensive range of medical equipment including syringes, gloves, masks, and surgical instruments for healthcare systems worldwide.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Disposable Medical Supplies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Surgical Instruments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Diagnostic Equipment</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-8 flex items-center">
                  <p className="text-foreground text-lg leading-relaxed">
                    <span className="font-semibold block mb-3">Quality Assurance</span>
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
