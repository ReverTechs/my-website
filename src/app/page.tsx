"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold gradient-text">
              Blessings Chilemba
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </div>
            <button className="md:hidden text-foreground">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-10"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Full Stack</span>
              <br />
              Developer
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Creating innovative web solutions with modern technologies. 
              Passionate about building exceptional digital experiences that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
                View My Work
              </button>
              <button className="px-8 py-4 border border-border text-foreground rounded-lg font-semibold hover:bg-accent transition-all duration-300">
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-5 w-16 h-16 bg-accent/20 rounded-full animate-pulse delay-500"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate about technology and innovation, I bring creativity and technical expertise to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-primary rounded-2xl flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary-foreground">BC</div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <h3 className="text-3xl font-bold mb-6">Blessings Chilemba</h3>
              <p className="text-lg text-muted-foreground mb-6">
                I&apos;m a passionate full-stack developer with expertise in modern web technologies. 
                I love creating beautiful, functional, and user-friendly applications that solve real-world problems.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="glass rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="glass rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Node.js", "Python", "MongoDB"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive web development solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "💻",
                title: "Web Development",
                description: "Custom web applications built with modern frameworks and best practices."
              },
              {
                icon: "📱",
                title: "Mobile Apps",
                description: "Cross-platform mobile applications using React Native and Flutter."
              },
              {
                icon: "🎨",
                title: "UI/UX Design",
                description: "Beautiful, intuitive user interfaces that provide exceptional user experiences."
              },
              {
                icon: "⚡",
                title: "Performance Optimization",
                description: "Speed up your applications with advanced optimization techniques."
              },
              {
                icon: "🔒",
                title: "Security Audits",
                description: "Comprehensive security assessments to protect your applications."
              },
              {
                icon: "🚀",
                title: "Deployment & DevOps",
                description: "Seamless deployment and continuous integration solutions."
              }
            ].map((service, index) => (
              <div key={index} className="glass rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let&apos;s discuss your next project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary">📧</span>
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">blessings@example.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary">📱</span>
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-muted-foreground">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary">📍</span>
                  </div>
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-muted-foreground">Lusaka, Zambia</div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {["GitHub", "LinkedIn", "Twitter", "Instagram"].map((social) => (
                    <a key={social} href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <span className="text-sm font-semibold">{social[0]}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold gradient-text mb-4">Blessings Chilemba</div>
            <p className="text-muted-foreground mb-6">
              Full Stack Developer & Digital Innovator
            </p>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Sitemap</a>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 Blessings Chilemba. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}