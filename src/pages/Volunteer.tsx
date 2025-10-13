import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { HandHeart, Clock, Users } from "lucide-react";

const Volunteer = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to register.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Registration Successful!",
      description: "Thank you for joining our volunteer team. We'll be in touch soon!",
    });

    setFormData({ name: "", phone: "", email: "" });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-accent to-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">Become a Volunteer</h1>
            <p className="text-lg lg:text-xl text-primary-foreground/90 leading-relaxed">
              Join our dedicated team of volunteers and make a real difference in the lives of those who need it most.
            </p>
          </div>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">Why Volunteer With Us?</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-border text-center">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <HandHeart className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Make an Impact</h3>
                <p className="text-muted-foreground">
                  Your time and skills directly improve lives in our communities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Build Community</h3>
                <p className="text-muted-foreground">
                  Connect with like-minded individuals passionate about change.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Flexible Schedule</h3>
                <p className="text-muted-foreground">
                  Choose volunteer opportunities that fit your availability.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Registration Form */}
          <div className="max-w-2xl mx-auto">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Volunteer Registration</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+254 700 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Register as Volunteer
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Volunteer;
