import { AnimatedSection } from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-16 bg-card border-t border-border">
      <div className="container-main">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left - Branding */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">
                Product Management in IT
              </h3>
              <p className="text-muted-foreground max-w-md">
                From Idea to MVP & Growth — the practical course for aspiring 
                and experienced product managers.
              </p>
            </div>

            {/* Right - CTA */}
            <Button variant="accent" size="lg" className="group">
              Apply for the Course
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2026 Product Management Course. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
};
