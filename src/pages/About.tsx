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

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Who We Are
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                LEMCORIAN is a globally recognized multidivision conglomerate with a diverse portfolio spanning three major industries: Agricultural Products, Chemicals, and Medical Equipment & Instruments. Our organization operates with a commitment to excellence, innovation, and sustainable growth across all sectors.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Established with a vision to create value across multiple industries, LEMCORIAN has evolved into a trusted partner for businesses and consumers worldwide. Our integrated approach allows us to leverage synergies across divisions while maintaining specialized expertise in each sector.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
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
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Our Commitment
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                LEMCORIAN is dedicated to operational excellence, ethical business practices, and sustainable growth. We invest in our people, technology, and infrastructure to ensure we remain at the forefront of our industries. Our global presence allows us to serve diverse markets while maintaining the agility to respond to local needs.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                As we continue to expand our operations and capabilities, we remain focused on creating value for our stakeholders, supporting our employees, and contributing positively to the communities where we operate.
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
