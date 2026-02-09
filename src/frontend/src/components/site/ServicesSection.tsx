import { Camera, Monitor, Network, Laptop, HardDrive } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Section } from './Section';
import { ProductCategories } from './ProductCategories';

const services = [
  {
    icon: Camera,
    title: 'CCTV Surveillance',
    description:
      'Complete CCTV solutions including cameras, DVRs, NVRs, and monitoring systems. Professional installation and maintenance services for residential and commercial properties.',
    badge: 'Sales & Service',
  },
  {
    icon: Monitor,
    title: 'Workstations',
    description:
      'High-performance workstations for professionals, designers, and engineers. Custom configurations available with powerful processors, graphics cards, and storage solutions.',
    badge: 'Sales & Service',
  },
  {
    icon: Network,
    title: 'Networking Solutions',
    description:
      'Enterprise-grade networking equipment including routers, switches, access points, and cabling. Network design, installation, and troubleshooting services available.',
    badge: 'Sales & Service',
  },
  {
    icon: Laptop,
    title: 'Laptops',
    description:
      'Wide selection of laptops from leading brands for business, education, and personal use. Expert repair services, upgrades, and warranty support.',
    badge: 'Sales & Service',
  },
  {
    icon: HardDrive,
    title: 'Desktop Computers',
    description:
      'Custom-built and branded desktop computers for all needs. From basic office systems to gaming rigs, with comprehensive repair and upgrade services.',
    badge: 'Sales & Service',
  },
];

export function ServicesSection() {
  return (
    <Section id="services">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive technology solutions with multibrand sales and professional service support
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary">{service.badge}</Badge>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <ProductCategories />
    </Section>
  );
}
