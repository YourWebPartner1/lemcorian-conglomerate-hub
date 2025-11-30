import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import aboutBackground from "@/assets/about-background.jpg";
import { Shield, Users, Target, Leaf } from "lucide-react";

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
                  Conducting business with transparency, ethical standards, and unwavering commitment to our stakeholders.
                </p>
              </div>

              <div className="p-8 bg-card border border-border rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Structure</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Maintaining clear organizational frameworks that enable efficient operations and strategic decision-making.
                </p>
              </div>

              <div className="p-8 bg-card border border-border rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Target className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Reliability</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Delivering consistent quality and maintaining long-term relationships built on trust and performance.
                </p>
              </div>

              <div className="p-8 bg-card border border-border rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Leaf className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Growth</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Pursuing sustainable expansion while maintaining operational excellence across all divisions.
                </p>
              </div>
            </div>
          </section>

          {/* Our Divisions */}
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
                  Global sourcing and distribution of agricultural commodities including coffee and vegetables, 
                  serving international markets with quality products and reliable supply chains.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-8 py-4 bg-card/50 rounded-r-lg">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  Chemicals
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Manufacturing and supplying industrial and pharmaceutical chemicals that meet stringent quality 
                  standards and regulatory requirements across multiple sectors.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-8 py-4 bg-card/50 rounded-r-lg">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  Medical Equipment & Instruments
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Comprehensive range of medical supplies including syringes, gloves, masks, and surgical instruments, 
                  serving healthcare systems worldwide with ISO-certified products.
                </p>
              </div>
            </div>
          </section>

          {/* Sustainability & Responsibility */}
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
          <section>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our Commitment
            </h2>
            <div className="w-32 h-1 bg-primary mb-10"></div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
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
