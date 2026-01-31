import { AnimatedSection, AnimatedStagger, AnimatedStaggerItem } from "./AnimatedSection";
import { motion } from "framer-motion";
import { Zap, Search, PenTool, Workflow, CheckCircle2 } from "lucide-react";

const aiFeatures = [
  {
    icon: Search,
    title: "Accelerate Research",
    description: "Use AI to analyze markets, competitors, and user feedback 10x faster",
  },
  {
    icon: PenTool,
    title: "Prototype MVPs",
    description: "Build functional prototypes with no-code and AI-powered tools in hours, not weeks",
  },
  {
    icon: Workflow,
    title: "Automate Workflows",
    description: "Set up automated processes for user research, analytics, and reporting",
  },
  {
    icon: Zap,
    title: "Validate Ideas Faster",
    description: "Run experiments and gather insights using AI-assisted methods",
  },
];

export const AIAdvantageSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <AnimatedSection direction="left" className="order-2 lg:order-1">
            <div className="relative">
              {/* Main card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative bg-card rounded-2xl border border-border p-8 shadow-soft-xl"
              >
                {/* AI badge */}
                <div className="absolute -top-4 -right-4 px-4 py-2 bg-accent text-accent-foreground text-sm font-semibold rounded-full shadow-accent">
                  AI-Powered
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                      <Zap className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold">Modern Product Toolkit</p>
                      <p className="text-sm text-muted-foreground">Tools used by top PMs</p>
                    </div>
                  </div>

                  <div className="h-px bg-border" />

                  <div className="grid grid-cols-2 gap-4">
                    {["ChatGPT", "Figma AI", "Notion AI", "Amplitude", "Miro", "Make/Zapier"].map((tool) => (
                      <div key={tool} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        <span>{tool}</span>
                      </div>
                    ))}
                  </div>

                  <div className="h-px bg-border" />

                  <div className="bg-highlight rounded-xl p-4">
                    <p className="text-sm font-medium text-highlight-foreground">
                      "AI skills are no longer optional for PMs — they're essential for staying competitive."
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating decoration */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 rounded-3xl blur-2xl" />
            </div>
          </AnimatedSection>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <AnimatedSection>
              <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-4 block">
                Future-Ready Skills
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                AI & No-Code Advantage
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Learn to leverage cutting-edge AI and no-code tools that modern product 
                managers use to work smarter, not harder.
              </p>
            </AnimatedSection>

            <AnimatedStagger className="space-y-4" staggerDelay={0.1}>
              {aiFeatures.map((feature, index) => (
                <AnimatedStaggerItem key={index}>
                  <div className="flex gap-4 p-4 rounded-xl hover:bg-card hover:shadow-soft transition-all">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </AnimatedStaggerItem>
              ))}
            </AnimatedStagger>
          </div>
        </div>
      </div>
    </section>
  );
};
