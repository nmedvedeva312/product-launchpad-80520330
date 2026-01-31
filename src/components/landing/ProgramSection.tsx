import { AnimatedSection } from "./AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookOpen, Search, Layers, Settings, Rocket, BarChart3, Presentation } from "lucide-react";

const programBlocks = [
  {
    id: "block-1",
    icon: BookOpen,
    title: "Block 1: Product, Entrepreneurship & PM Role",
    modules: [
      "1. Introduction & Product Mindset",
      "2. Building Successful Products & Lean Canvas",
      "3. Market & Opportunity Analysis",
      "4. Product Strategy & Business Models",
      "5. Competitive Analysis",
    ],
  },
  {
    id: "block-2",
    icon: Search,
    title: "Block 2: Product Discovery",
    modules: [
      "6. User Segmentation & Customer Analysis",
      "7. Customer Development & Jobs To Be Done",
      "8. Idea Generation & Hypotheses",
      "9. Hypothesis Validation",
    ],
  },
  {
    id: "block-3",
    icon: Layers,
    title: "Block 3: UX, Prototyping & MVP",
    modules: [
      "10. User Experience & Product Design",
      "11. MVP & Presale (AI-powered MVPs)",
    ],
  },
  {
    id: "block-4",
    icon: Settings,
    title: "Block 4: Product Delivery",
    modules: [
      "12. Product Initiation & Teams",
      "13. Product Development Methodologies",
      "14. Planning & Requirements",
      "15. Backlog & Prioritization",
      "16. Estimation & Team Efficiency",
    ],
  },
  {
    id: "block-5",
    icon: Rocket,
    title: "Block 5: Launch, Growth & Investments",
    modules: [
      "17. UX Testing & Experiments",
      "18. Go-To-Market & Growth",
      "19. Fundraising & Pitching",
    ],
  },
  {
    id: "block-6",
    icon: BarChart3,
    title: "Block 6: Metrics & Economics",
    modules: [
      "20. Product Metrics",
      "21. Product Analytics",
      "22. Mobile Funnel & Monetization",
      "23. Unit Economics & P&L",
    ],
  },
  {
    id: "final",
    icon: Presentation,
    title: "Final: Capstone Project",
    modules: [
      "24. Packaging Product Experience with AI",
      "25. Final Pitch Deck Presentation",
    ],
  },
];

export const ProgramSection = () => {
  return (
    <section className="section-padding">
      <div className="container-main">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-4 block">
            Structured Learning Path
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Course Program
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            25 modules organized into 6 comprehensive blocks, plus a final capstone project
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {programBlocks.map((block) => (
                <AccordionItem
                  key={block.id}
                  value={block.id}
                  className="border border-border rounded-xl px-6 bg-card data-[state=open]:shadow-soft-lg transition-shadow"
                >
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <block.icon className="w-5 h-5 text-accent" />
                      </div>
                      <span className="font-semibold">{block.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <ul className="space-y-2 ml-14">
                      {block.modules.map((module, idx) => (
                        <li
                          key={idx}
                          className="text-muted-foreground flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span>{module}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>

        {/* Module count summary */}
        <AnimatedSection delay={0.3} className="mt-12">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="px-6 py-4 bg-secondary rounded-xl">
              <p className="text-3xl font-bold text-accent">25</p>
              <p className="text-sm text-muted-foreground">Modules</p>
            </div>
            <div className="px-6 py-4 bg-secondary rounded-xl">
              <p className="text-3xl font-bold text-accent">6</p>
              <p className="text-sm text-muted-foreground">Learning Blocks</p>
            </div>
            <div className="px-6 py-4 bg-secondary rounded-xl">
              <p className="text-3xl font-bold text-accent">4+</p>
              <p className="text-sm text-muted-foreground">Hands-on Projects</p>
            </div>
            <div className="px-6 py-4 bg-secondary rounded-xl">
              <p className="text-3xl font-bold text-accent">1</p>
              <p className="text-sm text-muted-foreground">Personal MVP</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
