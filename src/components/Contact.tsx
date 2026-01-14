import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jefperry89@gmail.com",
      href: "mailto:jefperry89@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 437-366-0247",
      href: "tel:+14373660247",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ontario, Canada",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Jefperry",
      username: "@Jefperry",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jefperrychi",
      username: "jefperrychi",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subheading mb-4">GET IN TOUCH</p>
          <h2 className="section-heading">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I'm currently looking for full-time opportunities as a Junior Software Developer. 
            Let's connect and discuss how I can contribute to your team!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-10">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="p-3 rounded-xl bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-border pt-8">
              <h4 className="text-lg font-semibold mb-6">Find me online</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 px-5 py-3 bg-card border border-border rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  >
                    <social.icon className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">{social.label}</p>
                      <p className="text-xs text-muted-foreground">{social.username}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 rounded-3xl p-8 border border-primary/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6">
                  <Send className="h-8 w-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">
                  Ready to bring value to your team
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  With hands-on experience in full-stack development, database optimization, 
                  and cybersecurity, I'm eager to contribute to meaningful projects while 
                  continuing to grow as a developer.
                </p>
                
                <div className="space-y-4">
                  <Button size="lg" className="w-full glow-primary" asChild>
                    <a href="mailto:jefperry89@gmail.com">
                      <Mail className="h-5 w-5 mr-2" />
                      Send me an Email
                    </a>
                  </Button>
                  
                  <Button size="lg" variant="outline" className="w-full" asChild>
                    <a
                      href="https://www.linkedin.com/in/jefperrychi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5 mr-2" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
                
                <p className="text-center text-sm text-muted-foreground mt-6">
                  Currently available for full-time positions
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-20 pt-8 border-t border-border"
      >
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Chi Jefperry Achu. Built with React & Tailwind CSS.
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
