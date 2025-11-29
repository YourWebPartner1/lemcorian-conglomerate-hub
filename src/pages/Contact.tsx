import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-primary font-serif mb-8">
            Contact Us
          </h1>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Corporate Headquarters</h3>
                  <p className="text-foreground/70">
                    123 Global Trade Center<br />
                    International Business District<br />
                    Floor 45, Tower A
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                  <p className="text-foreground/70">
                    Main: +1 (555) 123-4567<br />
                    Fax: +1 (555) 123-4568
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <p className="text-foreground/70">
                    General Inquiries: info@lemcorian.com<br />
                    Sales: sales@lemcorian.com<br />
                    Support: support@lemcorian.com
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
                  <p className="text-foreground/70">
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
