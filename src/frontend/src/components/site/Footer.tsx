import { Mail, Phone, MapPin, User } from 'lucide-react';
import { ScrollToSectionLink } from './ScrollToSectionLink';
import { BrandLogo } from './BrandLogo';

export function Footer() {
  const quickLinks = [
    { href: 'home', label: 'Home' },
    { href: 'about', label: 'About' },
    { href: 'services', label: 'Services' },
    { href: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="mb-4">
              <BrandLogo showText />
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for CCTV, Workstations, Networking, Laptops, and Computers. Multibrand sales and
              service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <ScrollToSectionLink
                  key={link.href}
                  sectionId={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </ScrollToSectionLink>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Information</h3>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 shrink-0" />
                <span>
                  <span className="font-medium text-foreground">Owner:</span> NANDHAKUMAR G
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:9080250925" className="hover:text-foreground transition-colors">
                  9080250925
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a
                  href="mailto:nandhakumar.g2402@gmail.com"
                  className="hover:text-foreground transition-colors break-all"
                >
                  nandhakumar.g2402@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <span className="font-medium text-foreground">Address:</span>{' '}
                  <span className="break-words leading-relaxed">
                    9/16-18, VOC STREET-04, PEELAMEDU MAINROAD, SOWRIPALAYAM, COIMBATORE, TAMILNADU - 641028
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            © 2026. Built with ❤️ using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
