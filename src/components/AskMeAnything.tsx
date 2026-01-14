import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How do you approach database optimization in large-scale systems?",
    answer:
      "I analyze query performance, index strategically, and implement caching. At AUG/Prudential, my optimizations reduced processing time by 40% through smart SQL design and automation.",
  },
  {
    question: "What cybersecurity practices do you consider essential for modern applications?",
    answer:
      "Regular penetration testing, data encryption (AES/RSA), and compliance with standards like GDPR and ISO 27001 are crucial. I also advocate for least-privilege access and continuous monitoring.",
  },
  {
    question: "How do you stay current with evolving technologies in software development?",
    answer:
      "I contribute to open-source projects, experiment with new frameworks like Next.js, and follow industry leaders. Continuous learning through courses and hands-on projects keeps my skills sharp.",
  },
  {
    question: "What excites you most about working with AI technologies?",
    answer:
      "AI's potential to solve complex problems efficiently fascinates me. My note summarizer project demonstrates how AI can enhance productivity by intelligently processing information.",
  },
];

const AskMeAnything = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - Title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ask Me Anything.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A forward-thinking technologist who blends software development with robust cybersecurity practices to create efficient, secure solutions.
            </p>
          </motion.div>

          {/* Right side - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-border/50"
                >
                  <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline py-6 [&[data-state=open]>svg]:text-destructive [&>svg]:text-destructive">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AskMeAnything;
