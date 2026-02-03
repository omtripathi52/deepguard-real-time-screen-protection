import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { MotionWrapper } from "@/components/ui/motion-wrapper";

const faqs = [
  {
    question: "Is DeepGuard free?",
    answer: "Yes, DeepGuard is completely free to download and use. No hidden costs, no premium tiers, no subscriptions.",
  },
  {
    question: "Does it send my data anywhere?",
    answer: "No. DeepGuard runs 100% offline on your computer. No data is ever uploaded or transmitted. Your privacy is guaranteed because there's simply no network communication.",
  },
  {
    question: "What platforms are supported?",
    answer: "Currently Windows 10/11. Mac and Linux versions are in development and coming soon.",
  },
  {
    question: "How accurate is it?",
    answer: "DeepGuard uses machine learning models trained on large deepfake datasets. It provides confidence levels rather than absolute answers, because no detector is perfect. You'll see Real, Likely Real, Uncertain, Likely Fake, or Deepfake based on the model's confidence.",
  },
  {
    question: "Does it slow down my computer?",
    answer: "No. DeepGuard is optimized for real-time performance with minimal resource usage. It runs efficiently in the background without affecting your normal computer usage.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 relative">
      <div className="absolute inset-0 bg-glow opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <MotionWrapper className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers.
          </p>
        </MotionWrapper>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="glass-card rounded-xl px-6 border border-border/50 data-[state=open]:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
