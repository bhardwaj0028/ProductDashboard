import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
          Welcome to ProductStore
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Visit our dashboard to explore our products.
        </p>
        
        <div className="mb-12">
          <Link href="/dashboard">
            <Button size="lg" className="text-lg px-8 py-3">
              Explore Products
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
