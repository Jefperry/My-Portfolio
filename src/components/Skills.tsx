import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: [
        { name: "JavaScript / TypeScript", level: 95 },
        { name: "React / Next.js", level: 95 },
        { name: "React Native / Expo", level: 88 },
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "Node.js / Hono", level: 88 },
        { name: "SQL", level: 88 },
      ],
    },
    {
      title: "AI & Automation",
      skills: [
        { name: "OpenAI / Anthropic APIs", level: 90 },
        { name: "LangChain", level: 85 },
        { name: "AI Agents", level: 85 },
        { name: "Claude Code", level: 90 },
        { name: "Workflow Automation", level: 88 },
      ],
    },
    {
      title: "Cloud & Infrastructure",
      skills: [
        { name: "Docker", level: 85 },
        { name: "Cloudflare", level: 82 },
        { name: "Hetzner / Coolify", level: 80 },
        { name: "CI/CD", level: 78 },
        { name: "Azure Cloud", level: 75 },
      ],
    },
    {
      title: "Tools & Databases",
      skills: [
        { name: "PostgreSQL", level: 88 },
        { name: "MySQL / SQLite / Supabase", level: 85 },
        { name: "Redis / BullMQ", level: 80 },
        { name: "Drizzle ORM", level: 85 },
        { name: "Git / GitHub", level: 90 },
        { name: "Vercel", level: 88 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subheading mb-4">MY EXPERTISE</p>
          <h2 className="section-heading">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </motion.div>

        {/* Skill Bars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + categoryIndex * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold mb-6 text-primary">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <h3 className="text-lg font-semibold mb-4 text-muted-foreground">Key Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["AI & Automation", "Mobile Development", "API Integration", "Database Optimization", "Cloud & DevOps", "Technical Support", "Continuous Learning", "Team Collaboration"].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
