import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Shield, Cloud, Users, Lightbulb } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Building scalable web applications with React, Next.js, Node.js, and modern frameworks.",
    },
    {
      icon: Database,
      title: "Database & SQL",
      description: "Designing efficient SQL solutions and database architectures that reduced processing time by 40%.",
    },
    {
      icon: Shield,
      title: "API Development",
      description: "Building RESTful APIs and integrations with FastAPI, Node.js, and JSON processing.",
    },
    {
      icon: Cloud,
      title: "Azure Cloud",
      description: "Deploying and managing applications on Azure Cloud with Docker, Kubernetes, and CI/CD pipelines.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subheading mb-4">ABOUT ME</p>
          <h2 className="section-heading">
            Passionate About <span className="text-gradient">Building Solutions</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden border border-border">
                <img
                  src={profilePhoto}
                  alt="Chi Jefperry Achu"
                  className="w-full aspect-[4/5] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-card border border-border rounded-2xl p-6 shadow-xl"
              >
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">3+</p>
                    <p className="text-xs text-muted-foreground">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-accent">3.54</p>
                    <p className="text-xs text-muted-foreground">GPA</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Solutions-focused <span className="text-foreground font-medium">software engineer</span> with 3 years of experience 
                developing engineering solutions, prototypes, and proof of concepts aligned to business objectives.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Proficient in <span className="text-foreground font-medium">Python, Azure Cloud, API development, and full-stack technologies</span>. 
                Experienced supporting analytics initiatives, testing frameworks, and engineering programs 
                while delivering quality results and meeting timelines.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently working part-time as a <span className="text-foreground font-medium">Frontend Developer at Mavoo</span> and 
                open to full-time opportunities where I can apply my technical expertise to build 
                impactful engineering solutions.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Team Collaboration</span>
              </div>
              <div className="flex items-center gap-3">
                <Lightbulb className="h-5 w-5 text-accent" />
                <span className="text-sm text-muted-foreground">Problem Solver</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 max-w-6xl mx-auto">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
