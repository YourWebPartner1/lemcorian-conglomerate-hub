import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
<<<<<<< HEAD
import SEO from "@/components/SEO";
=======
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    // Show success message
    toast.success("Thank you for your message. We will contact you soon.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
<<<<<<< HEAD
    <div className="flex flex-col min-h-screen bg-background">
      <SEO
        title="Contact Us"
        description="Contact Lemcorian for corporate inquiries, partnerships, or business opportunities. Reach out to our headquarters for information about our agricultural products, chemicals, and medical equipment divisions."
        keywords="Lemcorian contact, corporate inquiries, business partnerships, contact information, corporate headquarters, email, phone"
        image="/hero-background-premium.jpg"
        url="/contact"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-10 md:pt-20 lg:pt-28 pb-12 md:pb-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4" data-aos="fade-up">
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            Contact Us
          </h1>
          <p className="text-base md:text-xl lg:text-2xl max-w-3xl text-primary-foreground/90 leading-relaxed">
=======
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl text-primary-foreground/90 leading-relaxed">
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
            For corporate inquiries or partnerships, contact our headquarters.
          </p>
        </div>
      </section>

<<<<<<< HEAD
      <main className="py-10 md:py-14 lg:py-20 flex-1">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* Contact Form */}
            <div data-aos="fade-up">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6 md:mb-8" data-aos="fade-down">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-base font-medium text-foreground mb-2 md:mb-3">
=======
      <main className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-base font-medium text-foreground mb-3">
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
<<<<<<< HEAD
                    className="h-12 text-base rounded-md"
=======
                    className="h-12 text-base"
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
                    required
                  />
                </div>

                <div>
<<<<<<< HEAD
                  <label htmlFor="email" className="block text-base font-medium text-foreground mb-2 md:mb-3">
=======
                  <label htmlFor="email" className="block text-base font-medium text-foreground mb-3">
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
<<<<<<< HEAD
                    className="h-12 text-base rounded-md"
=======
                    className="h-12 text-base"
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
                    required
                  />
                </div>

                <div>
<<<<<<< HEAD
                  <label htmlFor="message" className="block text-base font-medium text-foreground mb-2 md:mb-3">
=======
                  <label htmlFor="message" className="block text-base font-medium text-foreground mb-3">
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={6}
<<<<<<< HEAD
                    className="text-base rounded-md"
=======
                    className="text-base"
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
                    required
                  />
                </div>

<<<<<<< HEAD
                <Button type="submit" size="lg" className="w-full h-12 text-base font-semibold rounded-md">
=======
                <Button type="submit" size="lg" className="w-full h-12 text-base font-semibold">
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
<<<<<<< HEAD
            <div data-aos="fade-up" data-aos-delay="100">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6 md:mb-8" data-aos="fade-down">
                Contact Information
              </h2>

              <div className="space-y-6 md:space-y-8">
                <div className="border-l-4 border-primary pl-6 py-3">
                  <h3 className="font-semibold text-foreground text-lg md:text-xl mb-3">Corporate Headquarters</h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
=======
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="font-semibold text-foreground text-xl mb-3">Corporate Headquarters</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
                    123 Global Trade Center<br />
                    International Business District<br />
                    Floor 45, Tower A
                  </p>
                </div>

<<<<<<< HEAD
                <div className="border-l-4 border-primary pl-6 py-3">
                  <h3 className="font-semibold text-foreground text-lg md:text-xl mb-3">Phone</h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
=======
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="font-semibold text-foreground text-xl mb-3">Phone</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
                    Main: +1 (555) 123-4567<br />
                    Fax: +1 (555) 123-4568
                  </p>
                </div>

<<<<<<< HEAD
                <div className="border-l-4 border-primary pl-6 py-3">
                  <h3 className="font-semibold text-foreground text-lg md:text-xl mb-3">Email</h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
=======
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="font-semibold text-foreground text-xl mb-3">Email</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
                    General: info@lemcorian.com<br />
                    Sales: sales@lemcorian.com<br />
                    Support: support@lemcorian.com
                  </p>
                </div>

<<<<<<< HEAD
                <div className="border-l-4 border-primary pl-6 py-3">
                  <h3 className="font-semibold text-foreground text-lg md:text-xl mb-3">Business Hours</h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
=======
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="font-semibold text-foreground text-xl mb-3">Business Hours</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
>>>>>>> a3881d06226b27b2f91d5478631afbe768f212da
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
