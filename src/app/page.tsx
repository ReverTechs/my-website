"use client";

import { useAnimations } from '@/hooks';
import { Navigation, Hero, About, Services, Apps, Contact, Footer } from '@/components';

export default function Home() {
  const { isScrolled, isLoaded, visibleElements } = useAnimations();

  return (
    <div className="min-h-screen bg-background">
      <Navigation isScrolled={isScrolled} />
      <Hero isLoaded={isLoaded} />
      <About visibleElements={visibleElements} />
      <Services visibleElements={visibleElements} />
      <Apps visibleElements={visibleElements} />
      <Contact visibleElements={visibleElements} />
      <Footer visibleElements={visibleElements} />
    </div>
  );
}