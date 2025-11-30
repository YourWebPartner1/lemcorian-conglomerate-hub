import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
<<<<<<< HEAD
import SEO from "@/components/SEO";
import agriculturalProductsImage from "@/assets/agricultural-products.jpg";
import chemicalsImage from "@/assets/chemicals.jpg";
import medicalEquipmentImage from "@/assets/medical-equipment.jpg";

const Divisions = () => {
  const divisions = [
    {
      title: "Agricultural Products",
      description: "Global sourcing and distribution of premium coffee varieties and fresh vegetables, serving international markets with quality products and reliable supply chains.",
      image: agriculturalProductsImage,
      alt: "Coffee beans, vegetables, and farmlands from Lemcorian Agricultural Products division",
    },
    {
      title: "Chemicals",
      description: "Manufacturing and supplying industrial and pharmaceutical chemicals that meet stringent quality standards and regulatory requirements across multiple sectors.",
      image: chemicalsImage,
      alt: "Laboratory and industrial chemical equipment from Lemcorian Chemicals division",
    },
    {
      title: "Medical Equipment & Instruments",
      description: "Comprehensive range of medical supplies including syringes, gloves, masks, and surgical instruments, serving healthcare systems worldwide with ISO-certified products.",
      image: medicalEquipmentImage,
      alt: "Medical equipment including syringes, gloves, and surgical tools from Lemcorian Medical Equipment division",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO
        title="Our Divisions"
        description="Explore Lemcorian's three specialized divisions: Agricultural Products (coffee and vegetables), Chemicals (industrial and pharmaceutical), and Medical Equipment & Instruments. Learn about our diversified business operations."
        keywords="Lemcorian divisions, agricultural products, coffee, vegetables, chemicals, industrial chemicals, pharmaceutical, medical equipment, syringes, gloves, medical supplies"
        image="/agricultural-products.jpg"
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
=======

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
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
            Three specialized divisions serving essential sectors with operational excellence and global reach.
          </p>
        </div>
      </section>

<<<<<<< HEAD
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
=======
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
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Divisions;
