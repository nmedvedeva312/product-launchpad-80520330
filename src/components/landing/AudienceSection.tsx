import { AnimatedSection, AnimatedStagger, AnimatedStaggerItem } from "./AnimatedSection";
import { Rocket, Lightbulb, ArrowRightLeft, Target } from "lucide-react";

const audienceCards = [
  {
    icon: Rocket,
    title: "Aspiring Product Managers",
    description: "Start your PM career with real-world skills and hands-on experience building actual products.",
  },
  {
    icon: Lightbulb,
    title: "Founders & Entrepreneurs",
    description: "Learn to validate ideas fast, build MVPs, and create products people actually want to use.",
  },
  {
    icon: ArrowRightLeft,
    title: "Career Changers",
    description: "Transition from BA, PO, UX, Marketing, or Development into product management roles.",
  },
  {
    icon: Target,
    title: "Experienced PMs",
    description: "Move beyond backlog management to true product ownership and strategic thinking.",
  },
];

export const AudienceSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-main">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Who This Course Is For
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're starting fresh or leveling up, this course meets you where you are
          </p>
        </AnimatedSection>

        <AnimatedStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audienceCards.map((card, index) => (
            <AnimatedStaggerItem key={index}>
              <div className="group h-full p-6 bg-card rounded-2xl border border-border hover-lift cursor-default">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <card.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </AnimatedStaggerItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
};
