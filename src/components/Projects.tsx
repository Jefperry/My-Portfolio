import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Code2, Brain, CreditCard, FileText, Monitor, BarChart3, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      icon: Monitor,
      title: "Collaborative AI IDE",
      description: "Developed proof of concept for real-time collaborative coding platform with AI-powered component generation. Engineered WebSocket-based synchronization and Monaco code editor integration with pragmatic architecture meeting performance and innovation goals.",
      technologies: ["Next.js", "TypeScript", "Azure", "Python", "WebSocket", "Monaco Editor"],
      gradient: "from-blue-500 to-cyan-500",
      demoLink: "https://ai-app-builder-zeta.vercel.app/",
      featured: true,
    },
    {
      icon: BarChart3,
      title: "AI-Powered Analytics Platform",
      description: "Built engineering solution supporting analytics with Python API development and vector database integration. Developed prototype for semantic search and document processing with cloud deployment, monitoring, and operational support for production.",
      technologies: ["React", "PostgreSQL", "Python", "FastAPI", "Cloud Deployment"],
      gradient: "from-purple-500 to-pink-500",
      demoLink: "https://study-assistant-ai-five.vercel.app/",
      featured: true,
    },
    {
      icon: Landmark,
      title: "Financial Platform",
      description: "Engineered full-stack solution for financial management with focus on security, integration, and operability. Participated in conceptual and logical engineering designs for data models and system architecture with documented infrastructure.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Cloud Infrastructure"],
      gradient: "from-green-500 to-emerald-500",
      demoLink: "https://con-lify-oebtc9n13-jefperrys-projects.vercel.app/",
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subheading mb-4">PORTFOLIO</p>
          <h2 className="section-heading">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A collection of engineering projects showcasing expertise in full-stack development,
            API integration, cloud deployment, and analytics solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group relative bg-card border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/50 ${project.featured ? "hover:shadow-2xl" : ""
                }`}
            >
              {/* Gradient Top Bar */}
              <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-8">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="h-7 w-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  {project.demoLink && (
                    <Button variant="outline" size="sm" className="group/btn" asChild>
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/Jefperry" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View More on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
