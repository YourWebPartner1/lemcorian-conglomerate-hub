import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Leadership = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Leadership at Lemcorian
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl text-primary-foreground/90 leading-relaxed">
              Our leadership structure reflects clarity, strategic direction, and operational excellence. The Lemcorian Group is guided by experienced professionals committed to driving growth across all divisions.
            </p>
          </div>
        </section>

        {/* Executive Leadership */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-16 text-foreground">
              Executive Leadership
            </h2>
            <div className="grid md:grid-cols-2 gap-10 max-w-6xl">
              <div className="border border-border rounded-lg p-8 bg-card shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Chairman & Group Director
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Oversees strategic vision, corporate governance, and long-term growth across all divisions of the Lemcorian Group.
                </p>
              </div>

              <div className="border border-border rounded-lg p-8 bg-card shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Chief Operating Officer
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Manages day-to-day operations, ensures operational efficiency, and coordinates activities across all business divisions.
                </p>
              </div>

              <div className="border border-border rounded-lg p-8 bg-card shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Chief Financial Officer
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Responsible for financial planning, risk management, and maintaining fiscal discipline across the conglomerate.
                </p>
              </div>

              <div className="border border-border rounded-lg p-8 bg-card shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Chief Compliance Officer
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Ensures regulatory compliance, corporate integrity, and adherence to legal standards across all operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Division Heads */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-16 text-foreground">
              Division Heads
            </h2>
            <div className="grid md:grid-cols-2 gap-10 max-w-6xl">
              <div className="border border-border rounded-lg p-8 bg-card shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Head of Agricultural Products
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Leads the Agricultural Products division, overseeing coffee and vegetable operations, supply chain, and quality standards.
                </p>
              </div>

              <div className="border border-border rounded-lg p-8 bg-card shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Head of Chemicals Division
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Manages industrial and pharmaceutical chemical operations, ensuring safety compliance and production excellence.
                </p>
              </div>

              <div className="border border-border rounded-lg p-8 bg-card shadow-sm hover:shadow-md transition-shadow md:col-span-2 max-w-lg mx-auto">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Head of Medical Equipment & Instruments
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Directs medical equipment manufacturing and distribution, including syringes, gloves, masks, and essential healthcare instruments.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Leadership;
