import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-secondary to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">About Hope Foundation</h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              For over a decade, we've been dedicated to transforming lives and building resilient communities across Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <Card className="border-border">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To empower communities through sustainable development initiatives, education, healthcare, and creating opportunities for those in need. We believe in lasting change that comes from within communities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A world where every individual has access to basic necessities, quality education, healthcare, and the opportunity to reach their full potential regardless of their circumstances.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Hope Foundation was established in 2013 by a group of passionate individuals who witnessed firsthand the challenges faced by underserved communities. What started as a small initiative to provide educational materials to rural schools has grown into a comprehensive organization touching thousands of lives.
              </p>
              <p>
                Over the years, we've expanded our programs to include healthcare initiatives, community development projects, and sustainable livelihood programs. Our approach is holistic – we don't just provide immediate relief, but work with communities to build long-term solutions.
              </p>
              <p>
                Today, we work with over 50 communities, have mobilized more than 500 dedicated volunteers, and have successfully completed over 200 projects. But our work is far from over. Every day, we continue to strive towards our vision of creating lasting positive change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border text-center">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Integrity</h3>
                <p className="text-muted-foreground">
                  We operate with transparency and accountability in everything we do.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Compassion</h3>
                <p className="text-muted-foreground">
                  We approach every situation with empathy and genuine care for people.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Sustainability</h3>
                <p className="text-muted-foreground">
                  We create solutions that empower communities for generations to come.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
