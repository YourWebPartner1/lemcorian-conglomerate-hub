import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
<<<<<<< HEAD
import SEO from "@/components/SEO";
import executivePlaceholder from "@/assets/executive-placeholder.jpg";

const Leadership = () => {
  const executiveLeadership = [
    {
      title: "Chairman & Group Director",
      description: "Oversees strategic vision, corporate governance, and long-term growth across all divisions of the Lemcorian Group.",
      image: executivePlaceholder,
      alt: "Chairman & Group Director - Lemcorian Executive Leadership",
    },
    {
      title: "Chief Operating Officer",
      description: "Manages day-to-day operations, ensures operational efficiency, and coordinates activities across all business divisions.",
      image: executivePlaceholder,
      alt: "Chief Operating Officer - Lemcorian Executive Leadership",
    },
    {
      title: "Chief Financial Officer",
      description: "Responsible for financial planning, risk management, and maintaining fiscal discipline across the conglomerate.",
      image: executivePlaceholder,
      alt: "Chief Financial Officer - Lemcorian Executive Leadership",
    },
    {
      title: "Chief Compliance Officer",
      description: "Ensures regulatory compliance, corporate integrity, and adherence to legal standards across all operations.",
      image: executivePlaceholder,
      alt: "Chief Compliance Officer - Lemcorian Executive Leadership",
    },
  ];

  const divisionHeads = [
    {
      title: "Head of Agricultural Products",
      description: "Leads the Agricultural Products division, overseeing coffee and vegetable operations, supply chain, and quality standards.",
      image: executivePlaceholder,
      alt: "Head of Agricultural Products - Lemcorian Division Leadership",
    },
    {
      title: "Head of Chemicals Division",
      description: "Manages industrial and pharmaceutical chemical operations, ensuring safety compliance and production excellence.",
      image: executivePlaceholder,
      alt: "Head of Chemicals Division - Lemcorian Division Leadership",
    },
    {
      title: "Head of Medical Equipment & Instruments",
      description: "Directs medical equipment manufacturing and distribution, including syringes, gloves, masks, and essential healthcare instruments.",
      image: executivePlaceholder,
      alt: "Head of Medical Equipment & Instruments - Lemcorian Division Leadership",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title="Leadership"
        description="Meet the executive leadership team and division heads at Lemcorian. Our experienced professionals guide strategic direction and operational excellence across all business divisions."
        keywords="Lemcorian leadership, executives, management, CEO, CFO, COO, division heads, corporate leadership, management team"
        image="/executive-placeholder.jpg"
        url="/leadership"
      />
=======
import executivePlaceholder from "@/assets/executive-placeholder.jpg";

const Leadership = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="pt-10 md:pt-20 lg:pt-28 pb-12 md:pb-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4" data-aos="fade-up">
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Leadership at Lemcorian
            </h1>
            <p className="text-base md:text-xl lg:text-2xl max-w-3xl text-primary-foreground/90 leading-relaxed">
=======
        <section className="py-24 md:py-32 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Leadership at Lemcorian
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl text-primary-foreground/90 leading-relaxed">
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
              Our leadership structure reflects clarity, strategic direction, and operational excellence. The Lemcorian Group is guided by experienced professionals committed to driving growth across all divisions.
            </p>
          </div>
        </section>

        {/* Executive Leadership */}
<<<<<<< HEAD
        <section className="py-10 md:py-14 lg:py-20" data-aos="fade-up">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="text-center mb-12 md:mb-16 lg:mb-20">
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 text-foreground" data-aos="fade-down">
                Executive Leadership
              </h2>
              <div className="w-32 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
              {executiveLeadership.map((leader, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-[3px] flex flex-col min-h-[400px] md:min-h-[500px]"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  {/* Silhouette Image */}
                  <div className="w-full h-[220px] md:h-[280px] bg-muted/10 flex items-center justify-center overflow-hidden">
                    <img
                      src={leader.image}
                      alt={leader.alt}
                      className="w-full h-full object-contain p-4 max-w-full"
                      loading="lazy"
                      fetchPriority={index === 0 ? "high" : "low"}
                      decoding="async"
                      style={{ maxWidth: "100%" }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
                      {leader.title}
                    </h3>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed flex-1">
                      {leader.description}
                    </p>
                  </div>
                </div>
              ))}
=======
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-16 text-foreground">
              Executive Leadership
            </h2>
            <div className="grid md:grid-cols-2 gap-10 max-w-6xl">
              <div className="border border-border rounded-lg overflow-hidden bg-card shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="h-48 bg-muted/30 flex items-center justify-center">
                  <img 
                    src={executivePlaceholder} 
                    alt="Executive Leadership" 
                    className="h-full w-auto object-contain opacity-20"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                    Chairman & Group Director
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Oversees strategic vision, corporate governance, and long-term growth across all divisions of the Lemcorian Group.
                  </p>
                </div>
              </div>

              <div className="border border-border rounded-lg overflow-hidden bg-card shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="h-48 bg-muted/30 flex items-center justify-center">
                  <img 
                    src={executivePlaceholder} 
                    alt="Executive Leadership" 
                    className="h-full w-auto object-contain opacity-20"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                    Chief Operating Officer
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Manages day-to-day operations, ensures operational efficiency, and coordinates activities across all business divisions.
                  </p>
                </div>
              </div>

              <div className="border border-border rounded-lg overflow-hidden bg-card shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="h-48 bg-muted/30 flex items-center justify-center">
                  <img 
                    src={executivePlaceholder} 
                    alt="Executive Leadership" 
                    className="h-full w-auto object-contain opacity-20"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                    Chief Financial Officer
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Responsible for financial planning, risk management, and maintaining fiscal discipline across the conglomerate.
                  </p>
                </div>
              </div>

              <div className="border border-border rounded-lg overflow-hidden bg-card shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="h-48 bg-muted/30 flex items-center justify-center">
                  <img 
                    src={executivePlaceholder} 
                    alt="Executive Leadership" 
                    className="h-full w-auto object-contain opacity-20"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                    Chief Compliance Officer
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Ensures regulatory compliance, corporate integrity, and adherence to legal standards across all operations.
                  </p>
                </div>
              </div>
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
            </div>
          </div>
        </section>

        {/* Division Heads */}
<<<<<<< HEAD
        <section className="py-10 md:py-14 lg:py-20 bg-muted/30" data-aos="fade-up">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="text-center mb-12 md:mb-16 lg:mb-20">
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 text-foreground" data-aos="fade-down">
                Division Heads
              </h2>
              <div className="w-32 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
              {divisionHeads.map((leader, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-[3px] flex flex-col min-h-[400px] md:min-h-[500px]"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  {/* Silhouette Image */}
                  <div className="w-full h-[220px] md:h-[280px] bg-muted/10 flex items-center justify-center overflow-hidden">
                    <img
                      src={leader.image}
                      alt={leader.alt}
                      className="w-full h-full object-contain p-4 max-w-full"
                      loading="lazy"
                      fetchPriority="low"
                      decoding="async"
                      style={{ maxWidth: "100%" }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
                      {leader.title}
                    </h3>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed flex-1">
                      {leader.description}
                    </p>
                  </div>
                </div>
              ))}
=======
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-16 text-foreground">
              Division Heads
            </h2>
            <div className="grid md:grid-cols-2 gap-10 max-w-6xl">
              <div className="border border-border rounded-lg overflow-hidden bg-card shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="h-48 bg-muted/30 flex items-center justify-center">
                  <img 
                    src={executivePlaceholder} 
                    alt="Division Leadership" 
                    className="h-full w-auto object-contain opacity-20"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                    Head of Agricultural Products
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Leads the Agricultural Products division, overseeing coffee and vegetable operations, supply chain, and quality standards.
                  </p>
                </div>
              </div>

              <div className="border border-border rounded-lg overflow-hidden bg-card shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="h-48 bg-muted/30 flex items-center justify-center">
                  <img 
                    src={executivePlaceholder} 
                    alt="Division Leadership" 
                    className="h-full w-auto object-contain opacity-20"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                    Head of Chemicals Division
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Manages industrial and pharmaceutical chemical operations, ensuring safety compliance and production excellence.
                  </p>
                </div>
              </div>

              <div className="border border-border rounded-lg overflow-hidden bg-card shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 md:col-span-2 max-w-lg mx-auto">
                <div className="h-48 bg-muted/30 flex items-center justify-center">
                  <img 
                    src={executivePlaceholder} 
                    alt="Division Leadership" 
                    className="h-full w-auto object-contain opacity-20"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                    Head of Medical Equipment & Instruments
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Directs medical equipment manufacturing and distribution, including syringes, gloves, masks, and essential healthcare instruments.
                  </p>
                </div>
              </div>
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Leadership;
