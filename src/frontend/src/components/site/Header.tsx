import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { ScrollToSectionLink } from './ScrollToSectionLink';
import { BrandLogo } from './BrandLogo';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: 'home', label: 'Home' },
    { href: 'about', label: 'About' },
    { href: 'services', label: 'Services' },
    { href: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <ScrollToSectionLink sectionId="home" className="flex items-center hover:opacity-80 transition-opacity">
          <BrandLogo showText />
        </ScrollToSectionLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <ScrollToSectionLink
              key={link.href}
              sectionId={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </ScrollToSectionLink>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Toggle menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <SheetTitle className="text-left mb-6">Menu</SheetTitle>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <ScrollToSectionLink
                  key={link.href}
                  sectionId={link.href}
                  className="text-base font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </ScrollToSectionLink>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
