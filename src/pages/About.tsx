import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-primary font-serif mb-8">
            About LEMCORIAN
          </h1>

          <div className="prose prose-lg max-w-none space-y-10">
            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-6 font-serif">
                Who We Are
              </h2>
              <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                Lemcorian operates as a global conglomerate with three major verticals — Agricultural Products, Chemicals, and Medical Equipment & Instruments. Our organization is built on diversification, operational strength, and a commitment to delivering essential products across key sectors.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                We emphasize clarity, structure, and strategic expansion across all branches. Each division operates with specialized expertise while benefiting from the integrated strength of our conglomerate structure.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-6 font-serif">
                Our Divisions
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Agricultural Products Division
                  </h3>
                  <p className="text-foreground/80 leading-relaxed mb-2">
                    Our Agricultural Products Division focuses on cultivating and distributing high-quality agricultural commodities. We specialize in premium coffee production, sourcing beans from the finest growing regions, and fresh vegetables that meet international quality standards.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    This division plays a crucial role in global food supply chains, ensuring consistent quality and sustainable farming practices. We work directly with farmers and distributors to maintain the highest standards from field to market.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Chemicals Division
                  </h3>
                  <p className="text-foreground/80 leading-relaxed mb-2">
                    The Chemicals Division serves two critical market segments: Industrial and Pharmaceutical. Our industrial chemicals support manufacturing processes across various industries, while our pharmaceutical-grade chemicals meet stringent regulatory requirements for medical applications.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    We maintain state-of-the-art production facilities and adhere to international safety and quality standards. Our research and development team continuously works to develop innovative chemical solutions that address emerging market needs.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Medical Equipment & Instruments Division
                  </h3>
                  <p className="text-foreground/80 leading-relaxed mb-2">
                    Our Medical Equipment & Instruments Division provides essential healthcare products including syringes, medical gloves, surgical masks, and a comprehensive range of medical instruments. These products serve hospitals, clinics, and healthcare facilities worldwide.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    Quality and safety are paramount in this division. All products undergo rigorous testing and comply with international medical device regulations. We are committed to supporting healthcare professionals with reliable, high-quality equipment.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-foreground mb-6 font-serif">
                Our Commitment
              </h2>
              <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                LEMCORIAN is dedicated to operational excellence, ethical business practices, and sustainable growth. We invest in our people, technology, and infrastructure to ensure we remain at the forefront of our industries.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Our global presence allows us to serve diverse markets while maintaining the agility to respond to local needs. As we continue to expand our operations and capabilities, we remain focused on creating value for our stakeholders and contributing positively to the communities where we operate.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
