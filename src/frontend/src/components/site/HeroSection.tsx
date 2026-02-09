import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-background to-background" />
      <div className="container relative py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Professional Technology Solutions for Your Business
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              NK SYSTECH delivers comprehensive multibrand sales and service for CCTV surveillance, workstations,
              networking equipment, laptops, and computers. Quality solutions you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => scrollToSection('services')} className="group">
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')}>
                Get in Touch
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/assets/generated/nk-systech-hero.dim_1600x600.png"
              alt="NK SYSTECH Technology Solutions"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
