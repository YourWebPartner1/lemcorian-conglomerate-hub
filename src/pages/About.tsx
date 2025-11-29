import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMCAyMCBMIDQwIDIwIE0gMjAgMCBMIDIwIDQwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            About LEMCORIAN
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl text-primary-foreground/90">
            A global conglomerate built on diversification, operational strength, and strategic excellence.
          </p>
        </div>
      </section>

      <main className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Who We Are Section */}
          <section className="mb-24">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-8">
              Who We Are
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-foreground/80 leading-relaxed">
              <p>
                Lemcorian operates as a global conglomerate with three major verticals — Agricultural Products, Chemicals, and Medical Equipment & Instruments. Our organization is built on diversification, operational strength, and a commitment to delivering essential products across key sectors.
              </p>
              <p>
                We emphasize clarity, structure, and strategic expansion across all branches. Each division operates with specialized expertise while benefiting from the integrated strength of our conglomerate structure.
              </p>
            </div>
          </section>

          {/* Divider */}
          <div className="border-t-2 border-border mb-24"></div>

          {/* Our Divisions Section */}
          <section className="mb-24">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-12">
              Our Divisions
            </h2>
            
            <div className="space-y-12">
              <div className="border-l-4 border-primary pl-8 py-4">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Agricultural Products Division
                </h3>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Our Agricultural Products Division focuses on cultivating and distributing high-quality agricultural commodities. We specialize in premium coffee production, sourcing beans from the finest growing regions, and fresh vegetables that meet international quality standards.
                  </p>
                  <p>
                    This division plays a crucial role in global food supply chains, ensuring consistent quality and sustainable farming practices. We work directly with farmers and distributors to maintain the highest standards from field to market.
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-primary pl-8 py-4">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Chemicals Division
                </h3>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    The Chemicals Division serves two critical market segments: Industrial and Pharmaceutical. Our industrial chemicals support manufacturing processes across various industries, while our pharmaceutical-grade chemicals meet stringent regulatory requirements for medical applications.
                  </p>
                  <p>
                    We maintain state-of-the-art production facilities and adhere to international safety and quality standards. Our research and development team continuously works to develop innovative chemical solutions that address emerging market needs.
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-primary pl-8 py-4">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Medical Equipment & Instruments Division
                </h3>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Our Medical Equipment & Instruments Division provides essential healthcare products including syringes, medical gloves, surgical masks, and a comprehensive range of medical instruments. These products serve hospitals, clinics, and healthcare facilities worldwide.
                  </p>
                  <p>
                    Quality and safety are paramount in this division. All products undergo rigorous testing and comply with international medical device regulations. We are committed to supporting healthcare professionals with reliable, high-quality equipment.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="border-t-2 border-border mb-24"></div>

          {/* Our Commitment Section */}
          <section>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-8">
              Our Commitment
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-foreground/80 leading-relaxed">
              <p>
                LEMCORIAN is dedicated to operational excellence, ethical business practices, and sustainable growth. We invest in our people, technology, and infrastructure to ensure we remain at the forefront of our industries.
              </p>
              <p>
                Our global presence allows us to serve diverse markets while maintaining the agility to respond to local needs. As we continue to expand our operations and capabilities, we remain focused on creating value for our stakeholders and contributing positively to the communities where we operate.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
