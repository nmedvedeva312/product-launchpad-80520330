import { AnimatedSection, AnimatedStagger, AnimatedStaggerItem } from "./AnimatedSection";
import { motion } from "framer-motion";
import { Briefcase, Lightbulb, Presentation, Users } from "lucide-react";

const outcomes = [
  {
    number: "01",
    icon: Users,
    title: "4 Team-Based Projects",
    description: "Work in cross-functional teams on real product challenges across different industries and domains.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Your Own MVP",
    description: "Take your idea from concept to working prototype — complete with research, validation, and unit economics.",
  },
  {
    number: "03",
    icon: Briefcase,
    title: "Product Portfolio",
    description: "Graduate with documented case studies that showcase your product thinking and execution skills.",
  },
  {
    number: "04",
    icon: Presentation,
    title: "Investor-Ready Pitch Deck",
    description: "Create a polished pitch deck that effectively communicates your product's vision and business potential.",
  },
];

export const OutcomesSection = () => {
  return (
    <section className="section-padding">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <AnimatedSection direction="left">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-4 block">
              Tangible Outcomes
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              What You Will Build
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              This isn't just another theory course. You'll leave with real artifacts that 
              prove your skills and help you land your next opportunity.
            </p>
            
            <div className="flex items-center gap-4 p-4 bg-highlight rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                <Presentation className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <p className="font-semibold">Final Presentation</p>
                <p className="text-sm text-muted-foreground">
                  Present your MVP to mentors and industry experts
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right side - Cards */}
          <AnimatedStagger className="space-y-4" staggerDelay={0.15}>
            {outcomes.map((outcome, index) => (
              <AnimatedStaggerItem key={index}>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group flex gap-4 p-5 bg-card rounded-xl border border-border hover:border-accent/30 hover:shadow-soft transition-all cursor-default"
                >
                  <span className="text-3xl font-bold text-accent/20 group-hover:text-accent/40 transition-colors">
                    {outcome.number}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <outcome.icon className="w-4 h-4 text-accent" />
                      <h3 className="font-semibold">{outcome.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {outcome.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatedStaggerItem>
            ))}
          </AnimatedStagger>
        </div>
      </div>
    </section>
  );
};
