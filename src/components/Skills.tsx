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
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "JavaScript/TypeScript", level: 88 },
        { name: "React", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "SQL", level: 88 },
        { name: "C", level: 75 },
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 80 },
        { name: "Azure", level: 75 },
        { name: "Google Cloud", level: 70 },
        { name: "Docker", level: 82 },
        { name: "Kubernetes", level: 70 },
        { name: "CI/CD", level: 78 },
      ],
    },
    {
      title: "Tools & Databases",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Git", level: 90 },
        { name: "Power BI", level: 82 },
        { name: "Linux", level: 80 },
      ],
    },
  ];

  const techStack = [
    "React", "Next.js", "TypeScript", "Python", "Java", "Node.js",
    "PostgreSQL", "MongoDB", "Docker", "AWS", "Git", "Supabase",
    "Power BI", "Tableau", "Flutter", "Bash"
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

        {/* Tech Stack Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {techStack.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Skill Bars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
          <h3 className="text-lg font-semibold mb-4 text-muted-foreground">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Problem-Solving", "Team Collaboration", "Critical Thinking", "Communication", "Leadership", "Adaptability"].map((skill) => (
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
