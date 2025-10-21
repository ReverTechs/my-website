"use client";

import { AnimationProps, SocialLink, ContactInfo } from '@/types';

const contactInfo: ContactInfo = {
  email: "reverblessig@gmail.com",
  phone: "+265 984 671 670",
  location: "Lilongwe, Malawi"
};

const socialLinks: SocialLink[] = [
  { name: "GitHub", icon: "💻", color: "from-gray-500/10 to-gray-600/10" },
  { name: "LinkedIn", icon: "💼", color: "from-blue-500/10 to-blue-600/10" },
  { name: "Twitter", icon: "🐦", color: "from-sky-500/10 to-sky-600/10" },
  { name: "Instagram", icon: "📸", color: "from-pink-500/10 to-pink-600/10" }
];

export default function Contact({ visibleElements }: AnimationProps) {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div 
            data-animate-id="contact-title"
            className={`transition-all duration-1000 ${visibleElements.has('contact-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2 className="text-6xl md:text-7xl mb-6">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let&apos;s discuss your next project and create something amazing together.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div 
            data-animate-id="contact-info"
            className={`transition-all duration-1000 ${visibleElements.has('contact-info') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            <h3 className="text-4xl mb-8 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Get In Touch
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📧</span>
                </div>
                  <div>
                    <div className="text-xl">Email</div>
                    <div className="text-muted-foreground text-lg">{contactInfo.email}</div>
                  </div>
              </div>
              
              <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-secondary/5 to-accent/5 rounded-2xl border border-secondary/10 hover:border-secondary/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                  <div>
                    <div className="text-xl">Phone</div>
                    <div className="text-muted-foreground text-lg">{contactInfo.phone}</div>
                  </div>
              </div>
              
              <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-accent/5 to-primary/5 rounded-2xl border border-accent/10 hover:border-accent/30 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📍</span>
                </div>
                  <div>
                    <div className="text-xl">Location</div>
                    <div className="text-muted-foreground text-lg">{contactInfo.location}</div>
                  </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-2xl mb-6">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={social.name} 
                    href="#" 
                    className={`w-14 h-14 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 border border-border/50 hover:border-primary/50`}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div 
            data-animate-id="contact-form"
            className={`transition-all duration-1000 delay-200 ${visibleElements.has('contact-form') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            <form className="space-y-8">
              <div>
                  <label className="block text-xl mb-3">Name</label>
                <input 
                  type="text" 
                  className="w-full px-6 py-4 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-background/50 backdrop-blur-sm transition-all duration-300 focus:scale-105"
                  placeholder="Your name"
                />
              </div>
              <div>
                  <label className="block text-xl mb-3">Email</label>
                <input 
                  type="email" 
                  className="w-full px-6 py-4 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-background/50 backdrop-blur-sm transition-all duration-300 focus:scale-105"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                  <label className="block text-xl mb-3">Message</label>
                <textarea 
                  rows={6}
                  className="w-full px-6 py-4 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-background/50 backdrop-blur-sm transition-all duration-300 focus:scale-105"
                  placeholder="Write the message..."
                ></textarea>
              </div>
              <button 
                type="submit"
                  className="w-full px-8 py-5 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl text-xl hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
