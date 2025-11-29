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

          <div className="space-y-16">
            {/* Agricultural Products Division */}
            <section>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4 font-serif">
                  Agricultural Products
                </h2>
                <div className="w-20 h-1 bg-primary"></div>
              </div>

              <p className="text-foreground/80 leading-relaxed mb-6">
                Our Agricultural Products Division is dedicated to cultivating and distributing premium agricultural commodities that meet global quality standards. We maintain strong relationships with farmers and employ sustainable practices throughout our supply chain.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card border border-border p-6 rounded-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Coffee</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    We source and process premium coffee beans from the world's finest growing regions. Our coffee products include arabica and robusta varieties, available in various grades to meet diverse market requirements. Quality control measures ensure consistency from harvest to export.
                  </p>
                </div>

                <div className="bg-card border border-border p-6 rounded-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Vegetables</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Our vegetable division supplies fresh, high-quality produce to domestic and international markets. We work with certified farms to ensure food safety standards are met. Our product range includes leafy greens, root vegetables, and specialty produce.
                  </p>
                </div>
              </div>
            </section>

            {/* Chemicals Division */}
            <section>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4 font-serif">
                  Chemicals
                </h2>
                <div className="w-20 h-1 bg-primary"></div>
              </div>

              <p className="text-foreground/80 leading-relaxed mb-6">
                The Chemicals Division operates at the intersection of industrial innovation and pharmaceutical precision. Our products serve critical functions across manufacturing, healthcare, and research sectors worldwide.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card border border-border p-6 rounded-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Industrial Chemicals</h3>
                  <p className="text-foreground/70 leading-relaxed mb-4">
                    We manufacture and distribute a comprehensive range of industrial chemicals used in manufacturing, processing, and production applications. Our products include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground/70">
                    <li>Solvents and cleaning agents</li>
                    <li>Processing chemicals</li>
                    <li>Specialty compounds</li>
                    <li>Raw materials for manufacturing</li>
                  </ul>
                </div>

                <div className="bg-card border border-border p-6 rounded-sm">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Pharmaceutical Chemicals</h3>
                  <p className="text-foreground/70 leading-relaxed mb-4">
                    Our pharmaceutical-grade chemicals meet stringent regulatory requirements for medical and research applications. Products include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground/70">
                    <li>Active pharmaceutical ingredients (APIs)</li>
                    <li>Excipients and additives</li>
                    <li>Research chemicals</li>
                    <li>Laboratory reagents</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Medical Equipment & Instruments Division */}
            <section>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4 font-serif">
                  Medical Equipment & Instruments
                </h2>
                <div className="w-20 h-1 bg-primary"></div>
              </div>

              <p className="text-foreground/80 leading-relaxed mb-6">
                Our Medical Equipment & Instruments Division provides healthcare facilities with essential products that meet international medical device standards. We are committed to supporting healthcare delivery through reliable, high-quality equipment.
              </p>

              <div className="bg-card border border-border p-8 rounded-sm">
                <h3 className="text-xl font-semibold text-foreground mb-6">Product Categories</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Disposable Medical Supplies</h4>
                    <ul className="space-y-2 text-foreground/70">
                      <li>• Syringes (various sizes and types)</li>
                      <li>• Medical examination gloves</li>
                      <li>• Surgical masks and respirators</li>
                      <li>• Sterile dressings and bandages</li>
                      <li>• IV sets and catheters</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Medical Instruments</h4>
                    <ul className="space-y-2 text-foreground/70">
                      <li>• Surgical instruments</li>
                      <li>• Diagnostic equipment</li>
                      <li>• Patient monitoring devices</li>
                      <li>• Laboratory instruments</li>
                      <li>• Emergency medical equipment</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-foreground/70 leading-relaxed">
                    All medical products are manufactured in ISO-certified facilities and comply with FDA, CE, and other relevant international regulatory standards. We maintain rigorous quality control processes and provide full documentation for regulatory compliance.
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
