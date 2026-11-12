import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  ExternalLink,
  Github,
  Monitor,
  BarChart3,
  Landmark,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const logoUrl = (name: string) => `${import.meta.env.BASE_URL}logos/${name}`;

const currentWork = [
  {
    logo: logoUrl("landismart.png"),
    title: "LandiSmart",
    role: "Founder & Software Developer",
    status: "In Development",
    description:
      "Leading the technical architecture and implementation of a property-management platform for African landlords. Building the web application and admin portal with Next.js, and the mobile application with React Native and Expo, backed by PostgreSQL, Drizzle, Better Auth, Redis/BullMQ, Cloudflare, and Hetzner/Coolify.",
    technologies: ["Next.js", "React Native", "Expo", "PostgreSQL", "Drizzle ORM", "Redis/BullMQ", "Cloudflare", "LangChain"],
    gradient: "from-lime-500 to-emerald-500",
    demoLink: "https://landismart.com/en",
  },
  {
    logo: logoUrl("pinnacle.png"),
    title: "Pinnacle Therapy Center",
    role: "Software Developer",
    status: "Ongoing",
    description:
      "Designed and deployed an AI-powered voice-response and automated appointment-scheduling workflow, and built a mobile-responsive booking system with patient intake forms integrated with JaneApp. Integrated an AI email-routing pipeline and third-party telehealth tools into the clinic's digital infrastructure.",
    technologies: ["Dialzara", "JaneApp", "AI Email Routing", "Telehealth", "Automation"],
    gradient: "from-cyan-500 to-blue-500",
    demoLink: null,
  },
  {
    logo: logoUrl("mavoo.png"),
    title: "Mavoo",
    role: "Software Developer",
    status: "Shipped",
    description:
      "Implemented the full web-application frontend with TypeScript and Next.js, integrating user-facing features with backend APIs while collaborating with a development team. Developed selected mobile application screens and features, including sign-in and home screens, in an AI-assisted workflow using Claude Code.",
    technologies: ["TypeScript", "Next.js", "React Native", "Claude Code", "REST APIs"],
    gradient: "from-purple-500 to-pink-500",
    demoLink: null,
  },
];

const engineeringProjects = [
  {
    icon: Monitor,
    title: "Collaborative AI IDE",
    description:
      "Proof of concept for a real-time collaborative coding platform with AI-powered component generation, WebSocket-based synchronization, and Monaco code editor integration.",
    technologies: ["Next.js", "TypeScript", "Azure", "Python", "WebSocket"],
    demoLink: "https://ai-app-builder-zeta.vercel.app/",
  },
  {
    icon: BarChart3,
    title: "AI-Powered Analytics Platform",
    description:
      "Analytics solution with Python API development and vector database integration, supporting semantic search and document processing with cloud deployment and monitoring.",
    technologies: ["React", "PostgreSQL", "Python", "FastAPI", "Cloud Deployment"],
    demoLink: "https://study-assistant-ai-five.vercel.app/",
  },
  {
    icon: Landmark,
    title: "Financial Platform",
    description:
      "Full-stack financial management solution focused on security, integration, and operability, with documented data models and system architecture.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Cloud Infrastructure"],
    demoLink: "https://con-lify-oebtc9n13-jefperrys-projects.vercel.app/",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            What I'm <span className="text-gradient">Building Now</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Currently building products as the founder of LandiSmart while developing software
            for clinics and clients — plus a track record of shipping full-stack, mobile, and
            AI-powered solutions.
          </p>
        </motion.div>

        {/* Current Work */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {currentWork.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-2xl flex flex-col"
            >
              <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-24 h-16 rounded-xl bg-white border border-border shadow-sm flex items-center justify-center p-2.5 group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={project.logo}
                      alt={`${project.title} logo`}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-primary/80 font-medium mb-3">{project.role}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm flex-1">
                  {project.description}
                </p>

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

                {project.demoLink && (
                  <Button variant="outline" size="sm" className="group/btn self-start" asChild>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      Visit
                    </a>
                  </Button>
                )}
              </div>

              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
            </motion.div>
          ))}
        </div>

        {/* Engineering Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-6xl mx-auto mt-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl font-bold">Selected Engineering Projects</h3>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {engineeringProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 flex flex-col"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <project.icon className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-bold mb-2">{project.title}</h4>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-muted text-muted-foreground text-[11px] font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
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
