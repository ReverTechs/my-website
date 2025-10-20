"use client";

import { AnimationProps } from '@/types';

const apps = [
  {
    id: 1,
    name: "TaskFlow Pro",
    description: "Advanced task management and productivity app with team collaboration features.",
    icon: "📋",
    category: "Productivity",
    rating: 4.9,
    downloads: "10K+",
    price: "Free",
    platforms: ["iOS", "Android"],
    features: ["Team Collaboration", "Time Tracking", "Project Management"],
    screenshots: ["📱", "📱", "📱"],
    downloadLinks: {
      ios: "#",
      android: "#"
    }
  },
  {
    id: 2,
    name: "WeatherWise",
    description: "Beautiful weather app with detailed forecasts and location-based alerts.",
    icon: "🌤️",
    category: "Weather",
    rating: 4.8,
    downloads: "25K+",
    price: "Free",
    platforms: ["iOS", "Android"],
    features: ["7-Day Forecast", "Weather Alerts", "Location Services"],
    screenshots: ["📱", "📱", "📱"],
    downloadLinks: {
      ios: "#",
      android: "#"
    }
  },
  {
    id: 3,
    name: "FinanceTracker",
    description: "Personal finance management app with budget tracking and expense analytics.",
    icon: "💰",
    category: "Finance",
    rating: 4.7,
    downloads: "15K+",
    price: "$2.99",
    platforms: ["iOS", "Android"],
    features: ["Budget Tracking", "Expense Analytics", "Bill Reminders"],
    screenshots: ["📱", "📱", "📱"],
    downloadLinks: {
      ios: "#",
      android: "#"
    }
  },
  {
    id: 4,
    name: "FitTracker",
    description: "Comprehensive fitness tracking app with workout plans and nutrition guidance.",
    icon: "💪",
    category: "Health & Fitness",
    rating: 4.9,
    downloads: "30K+",
    price: "Free",
    platforms: ["iOS", "Android"],
    features: ["Workout Plans", "Nutrition Tracking", "Progress Analytics"],
    screenshots: ["📱", "📱", "📱"],
    downloadLinks: {
      ios: "#",
      android: "#"
    }
  }
];

export default function Apps({ visibleElements }: AnimationProps) {
  return (
    <section id="apps" className="py-24 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div 
            data-animate-id="apps-title"
            className={`transition-all duration-1000 ${visibleElements.has('apps-title') ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'}`}
          >
            <h2 className="text-6xl md:text-7xl mb-6">
              My <span className="gradient-text">Apps</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Discover my collection of innovative mobile applications designed to enhance your daily life 
              and boost productivity across various domains.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {apps.map((app, index) => (
            <div 
              key={app.id} 
              data-animate-id={`app-${index}`}
              className={`group bg-gradient-to-br from-background to-muted/10 rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl backdrop-blur-sm ${visibleElements.has(`app-${index}`) ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'}`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              {/* App Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">{app.icon}</div>
                  <div>
                    <h3 className="text-3xl mb-2 group-hover:text-primary transition-colors duration-300">{app.name}</h3>
                    <span className="px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full text-sm border border-primary/20">
                      {app.category}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl text-primary mb-1">{app.price}</div>
                  <div className="text-sm text-muted-foreground">{app.downloads} downloads</div>
                </div>
              </div>

              {/* App Description */}
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{app.description}</p>

              {/* Rating */}
              <div className="flex items-center mb-6">
                <div className="flex space-x-1 mr-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-xl ${i < Math.floor(app.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>⭐</span>
                  ))}
                </div>
                <span className="text-lg text-foreground">{app.rating}</span>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-lg mb-3 text-foreground">Key Features</h4>
                <div className="flex flex-wrap gap-2">
                  {app.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex} 
                      className="px-3 py-1 bg-gradient-to-r from-primary/5 to-secondary/5 text-primary rounded-full text-sm border border-primary/10"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Screenshots Preview */}
              <div className="mb-6">
                <h4 className="text-lg mb-3 text-foreground">Preview</h4>
                <div className="flex space-x-3">
                  {app.screenshots.map((screenshot, screenshotIndex) => (
                    <div key={screenshotIndex} className="w-16 h-28 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center border border-primary/20 group-hover:scale-105 transition-transform duration-300">
                      <span className="text-2xl">{screenshot}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Download Buttons */}
              <div className="flex space-x-4">
                <a 
                  href={app.downloadLinks.ios}
                  className="flex-1 py-4 px-6 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl text-lg hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 group-hover:scale-105 text-center"
                >
                  📱 Download iOS
                </a>
                <a 
                  href={app.downloadLinks.android}
                  className="flex-1 py-4 px-6 bg-gradient-to-r from-secondary to-accent text-primary-foreground rounded-xl text-lg hover:from-secondary/90 hover:to-accent/90 transition-all duration-300 group-hover:scale-105 text-center"
                >
                  🤖 Download Android
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div 
          data-animate-id="apps-cta"
          className={`text-center mt-16 transition-all duration-1000 ${visibleElements.has('apps-cta') ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'}`}
        >
          <h3 className="text-4xl mb-6 text-foreground">More Apps Coming Soon!</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm constantly working on new innovative applications. Follow me to stay updated with the latest releases.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl text-xl hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Follow for Updates
          </button>
        </div>
      </div>
    </section>
  );
}
