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

const technicalWorkImages = [
  {
    src: '/assets/generated/nk-tech-work-cctv-install.dim_1200x800.png',
    alt: 'Technician installing CCTV camera on exterior wall',
    title: 'CCTV Installation',
  },
  {
    src: '/assets/generated/nk-tech-work-network-rack.dim_1200x800.png',
    alt: 'Technician configuring network switch and patch panel in rack',
    title: 'Network Configuration',
  },
  {
    src: '/assets/generated/nk-tech-work-cable-routing.dim_1200x800.png',
    alt: 'Technician running and organizing ethernet cabling in office',
    title: 'Cable Management',
  },
  {
    src: '/assets/generated/nk-tech-work-workstation-assembly.dim_1200x800.png',
    alt: 'Workstation desktop PC being assembled with components on workbench',
    title: 'Workstation Assembly',
  },
  {
    src: '/assets/generated/nk-tech-work-laptop-repair.dim_1200x800.png',
    alt: 'Laptop repair scene with tools and open laptop motherboard',
    title: 'Laptop Repair',
  },
  {
    src: '/assets/generated/nk-tech-work-desktop-service.dim_1200x800.png',
    alt: 'Desktop computer maintenance and cleaning scene with technician hands and tools',
    title: 'Desktop Service',
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

      <div className="mb-16">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Technical Work</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional installation, configuration, and maintenance services delivered by our expert technicians
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {technicalWorkImages.map((image, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 md:h-64 object-cover"
                  loading="lazy"
                />
              </CardContent>
              <CardHeader className="p-4">
                <CardTitle className="text-base md:text-lg">{image.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      <ProductCategories />
    </Section>
  );
}
