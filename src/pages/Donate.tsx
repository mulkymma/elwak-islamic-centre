import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, CreditCard, CheckCircle } from "lucide-react";

const Donate = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-accent to-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">Make a Donation</h1>
            <p className="text-lg lg:text-xl text-primary-foreground/90 leading-relaxed">
              Your generous contribution helps us continue our mission of creating positive change in communities.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Instructions */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">How to Donate via M-Pesa</h2>
            
            <Card className="border-border mb-12">
              <CardHeader className="bg-secondary">
                <div className="flex items-center gap-3">
                  <div className="bg-primary p-2 rounded-lg">
                    <Smartphone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">M-Pesa Paybill</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Go to M-Pesa Menu</h3>
                      <p className="text-muted-foreground">On your phone, open the M-Pesa menu and select "Lipa na M-Pesa"</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Select Paybill</h3>
                      <p className="text-muted-foreground">Choose "Pay Bill" option from the menu</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Enter Paybill Number</h3>
                      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-2">
                        <p className="text-sm text-muted-foreground mb-1">Paybill Number:</p>
                        <p className="text-2xl font-bold text-primary">400200</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Account Number</h3>
                      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-2">
                        <p className="text-sm text-muted-foreground mb-1">Account Number:</p>
                        <p className="text-xl font-bold text-primary">HOPE2024</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">5</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Enter Amount</h3>
                      <p className="text-muted-foreground">Enter the amount you wish to donate</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">6</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Enter M-Pesa PIN</h3>
                      <p className="text-muted-foreground">Enter your M-Pesa PIN to complete the transaction</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Confirmation</h3>
                      <p className="text-muted-foreground">You will receive an M-Pesa confirmation message. Thank you for your support!</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Important Notes */}
            <Card className="border-border bg-secondary">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-primary p-2 rounded-lg">
                    <CreditCard className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">Important Information</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>All donations are tax-deductible and you will receive a receipt via SMS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>100% of your donation goes directly to our programs and initiatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>For large donations or other payment methods, please contact us</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Standard M-Pesa transaction charges may apply</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;
