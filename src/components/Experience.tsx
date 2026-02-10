import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const workExperience = [
    {
      title: "Frontend Developer",
      company: "Mavoo",
      location: "Ottawa, Ontario",
      period: "November 2025 – Present",
      type: "Part-time",
      achievements: [
        "Develop new solutions for engineering programs building React/Next.js applications with analytics focus aligned to business needs",
        "Participate in conceptual and logical engineering designs for data visualization components and frontend architecture",
        "Work with internal technology partners to ensure engineering solutions meet technical direction, performance, and innovation goals",
        "Build analytical dashboards and reporting solutions supporting business intelligence initiatives",
      ],
    },
    {
      title: "IT Support Specialist",
      company: "Pinnacle Therapy Center",
      location: "Ottawa, Ontario",
      period: "May 2025 – August 2025",
      achievements: [
        "Designed and deployed engineering solutions automating data validation processes, reducing processing time by 40%",
        "Analyzed technical requirements to recommend pragmatic solutions for system optimization and efficiency improvements",
        "Documented system components, applications, and infrastructure ensuring accuracy of technical baseline documents",
        "Participated in quality reviews ensuring specifications fulfilled business objectives",
      ],
    },
    {
      title: "Software Optimizer Intern",
      company: "AUG Prudential Life Insurance",
      location: "Douala, Cameroon",
      period: "January 2024 – August 2024",
      achievements: [
        "Developed solutions for insurance automation program reducing processing time by 40% across 10,000+ records aligned to business and technology objectives",
        "Developed client tracking system prototype increasing efficiency by 20%, validating concepts before full implementation",
        "Analyzed business requirements to recommend sound engineering solutions for database optimization and automation",
        "Worked with business stakeholders and internal technology partners to ensure solutions met technical direction and performance goals",
        "Documented and verified system components, applications, infrastructure, security, integration, and operability during Azure cloud migration",
        "Participated in quality management reviews of designs and prototypes ensuring 90%+ test coverage",
        "Developed as-built documentation establishing detail levels using configuration management processes",
        "Identified and recommended opportunities to enhance operational efficiency through automation and process improvements",
      ],
    },
  ];

  const education = {
    degree: "Diploma in Computer Programming (Co-op)",
    school: "Algonquin College of Applied Arts and Technology",
    period: "Class of 2025",
    gpa: "3.54 / 4.0",
    coursework: [
      "Object-Oriented Programming",
      "System Analysis & Design",
      "Database Management",
      "Web Development",
      "Data Analytics",
      "Network Programming",
    ],
  };

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
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {job.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </span>
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

            {/* Activities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 bg-card border border-border rounded-2xl p-6"
            >
              <h4 className="text-lg font-bold mb-4">Activities & Contributions</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  Volunteer English Tutor for Kids with Disabilities at Algonquin College CAL Center
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  Active open-source contributor, collaborating with developers worldwide
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
