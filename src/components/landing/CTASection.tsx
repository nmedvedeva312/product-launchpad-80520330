import { AnimatedSection } from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 pattern-grid opacity-5" />

      <div className="container-main relative z-10">
        <AnimatedSection className="max-w-3xl mx-auto text-center text-primary-foreground">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Next cohort starts soon</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Turn Your Idea Into a Real Product
          </h2>
          
          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-10 max-w-xl mx-auto">
            Join a community of ambitious product builders. Learn by doing. 
            Graduate with a portfolio that opens doors.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                size="xl" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent hover:shadow-lg group"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                size="xl" 
                variant="outline" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50"
              >
                <Download className="w-5 h-5" />
                Download Program PDF
              </Button>
            </motion.div>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-primary-foreground/10"
          >
            <div className="flex flex-wrap justify-center gap-8 text-primary-foreground/60 text-sm">
              <span>✓ Flexible payment options</span>
              <span>✓ Certificate upon completion</span>
              <span>✓ Lifetime community access</span>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};
