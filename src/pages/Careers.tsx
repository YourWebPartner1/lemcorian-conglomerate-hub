import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title="Careers"
        description="Build your future with Lemcorian. Join a diversified conglomerate offering career opportunities across agricultural products, chemicals, and medical equipment divisions. Explore current openings and professional development programs."
        keywords="Lemcorian careers, jobs, employment, career opportunities, work at Lemcorian, corporate jobs, agricultural jobs, chemical industry jobs, medical equipment jobs"
        image={`${import.meta.env.BASE_URL}/careers-background.jpg`}
        url="/careers"
      />
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="pt-10 md:pt-20 lg:pt-28 pb-12 md:pb-20 bg-cover bg-center relative"
          style={{ backgroundImage: `linear-gradient(to bottom, rgba(10, 26, 63, 0.85), rgba(10, 26, 63, 0.75)), url(${import.meta.env.BASE_URL}/careers-background.jpg)` }}
        >
          <div className="absolute inset-0 bg-primary/85"></div>
          <div className="container mx-auto px-4 relative z-10" data-aos="fade-up">
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-primary-foreground">
              Build Your Future with Lemcorian
            </h1>
            <p className="text-base md:text-xl lg:text-2xl max-w-3xl text-primary-foreground/90 leading-relaxed">
              Join a diversified conglomerate committed to growth, structure, and excellence. At Lemcorian, we offer opportunities across multiple divisions with clear pathways for professional development and career advancement.
            </p>
          </div>
        </section>

      {/* Why Work With Us */}
        <section className="py-10 md:py-14 lg:py-20" data-aos="fade-up">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="text-center mb-12 md:mb-16 lg:mb-20">
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 text-foreground" data-aos="fade-down">
                Why Work With Us
              </h2>
              <div className="w-32 h-1 bg-primary mx-auto mb-6 md:mb-8"></div>
            </div>
            <div className="max-w-5xl mx-auto">
              <ul className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed">
                <li className="border-l-4 border-primary pl-6 md:pl-8 py-4 md:py-6 bg-card rounded-r-lg shadow-sm hover:shadow-md transition-all duration-300">
                  Opportunities across multiple business divisions and sectors
                </li>
                <li className="border-l-4 border-primary pl-6 md:pl-8 py-4 md:py-6 bg-card rounded-r-lg shadow-sm hover:shadow-md transition-all duration-300">
                  Structured career development and professional growth programs
                </li>
                <li className="border-l-4 border-primary pl-6 md:pl-8 py-4 md:py-6 bg-card rounded-r-lg shadow-sm hover:shadow-md transition-all duration-300">
                  Work with a globally-focused conglomerate with clear strategic direction
                </li>
                <li className="border-l-4 border-primary pl-6 md:pl-8 py-4 md:py-6 bg-card rounded-r-lg shadow-sm hover:shadow-md transition-all duration-300">
                  Commitment to operational excellence and corporate integrity
                </li>
                <li className="border-l-4 border-primary pl-6 md:pl-8 py-4 md:py-6 bg-card rounded-r-lg shadow-sm hover:shadow-md transition-all duration-300">
                  Competitive compensation and comprehensive benefits
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Current Openings */}
        <section className="py-10 md:py-14 lg:py-20 bg-muted/30" data-aos="fade-up">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="text-center mb-12 md:mb-16 lg:mb-20">
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 text-foreground" data-aos="fade-down">
                Current Openings
              </h2>
              <div className="w-32 h-1 bg-primary mx-auto mb-6 md:mb-8"></div>
            </div>
            <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
              <div className="bg-card border border-border p-6 md:p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300" data-aos="zoom-in" data-aos-delay="0">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-3">
                  Agricultural Products Division
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Supply Chain Manager, Quality Control Specialist, Operations Coordinator
                </p>
              </div>

              <div className="bg-card border border-border p-6 md:p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300" data-aos="zoom-in" data-aos-delay="100">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-3">
                  Chemicals Division
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Chemical Engineer, Production Supervisor, Safety Compliance Officer
                </p>
              </div>

              <div className="bg-card border border-border p-6 md:p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300" data-aos="zoom-in" data-aos-delay="200">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-3">
                  Medical Equipment & Instruments Division
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Manufacturing Specialist, Quality Assurance Manager, Distribution Coordinator
                </p>
              </div>

              <div className="bg-card border border-border p-6 md:p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300" data-aos="zoom-in" data-aos-delay="300">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-3">
                  Corporate Headquarters
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Financial Analyst, HR Manager, Legal Advisor
                </p>
              </div>
            </div>

            <div className="mt-10 md:mt-12 max-w-5xl mx-auto">
              <p className="text-base md:text-lg lg:text-xl text-foreground text-center leading-relaxed">
                To apply, please submit your details through our <Link 
                  to="/contact" 
                  className="text-primary hover:underline font-semibold cursor-pointer transition-colors"
                  aria-label="Navigate to contact form"
                >
                  contact form
                </Link>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
