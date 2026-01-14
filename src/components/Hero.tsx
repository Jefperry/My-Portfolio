import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpeg";
import { useState, useEffect } from "react";

const rotatingSkills = [
  "Cybersecurity",
  "Software Development",
  "SQL Optimization",
  "Full-Stack Development",
  "Database Management",
  "Cloud Solutions",
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
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_70%)]" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="section-subheading mb-4"
            >
              HELLO, I'M
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Chi Jefperry
              <span className="block text-gradient">Achu</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium"
            >
              <span>Specializing in </span>
              <span className="relative inline-block min-w-[200px] md:min-w-[280px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentSkillIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute left-0 text-primary font-semibold"
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    {rotatingSkills[currentSkillIndex]}
                  </motion.span>
                </AnimatePresence>
                {/* Hidden text for screen readers */}
                <span className="sr-only">
                  {rotatingSkills.join(", ")}
                </span>
              </span>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed"
            >
              Innovative Computer Programming student with hands-on experience in full-stack development, 
              database optimization, and cybersecurity. Passionate about building scalable solutions 
              that make a real impact.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Button size="lg" className="glow-primary" asChild>
                <a href="#projects">
                  View My Work
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </a>
              </Button>
            </motion.div>
            
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex items-center gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Decorative Ring */}
              <motion.div
                className="absolute -inset-4 rounded-full border-2 border-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-8 rounded-full border border-accent/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Image Container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glow-primary border-4 border-primary/20">
                <img
                  src={profilePhoto}
                  alt="Chi Jefperry Achu"
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                Open to Work 🚀
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
