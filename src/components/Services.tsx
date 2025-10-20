"use client";

import { AnimationProps, Service } from '@/types';

const services: Service[] = [
  {
    icon: "💻",
    title: "Web Development",
    description: "Custom web applications built with modern frameworks and best practices, ensuring scalability and performance.",
    features: ["React/Next.js", "TypeScript", "Responsive Design"]
  },
  {
    icon: "📱",
    title: "Mobile Development",
    description: "Cross-platform mobile applications using React Native and Flutter for seamless user experiences.",
    features: ["iOS & Android", "Cross-platform", "Native Performance"]
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description: "Beautiful, intuitive user interfaces that provide exceptional user experiences and drive engagement.",
    features: ["User Research", "Wireframing", "Prototyping"]
  },
  {
    icon: "⚡",
    title: "Performance Optimization",
    description: "Speed up your applications with advanced optimization techniques and modern development practices.",
    features: ["Code Splitting", "Lazy Loading", "CDN Setup"]
  },
  {
    icon: "🔒",
    title: "Security Audits",
    description: "Comprehensive security assessments to protect your applications from vulnerabilities and threats.",
    features: ["Code Review", "Penetration Testing", "Security Hardening"]
  },
  {
    icon: "🚀",
    title: "Deployment & DevOps",
    description: "Seamless deployment and continuous integration solutions for reliable, scalable applications.",
    features: ["CI/CD Pipelines", "Cloud Deployment", "Monitoring"]
  }
];

export default function Services({ visibleElements }: AnimationProps) {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div 
            data-animate-id="services-title"
            className={`transition-all duration-1000 ${visibleElements.has('services-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              My <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Comprehensive web development solutions tailored to your business needs, 
              delivered with cutting-edge technology and exceptional attention to detail.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              data-animate-id={`service-${index}`}
              className={`group bg-gradient-to-br from-background to-muted/20 rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl backdrop-blur-sm ${visibleElements.has(`service-${index}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-primary/80">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {feature}
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-border/50">
                <button className="w-full py-3 px-6 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-lg font-semibold hover:from-primary hover:to-secondary hover:text-primary-foreground transition-all duration-300 group-hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
