"use client";

import { AnimationProps } from '@/types';

export default function About({ visibleElements }: AnimationProps) {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div 
            data-animate-id="about-title"
            className={`transition-all duration-1000 ${visibleElements.has('about-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2 className="text-6xl md:text-7xl mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              A dedicated full-stack developer with a passion for creating innovative digital solutions 
              that bridge the gap between creative vision and technical excellence.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Professional Image/Profile */}
          <div 
            data-animate-id="about-image"
            className={`transition-all duration-1000 ${visibleElements.has('about-image') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            <div className="relative group">
              <div className="w-full h-[500px] bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl flex items-center justify-center overflow-hidden shadow-2xl">
                <div className="text-8xl text-primary/80 mb-4">BC</div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">🚀</span>
              </div>
              <div className="absolute top-8 left-8 w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-2xl">💻</span>
              </div>
            </div>
          </div>

          {/* Professional Content */}
          <div 
            data-animate-id="about-content"
            className={`transition-all duration-1000 delay-200 ${visibleElements.has('about-content') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-5xl mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  Blessings Chilemba
                </h3>
                <p className="text-xl text-primary mb-6">Senior Full-Stack Developer & Technical Consultant</p>
              </div>

              <div className="space-y-6">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  With over 3 years of experience in full-stack development, I specialize in creating 
                  scalable web applications that drive business growth. My expertise spans modern JavaScript 
                  frameworks, cloud technologies, and user experience design.
                </p>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  I&apos;m passionate about solving complex problems through clean, efficient code and 
                  staying at the forefront of technological innovation. My approach combines technical 
                  excellence with strategic thinking to deliver solutions that exceed expectations.
                </p>
              </div>

              {/* Professional Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
                  <div className="text-3xl text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-6 border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:scale-105">
                  <div className="text-3xl text-secondary mb-2">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-6 border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105">
                  <div className="text-3xl text-accent mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-secondary/5 rounded-2xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:scale-105">
                  <div className="text-3xl text-foreground mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Support Available</div>
                </div>
              </div>

              {/* Core Competencies */}
                <div>
                  <h4 className="text-2xl mb-4">Core Competencies</h4>
                <div className="flex flex-wrap gap-3">
                  {["React/Next.js", "TypeScript", "Node.js", "Python", "MongoDB", "AWS", "Docker", "Git"].map((tech, index) => (
                    <span 
                      key={tech} 
                      className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-foreground rounded-full text-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Professional Philosophy */}
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 border border-primary/10">
                  <h4 className="text-xl mb-3 flex items-center">
                    <span className="text-3xl mr-3">🎯</span>
                    Professional Philosophy
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    "I believe in writing code that not only works but tells a story. Every line of code 
                    should be intentional, every feature should solve a real problem, and every project 
                    should push the boundaries of what's possible."
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
