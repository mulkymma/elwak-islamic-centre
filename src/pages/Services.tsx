import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, HeartHandshake, Landmark, Stethoscope, Users } from "lucide-react";

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-secondary to-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            At Elwak Islamic Centre, we are committed to uplifting our community through education,
            faith, social support, and development programs that inspire change and bring hope to
            those in need.
          </p>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Education */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Education Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We provide Islamic and formal education programs for children and youth,
                  empowering them with both spiritual and academic knowledge to build a brighter
                  future.
                </p>
              </CardContent>
            </Card>
 {/* Health */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <Stethoscope className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Health & Wellness</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Through medical camps and awareness programs, we promote healthcare access,
                  cleanliness, and mental well-being.
                </p>
              </CardContent>
            </Card>
         
            {/* Faith & Guidance */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <Landmark className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Faith & Guidance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We offer religious classes, dawah activities, and counseling that strengthen
                  Islamic values and promote unity, peace, and moral development.
                </p>
              </CardContent>
            </Card>

            {/* Charity & Aid */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <HeartHandshake className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Charity & Relief Aid</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We distribute food, clothing, and financial support to vulnerable families,
                  especially during Ramadan and times of crisis.
                </p>
              </CardContent>
            </Card>

            {/* Community Empowerment */}
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Community Empowerment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We organize skills training, youth mentorship, and women empowerment programs to
                  promote self-reliance and community leadership.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
