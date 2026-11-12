import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What kind of software do you build?",
    answer:
      "I build responsive web and mobile applications with TypeScript, React, Next.js, React Native, and Expo. At LandiSmart I lead the architecture for a property-management platform, and I've shipped frontends and mobile screens for clients like Mavoo.",
  },
  {
    question: "How do you use AI in your work?",
    answer:
      "I integrate OpenAI and Anthropic APIs with LangChain to build AI agents and automate business workflows. At Pinnacle Therapy Center I deployed an AI-powered voice-response and appointment-scheduling workflow, plus an AI email-routing pipeline that cut manual booking and triage tasks.",
  },
  {
    question: "How do you approach database and performance work?",
    answer:
      "I design and optimize SQL-backed systems for speed and reliability. At AUG/Prudential my SQL optimization and automated policy validation reduced processing time by 40% and improved client data-tracking efficiency by 20%.",
  },
  {
    question: "How do you deploy and run what you build?",
    answer:
      "I ship with Docker and CI/CD pipelines, and I've deployed on Cloudflare, Hetzner with Coolify, Vercel, and Azure Cloud — using Redis/BullMQ for background jobs and Drizzle ORM with PostgreSQL for data.",
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
              A software developer who builds web and mobile products with modern TypeScript
              stacks, and who brings AI, automation, and dependable technical support to every team.
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
