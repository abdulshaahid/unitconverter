import React from 'react';

type NavLinksProps = {
  className?: string;
};

export default function NavLinks({ className = '' }: NavLinksProps) {
  const links = [
    { href: '#', label: 'Home' },
    { href: '#', label: 'About' },
    { href: '#', label: 'Contact' }
  ];

  return (
    <nav className={className}>
      {links.map(link => (
        <a
          key={link.label}
          href={link.href}
          className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}