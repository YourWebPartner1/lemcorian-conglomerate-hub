import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
<<<<<<< HEAD
import SEO from "@/components/SEO";
=======
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
import aboutBackground from "@/assets/about-background.jpg";
import { Shield, Users, Target, Leaf } from "lucide-react";

const About = () => {
  return (
<<<<<<< HEAD
    <div className="flex flex-col min-h-screen bg-background">
      <SEO
        title="About Lemcorian"
        description="Learn about Lemcorian, a global multidivision conglomerate with operations spanning agriculture, chemicals, and medical equipment. Discover our values, divisions, and commitment to excellence."
        keywords="Lemcorian, about, corporate, conglomerate, agriculture, chemicals, medical equipment, global operations, company values, sustainability"
        image="/about-background.jpg"
        url="/about"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-10 md:pt-20 lg:pt-28 pb-12 md:pb-20 bg-primary text-primary-foreground relative">
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMCAyMCBMIDQwIDIwIE0gMjAgMCBMIDIwIDQwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')]"></div>
        <div className="container mx-auto px-4 relative z-10" data-aos="fade-up">
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            About Lemcorian
          </h1>
          <p className="text-base md:text-xl lg:text-2xl max-w-3xl text-primary-foreground/90">
=======
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
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
            A global conglomerate built on diversification, operational strength, and strategic excellence.
          </p>
        </div>
      </section>

<<<<<<< HEAD
      <main className="py-10 md:py-14 lg:py-20 relative flex-1">
        <div 
          className="absolute inset-0 opacity-[0.02] bg-gradient-to-br from-primary/5 via-muted/10 to-primary/5"
        ></div>
        
        <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
          {/* Who We Are */}
          <section className="mb-12 md:mb-16 lg:mb-20" data-aos="fade-up">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 md:mb-6" data-aos="fade-down">
              Who We Are
            </h2>
            <div className="w-32 h-1 bg-primary mb-6 md:mb-8"></div>
            <div className="space-y-6 md:space-y-8 text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-5xl">
=======
      <main className="py-20 md:py-28 relative">
        <div 
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: `url(${aboutBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          {/* Who We Are */}
          <section className="mb-28">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
              Who We Are
            </h2>
            <div className="w-32 h-1 bg-primary mb-10"></div>
            <div className="space-y-8 text-lg md:text-xl text-muted-foreground leading-relaxed">
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
              <p>
                Lemcorian is a multidivision conglomerate with operations spanning across agriculture, chemicals, 
                and medical equipment sectors. Our structure enables us to leverage expertise and resources across 
                diverse industries while maintaining specialized focus in each division.
              </p>
              <p>
                Through strategic positioning and operational excellence, we serve global markets with a commitment 
                to quality, reliability, and sustainable growth. Our divisions operate independently yet benefit from 
                shared corporate resources and governance.
              </p>
            </div>
          </section>

          {/* Our Values */}
<<<<<<< HEAD
          <section className="mb-12 md:mb-16 lg:mb-20" data-aos="fade-up">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 md:mb-6" data-aos="fade-down">
              Our Values
            </h2>
            <div className="w-32 h-1 bg-primary mb-6 md:mb-8"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="p-6 md:p-8 bg-card border border-border rounded-lg shadow-sm hover:shadow-lg transition-all duration-300" data-aos="zoom-in" data-aos-delay="0">
                <Shield className="h-8 w-8 md:h-10 md:w-10 text-primary mb-4" />
                <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-4">Integrity</h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
=======
          <section className="mb-28">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our Values
            </h2>
            <div className="w-32 h-1 bg-primary mb-10"></div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-card border border-border rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Shield className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Integrity</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
                  Conducting business with transparency, ethical standards, and unwavering commitment to our stakeholders.
                </p>
              </div>

<<<<<<< HEAD
              <div className="p-6 md:p-8 bg-card border border-border rounded-lg shadow-sm hover:shadow-lg transition-all duration-300" data-aos="zoom-in" data-aos-delay="100">
                <Users className="h-8 w-8 md:h-10 md:w-10 text-primary mb-4" />
                <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-4">Structure</h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
=======
              <div className="p-8 bg-card border border-border rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Structure</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
                  Maintaining clear organizational frameworks that enable efficient operations and strategic decision-making.
                </p>
              </div>

<<<<<<< HEAD
              <div className="p-6 md:p-8 bg-card border border-border rounded-lg shadow-sm hover:shadow-lg transition-all duration-300" data-aos="zoom-in" data-aos-delay="200">
                <Target className="h-8 w-8 md:h-10 md:w-10 text-primary mb-4" />
                <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-4">Reliability</h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
=======
              <div className="p-8 bg-card border border-border rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Target className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Reliability</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
                  Delivering consistent quality and maintaining long-term relationships built on trust and performance.
                </p>
              </div>

<<<<<<< HEAD
              <div className="p-6 md:p-8 bg-card border border-border rounded-lg shadow-sm hover:shadow-lg transition-all duration-300" data-aos="zoom-in" data-aos-delay="300">
                <Leaf className="h-8 w-8 md:h-10 md:w-10 text-primary mb-4" />
                <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-4">Growth</h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
=======
              <div className="p-8 bg-card border border-border rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Leaf className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Growth</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
                  Pursuing sustainable expansion while maintaining operational excellence across all divisions.
                </p>
              </div>
            </div>
          </section>

          {/* Our Divisions */}
<<<<<<< HEAD
          <section className="mb-12 md:mb-16 lg:mb-20" data-aos="fade-up">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 md:mb-6" data-aos="fade-down">
              Our Divisions
            </h2>
            <div className="w-32 h-1 bg-primary mb-6 md:mb-8"></div>
            <div className="space-y-6 md:space-y-8">
              <div className="border-l-4 border-primary pl-6 md:pl-8 py-4 md:py-6 bg-card/50 rounded-r-lg">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-3">
                  Agricultural Products
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
=======
          <section className="mb-28">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our Divisions
            </h2>
            <div className="w-32 h-1 bg-primary mb-10"></div>
            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-8 py-4 bg-card/50 rounded-r-lg">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  Agricultural Products
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
                  Global sourcing and distribution of agricultural commodities including coffee and vegetables, 
                  serving international markets with quality products and reliable supply chains.
                </p>
              </div>

<<<<<<< HEAD
              <div className="border-l-4 border-primary pl-6 md:pl-8 py-4 md:py-6 bg-card/50 rounded-r-lg">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-3">
                  Chemicals
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
=======
              <div className="border-l-4 border-primary pl-8 py-4 bg-card/50 rounded-r-lg">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  Chemicals
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
                  Manufacturing and supplying industrial and pharmaceutical chemicals that meet stringent quality 
                  standards and regulatory requirements across multiple sectors.
                </p>
              </div>

<<<<<<< HEAD
              <div className="border-l-4 border-primary pl-6 md:pl-8 py-4 md:py-6 bg-card/50 rounded-r-lg">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-3">
                  Medical Equipment & Instruments
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
=======
              <div className="border-l-4 border-primary pl-8 py-4 bg-card/50 rounded-r-lg">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  Medical Equipment & Instruments
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
                  Comprehensive range of medical supplies including syringes, gloves, masks, and surgical instruments, 
                  serving healthcare systems worldwide with ISO-certified products.
                </p>
              </div>
            </div>
          </section>

          {/* Sustainability & Responsibility */}
<<<<<<< HEAD
          <section className="mb-12 md:mb-16 lg:mb-20" data-aos="fade-up">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 md:mb-6" data-aos="fade-down">
              Sustainability & Responsibility
            </h2>
            <div className="w-32 h-1 bg-primary mb-6 md:mb-8"></div>
            <div className="bg-muted/30 border border-border rounded-lg p-6 md:p-8 lg:p-10">
              <p className="text-base md:text-lg lg:text-xl text-foreground leading-relaxed mb-6">
                Our commitment to corporate responsibility extends beyond financial performance. We prioritize:
              </p>
              <ul className="space-y-3 md:space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
=======
          <section className="mb-28">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
              Sustainability & Responsibility
            </h2>
            <div className="w-32 h-1 bg-primary mb-10"></div>
            <div className="bg-muted/30 border border-border rounded-lg p-10">
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                Our commitment to corporate responsibility extends beyond financial performance. We prioritize:
              </p>
              <ul className="space-y-4 text-lg text-muted-foreground">
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span>Environmental stewardship through sustainable operational practices across all divisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span>Ethical sourcing and supply chain transparency in all business relationships</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span>Compliance with international standards and regulatory frameworks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span>Continuous improvement in resource efficiency and waste reduction</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span>Investment in communities where we operate through responsible business practices</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Our Commitment */}
<<<<<<< HEAD
          <section data-aos="fade-up">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 md:mb-6" data-aos="fade-down">
              Our Commitment
            </h2>
            <div className="w-32 h-1 bg-primary mb-6 md:mb-8"></div>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-5xl">
=======
          <section>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our Commitment
            </h2>
            <div className="w-32 h-1 bg-primary mb-10"></div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
              Lemcorian remains committed to operational excellence, strategic growth, and maintaining the highest 
              standards across all business operations. We continue to invest in our divisions, strengthen our market 
              positions, and deliver value to all stakeholders while upholding our core values of integrity, structure, 
              reliability, and sustainable growth.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
