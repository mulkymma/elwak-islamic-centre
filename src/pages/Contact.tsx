import Layout from "@/components/Layout"; // ✅ Import your layout
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <Layout>
      <section className="container mx-auto px-4 lg:px-8 py-12 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="bg-primary p-2 rounded-lg">
              <Mail className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground">
              Elwak Islamic Centre
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground">
            Making a difference in communities through compassion, action, and
            sustainable change.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email */}
          <Card className="border-border">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground">
                    <a
                      href="mailto:MAIBRA24@YAHOO.COM"
                      className="hover:underline text-primary"
                    >
                      MAIBRA24@YAHOO.COM
                    </a>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Phone */}
          <Card className="border-border">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                  <p className="text-muted-foreground">
                    <a
                      href="tel:+254712345678"
                      className="hover:underline text-primary"
                    >
                      +254 712 345 678
                    </a>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Address */}
          <Card className="border-border">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Location
                  </h3>
                  <p className="text-muted-foreground">
                    Elwak Town, Mandera County, Kenya
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="border-border max-w-2xl mx-auto">
          <CardContent className="p-6 space-y-6">
            <h3 className="text-xl font-semibold text-foreground text-center">
              Send Us a Message
            </h3>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Name
                </label>
                <Input type="text" placeholder="Your Name" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Email
                </label>
                <Input type="email" placeholder="Your Email" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Message
                </label>
                <Textarea rows={4} placeholder="Your Message" required />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
};

export default Contact;
