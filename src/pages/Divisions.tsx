import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Divisions = () => {
  const divisions = [
    {
      title: "Agricultural Products",
      description: "Global sourcing and distribution of premium coffee varieties and fresh vegetables, serving international markets with quality products and reliable supply chains.",
      image: `${import.meta.env.BASE_URL}agricultural-products.jpg`,
      alt: "Coffee beans, vegetables, and farmlands from Lemcorian Agricultural Products division",
    },
    {
      title: "Chemicals",
      description: "Manufacturing and supplying industrial and pharmaceutical chemicals that meet stringent quality standards and regulatory requirements across multiple sectors.",
      image: `${import.meta.env.BASE_URL}chemicals.jpg`,
      alt: "Laboratory and industrial chemical equipment from Lemcorian Chemicals division",
    },
    {
      title: "Medical Equipment & Instruments",
      description: "Comprehensive range of medical supplies including syringes, gloves, masks, and surgical instruments, serving healthcare systems worldwide with ISO-certified products.",
      image: `${import.meta.env.BASE_URL}medical-equipment.jpg`,
      alt: "Medical equipment including syringes, gloves, and surgical tools from Lemcorian Medical Equipment division",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO
        title="Our Divisions"
        description="Explore Lemcorian's three specialized divisions: Agricultural Products (coffee and vegetables), Chemicals (industrial and pharmaceutical), and Medical Equipment & Instruments. Learn about our diversified business operations."
        keywords="Lemcorian divisions, agricultural products, coffee, vegetables, chemicals, industrial chemicals, pharmaceutical, medical equipment, syringes, gloves, medical supplies"
        image={`${import.meta.env.BASE_URL}agricultural-products.jpg`}
        url="/divisions"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-10 md:pt-20 lg:pt-28 pb-12 md:pb-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4" data-aos="fade-up">
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            Our Divisions
          </h1>
          <p className="text-base md:text-xl lg:text-2xl max-w-3xl text-primary-foreground/90 leading-relaxed">
            Three specialized divisions serving essential sectors with operational excellence and global reach.
          </p>
        </div>
      </section>

      <main className="py-10 md:py-14 lg:py-20 flex-1">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20" data-aos="fade-up">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 md:mb-6" data-aos="fade-down">
              Our Divisions
            </h2>
            <div className="w-32 h-1 bg-primary mx-auto mb-4 md:mb-6"></div>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Three specialized divisions serving essential sectors with operational excellence and global reach.
            </p>
          </div>

          {/* Divisions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {divisions.map((division, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-[3px]"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                {/* Image */}
                <div className="w-full h-[220px] overflow-hidden">
                  <img
                    src={division.image}
                    alt={division.alt}
                    className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300 max-w-full"
                    loading="lazy"
                    fetchPriority={index === 0 ? "high" : "low"}
                    decoding="async"
                    style={{ maxWidth: "100%" }}
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4 md:mb-6">
                    {division.title}
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed flex-1">
                    {division.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Divisions;
