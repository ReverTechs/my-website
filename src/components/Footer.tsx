"use client";

import { AnimationProps } from '@/types';

export default function Footer({ visibleElements }: AnimationProps) {
  return (
    <footer className="py-16 border-t border-border bg-gradient-to-br from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div 
            data-animate-id="footer-content"
            className={`transition-all duration-1000 ${visibleElements.has('footer-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="text-4xl gradient-text mb-6">Blessings Chilemba</div>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Full Stack Developer & Digital Innovator
              <br />
              Creating exceptional digital experiences that drive business growth
            </p>
            
            <div className="flex justify-center space-x-8 mb-8">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-105 text-lg">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-105 text-lg">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-105 text-lg">Sitemap</a>
            </div>
            
            <div className="text-base text-muted-foreground">
              © 2025 Blessings Chilemba. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
