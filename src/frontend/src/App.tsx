import { HeroSection } from './components/site/HeroSection';
import { Header } from './components/site/Header';
import { Footer } from './components/site/Footer';
import { ServicesSection } from './components/site/ServicesSection';
import { ContactSection } from './components/site/ContactSection';
import { Section } from './components/site/Section';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <Section id="about" className="bg-muted/30">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About NK SYSTECH</h2>
            <p className="text-lg text-muted-foreground mb-4">
              NK SYSTECH is your trusted partner for comprehensive technology solutions. We specialize in providing
              multibrand sales and service for CCTV surveillance systems, high-performance workstations, enterprise
              networking equipment, laptops, and desktop computers.
            </p>
            <p className="text-lg text-muted-foreground">
              With years of experience in the industry, we deliver reliable, cost-effective solutions tailored to meet
              the unique needs of businesses, educational institutions, and individual clients. Our commitment to
              quality service and customer satisfaction sets us apart.
            </p>
          </div>
        </Section>
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
