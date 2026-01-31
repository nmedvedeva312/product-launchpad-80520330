import { AnimatedSection, AnimatedStagger, AnimatedStaggerItem } from "./AnimatedSection";
import { 
  Brain, 
  Search, 
  Users, 
  Rocket, 
  Settings, 
  BarChart3, 
  TrendingUp, 
  Sparkles 
} from "lucide-react";

const skills = [
  {
    icon: Brain,
    title: "Product Thinking & Strategy",
    description: "Develop strategic mindset to identify opportunities and make data-driven decisions",
  },
  {
    icon: Search,
    title: "Market Research & Validation",
    description: "Learn to analyze markets, identify trends, and validate product opportunities",
  },
  {
    icon: Users,
    title: "Customer Development & JTBD",
    description: "Master interview techniques and Jobs To Be Done framework for deep user insights",
  },
  {
    icon: Rocket,
    title: "MVP Building & Experimentation",
    description: "Build minimum viable products quickly and run experiments to validate hypotheses",
  },
  {
    icon: Settings,
    title: "Product Delivery & Agile",
    description: "Lead development teams effectively using Agile and Lean methodologies",
  },
  {
    icon: BarChart3,
    title: "Metrics, Analytics & Unit Economics",
    description: "Track the right metrics, analyze funnels, and understand product economics",
  },
  {
    icon: TrendingUp,
    title: "Go-to-Market & Growth",
    description: "Launch products successfully and implement growth strategies that scale",
  },
  {
    icon: Sparkles,
    title: "AI & No-Code Tools",
    description: "Leverage modern AI and no-code tools to accelerate product development",
  },
];

export const SkillsSection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full pattern-grid" />
      </div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container-main relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-4 block">
            Comprehensive Curriculum
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Skills & Tools You Will Master
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            A complete toolkit for building successful products in the modern tech landscape
          </p>
        </AnimatedSection>

        <AnimatedStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <AnimatedStaggerItem key={index}>
              <div className="group h-full p-6 bg-primary-foreground/5 backdrop-blur-sm rounded-2xl border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-accent/30 transition-all cursor-default">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                  <skill.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">{skill.title}</h3>
                <p className="text-sm text-primary-foreground/60 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </AnimatedStaggerItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
};
