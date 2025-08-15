'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils';

export function CartBadge() {
  const { getTotalItems, getTotalPrice } = useCartStore();
  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  return (
    <Link href="/cart">
      <Button variant="outline" className="relative">
        <ShoppingCart className="h-4 w-4 mr-2" />
        <span className="hidden sm:inline">Cart</span>
        {totalItems > 0 && (
          <Badge 
            variant="destructive" 
            className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
          >
            {totalItems}
          </Badge>
        )}
        {totalItems > 0 && (
          <span className="ml-2 text-sm font-medium hidden md:inline">
            {formatPrice(totalPrice)}
          </span>
        )}
      </Button>
    </Link>
  );
}
