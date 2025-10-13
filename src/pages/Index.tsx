import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const stats = [
    { label: "Lives Impacted", value: "10,000+" },
    { label: "Active Volunteers", value: "500+" },
    { label: "Communities Served", value: "50+" },
    { label: "Projects Completed", value: "200+" },
  ];

  const causes = [
    {
      icon: Heart,
      title: "Healthcare",
      description: "Providing essential medical care and health education to underserved communities.",
    },
    {
      icon: Users,
      title: "Education",
      description: "Building schools and offering educational programs for children and adults.",
    },
    {
      icon: Target,
      title: "Community Development",
      description: "Creating sustainable solutions for economic growth and infrastructure.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-accent to-primary py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Together, We Create Lasting Change
            </h1>
            <p className="text-lg lg:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Join us in our mission to build stronger communities, provide essential resources, and create opportunities for those in need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/donate">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Donate Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/volunteer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
                  Become a Volunteer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm lg:text-base text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Causes Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Focus Areas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to making a real difference in the lives of those we serve through targeted initiatives.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {causes.map((cause) => (
              <Card key={cause.title} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <cause.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{cause.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{cause.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Your contribution, whether time or resources, helps us continue our vital work in communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <Button size="lg" variant="secondary">
                Make a Donation
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
