'use client';

import Link from 'next/link';
import { CartBadge } from './CartBadge';

export function Navigation() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-xl font-bold text-primary">
          
            </Link> 
            <div className="hidden md:flex space-x-6">
              <Link 
                href="/" 
                className="font-bold"
              >
                Home
              </Link>
              <Link 
                href="/dashboard" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Dashboard
              </Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <CartBadge />
          </div>
        </div>
      </div>
    </nav>
  );
}
