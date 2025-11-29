import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Timeline = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Corporate Timeline
            </h1>
            <p className="text-lg md:text-xl max-w-3xl text-primary-foreground/90">
              A chronological overview of Lemcorian's development from establishment to becoming a diversified multidivision conglomerate.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {/* 2025 */}
                <div className="border-l-4 border-primary pl-8 py-4">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-serif text-3xl font-bold text-primary">2025</span>
                    <div className="flex-1 border-b border-border"></div>
                  </div>
                  <p className="text-xl text-foreground font-semibold mb-2">
                    Company Established as a Conglomerate
                  </p>
                  <p className="text-muted-foreground">
                    Lemcorian Group founded with a vision to build a diversified multidivision enterprise focused on essential sectors.
                  </p>
                </div>

                {/* 2026 */}
                <div className="border-l-4 border-primary pl-8 py-4">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-serif text-3xl font-bold text-primary">2026</span>
                    <div className="flex-1 border-b border-border"></div>
                  </div>
                  <p className="text-xl text-foreground font-semibold mb-2">
                    Expansion into Agricultural Products
                  </p>
                  <p className="text-muted-foreground">
                    Launch of Agricultural Products division with focus on coffee and vegetable supply chains.
                  </p>
                </div>

                {/* 2027 */}
                <div className="border-l-4 border-primary pl-8 py-4">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-serif text-3xl font-bold text-primary">2027</span>
                    <div className="flex-1 border-b border-border"></div>
                  </div>
                  <p className="text-xl text-foreground font-semibold mb-2">
                    Launch of Chemical Division
                  </p>
                  <p className="text-muted-foreground">
                    Introduction of industrial and pharmaceutical chemical operations, expanding corporate capabilities.
                  </p>
                </div>

                {/* 2028 */}
                <div className="border-l-4 border-primary pl-8 py-4">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-serif text-3xl font-bold text-primary">2028</span>
                    <div className="flex-1 border-b border-border"></div>
                  </div>
                  <p className="text-xl text-foreground font-semibold mb-2">
                    Introduction of Medical Equipment & Instruments
                  </p>
                  <p className="text-muted-foreground">
                    Establishment of Medical Equipment & Instruments division, producing syringes, gloves, masks, and essential healthcare items.
                  </p>
                </div>

                {/* 2029 */}
                <div className="border-l-4 border-primary pl-8 py-4">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-serif text-3xl font-bold text-primary">2029</span>
                    <div className="flex-1 border-b border-border"></div>
                  </div>
                  <p className="text-xl text-foreground font-semibold mb-2">
                    Consolidation of Operations
                  </p>
                  <p className="text-muted-foreground">
                    Strategic consolidation phase focusing on operational efficiency, structured management, and sustainable growth across all divisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Direction */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Moving Forward
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
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
