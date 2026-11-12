import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Award } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const workExperience = [
    {
      title: "Founder & Software Developer",
      company: "LandiSmart",
      location: "Remote",
      period: "May 2026 – Present",
      type: "Founder",
      achievements: [
        "Lead the technical architecture and implementation of an in-development property-management platform for African landlords, collaborating with other developers",
        "Build the web application and admin portal with Next.js and the mobile application with React Native and Expo, backed by PostgreSQL, Drizzle, Better Auth, Redis/BullMQ, Cloudflare, and Hetzner/Coolify infrastructure",
        "Develop and use a LangChain-based AI agent with OpenAI and Anthropic APIs to support engineering workflows; design integrations for payments (CamPay, Stripe), messaging, email, push notifications, analytics, and realtime services",
      ],
    },
    {
      title: "Software Developer",
      company: "Pinnacle Therapy Center",
      location: "Carling, Ontario",
      period: "July 2026 – Present",
      type: "Hybrid",
      achievements: [
        "Designed and deployed an AI-powered voice-response and automated appointment-scheduling workflow using Dialzara to reduce manual booking tasks",
        "Built and maintain the clinic website on GoDaddy; developed patient intake forms and a mobile-responsive booking system integrated with JaneApp",
        "Integrated an AI email-routing pipeline and third-party telehealth tools into the clinic's digital infrastructure; assist patients with booking problems, scheduling questions, and general website or technical issues",
      ],
    },
    {
      title: "Software Developer",
      company: "Mavoo",
      location: "Ottawa, Ontario",
      period: "November 2025 – May 2026",
      type: "Remote",
      achievements: [
        "Implemented the full web-application frontend using TypeScript and Next.js, integrating user-facing features with backend APIs while collaborating with a development team",
        "Developed selected mobile application screens and features, including sign-in and home screens, using Claude Code in an AI-assisted development workflow",
      ],
    },
    {
      title: "Software Development & Systems Optimization Intern",
      company: "AUG / Prudential Beneficial Life Insurance",
      location: "Douala, Cameroon",
      period: "May 2024 – August 2024",
      type: "Remote",
      achievements: [
        "Optimized SQL database operations and automated insurance-policy validation, reducing processing time by 40% and improving client data-tracking efficiency by 20%",
        "Documented system changes, workflows, and configuration guides during a cloud migration of financial transaction systems under GDPR and financial regulatory requirements",
        "Conducted penetration testing and cybersecurity risk assessments across systems holding 10,000+ customer records",
      ],
    },
  ];

  const education = {
    degree: "Diploma in Computer Programming",
    school: "Algonquin College, Ottawa, Ontario",
    period: "Completed December 2025",
    gpa: "3.5 / 4.0",
    coursework: [
      "Object-Oriented Programming",
      "System Analysis & Design",
      "Database Management",
      "Web Development",
      "Data Analytics",
      "Network Programming",
    ],
  };

  const certifications = [
    "Agile Foundations",
    "Agile Development Practices",
    "Agile at Work: Building Your Agile Team",
    "Agile at Work: Getting Better with Agile Retrospectives",
    "Project Management Foundations: Requirements",
  ];

  return (
    <section id="experience" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subheading mb-4">MY JOURNEY</p>
          <h2 className="section-heading">
            Experience & <span className="text-gradient">Education</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>

            {workExperience.map((job, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-primary/30"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                
                <div className="bg-card border border-border rounded-2xl p-6 mb-6">
                  <h4 className="text-lg font-bold text-primary mb-1">
                    {job.title}
                  </h4>
                  <p className="text-foreground font-medium mb-3">
                    {job.company}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {job.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </span>
                    {job.type && (
                      <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                        {job.type}
                      </span>
                    )}
                  </div>
                  
                  <ul className="space-y-3">
                    {job.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                        className="flex gap-3 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-accent/10">
                <GraduationCap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="relative pl-8 border-l-2 border-accent/30">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
              
              <div className="bg-card border border-border rounded-2xl p-6">
                <h4 className="text-lg font-bold text-accent mb-1">
                  {education.degree}
                </h4>
                <p className="text-foreground font-medium mb-3">
                  {education.school}
                </p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {education.period}
                  </span>
                  <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs font-bold rounded-full">
                    GPA: {education.gpa}
                  </span>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">
                    Relevant Coursework
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {education.coursework.map((course, i) => (
                      <motion.span
                        key={course}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                        className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full"
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 bg-card border border-border rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Award className="h-5 w-5 text-accent" />
                </div>
                <h4 className="text-lg font-bold">Certifications</h4>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {certifications.map((cert) => (
                  <li key={cert} className="flex gap-3">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
