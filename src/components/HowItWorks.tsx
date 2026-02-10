import { motion } from "framer-motion";
import { Camera, Brain, Bell, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Report Your Item",
    description: "Upload a photo and describe your lost or found item with details.",
  },
  {
    icon: Brain,
    title: "AI Analyzes & Matches",
    description: "Our AI compares images and descriptions to find potential matches.",
  },
  {
    icon: Bell,
    title: "Get Notified",
    description: "Receive instant alerts when a match is found for your item.",
  },
  {
    icon: CheckCircle,
    title: "Claim & Reunite",
    description: "Verify ownership, pay a small fee, and get your item back!",
  },
];

const HowItWorks = () => {
  return (
    <section className="border-t bg-muted/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-foreground">
            How It Works
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Four simple steps to recover your lost belongings using our smart platform.
          </p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <step.icon className="h-7 w-7 text-primary" />
              </div>
              <div className="mb-1 text-xs font-semibold text-primary">
                Step {i + 1}
              </div>
              <h3 className="font-heading text-base font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
