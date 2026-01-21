import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpeg";
import { useState, useEffect } from "react";

const rotatingSkills = [
  "Software Developer",
  "SQL Optimizer",
  "Full-Stack Developer",
  "Database Administrator",
  "Cloud Solutions Architect",
];

const Hero = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % rotatingSkills.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { icon: Github, href: "https://github.com/Jefperry", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/jefperrychi", label: "LinkedIn" },
    { icon: Mail, href: "mailto:jefperry89@gmail.com", label: "Email" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] opacity-50" />
        <div className="absolute bottom-1/4 -left-40 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">

          {/* Status Indicator */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-8 bg-card/50 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-white/80">Available for work</span>
          </motion.div>

          {/* Main Heading Layered Behind Image */}
          <div className="relative w-full max-w-5xl mx-auto mb-12">

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight tracking-tight mb-2 relative z-0"
            >
              Hello I'm <span className="text-white">Jef</span>
            </motion.h1>

            <div className="relative">
              {/* Profile Image - Centered and Overlapping */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                className="relative z-10 w-64 h-80 md:w-80 md:h-[450px] mx-auto -mt-10 md:-mt-20 overflow-hidden rounded-t-full rounded-b-3xl border-b border-white/10 shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20" />
                <img
                  src={profilePhoto}
                  alt="Chi Jefperry Achu"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>

              {/* Roles Text Layout */}
              <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 z-0 hidden md:block">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-5xl md:text-7xl lg:text-8xl font-bold text-white/10 flex justify-between w-full px-4 items-center"
                >
                  <span>Digital</span>
                  <span>Designer</span>
                </motion.h2>
              </div>
            </div>

          </div>

          {/* Dynamic Roles/Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 mt-4 max-w-2xl mx-auto font-light"
          >
            <span className="inline-block">I am a&nbsp;</span>
            <span className="relative inline-block min-w-[280px] text-left">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentSkillIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-0 left-0 text-white font-medium italic"
                >
                  {rotatingSkills[currentSkillIndex]}
                </motion.span>
              </AnimatePresence>
              {/* Spacer for layout stability */}
              <span className="invisible">Cybersecurity Analyst</span>
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Button size="lg" className="h-14 px-8 text-lg bg-white text-black hover:bg-white/90 rounded-full font-medium" asChild>
              <a href="#projects" className="flex items-center gap-2">
                Let's talk
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                  <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </Button>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-muted-foreground hover:text-white transition-colors"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Footer Stats/Info Overlay */}
      <div className="absolute bottom-0 left-0 right-0 w-full p-8 border-t border-white/5 bg-background/50 backdrop-blur-md hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary/50"></span>
            <span>[01] My Experience</span>
          </div>
          <p className="max-w-md text-center">
            I help founders design modern, high-performing websites that balance clarity & real outcomes.
          </p>
          <div>
            SCROLL DOWN
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
