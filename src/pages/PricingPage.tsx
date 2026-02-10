import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: "₹0",
    description: "For casual users",
    features: [
      "Report up to 3 items/month",
      "Basic AI matching",
      "Community search",
      "Email notifications",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Standard",
    price: "₹20",
    period: "per claim",
    description: "Most popular for students",
    features: [
      "Unlimited reports",
      "Advanced AI matching",
      "Priority listing",
      "Instant notifications",
      "Photo enhancement",
    ],
    cta: "Start Claiming",
    popular: true,
  },
  {
    name: "Premium",
    price: "₹50",
    period: "per listing",
    description: "For valuable items",
    features: [
      "Everything in Standard",
      "Featured placement",
      "Multi-location broadcast",
      "Dedicated support",
      "Insurance coverage",
      "48-hour guarantee",
    ],
    cta: "Go Premium",
    popular: false,
  },
];

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="font-heading text-4xl font-bold text-foreground">
            Simple, Fair Pricing
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Only pay when you successfully recover your item. No hidden fees.
          </p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card
                className={`relative flex h-full flex-col p-6 shadow-card ${
                  plan.popular ? "border-2 border-primary" : ""
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                  <div className="mt-4">
                    <span className="font-heading text-3xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="ml-1 text-sm text-muted-foreground">
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  className="mt-6 w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Revenue info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-2xl rounded-xl border bg-accent/50 p-6 text-center"
        >
          <h3 className="font-heading text-lg font-semibold text-foreground">
            For Businesses & Advertisers
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Reach thousands of local users with targeted ads on our platform.
            Contact us for advertising partnerships and campus deals.
          </p>
          <Button variant="outline" className="mt-4">
            Partner With Us
          </Button>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
