import { type ReactNode, type MouseEvent, type KeyboardEvent } from 'react';
import { cn } from '@/lib/utils';

interface ScrollToSectionLinkProps {
  sectionId: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function ScrollToSectionLink({ sectionId, children, className, onClick }: ScrollToSectionLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    onClick?.();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      onClick?.();
    }
  };

  return (
    <a
      href={`#${sectionId}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={cn('cursor-pointer', className)}
      role="link"
      tabIndex={0}
    >
      {children}
    </a>
  );
}
