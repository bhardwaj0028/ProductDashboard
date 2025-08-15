'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/types';
import { formatPrice, truncateText } from '@/lib/utils';
import { useCartStore } from '@/store/cartStore';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Card className="h-full flex flex-col ">
      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-square p-4">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
      
      <CardContent className="flex-1 p-4">
        <Badge variant="secondary" className="mb-2 text-xs">
          {product.category}
        </Badge>
        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold text-sm mb-2 hover:text-primary transition-colors">
            {truncateText(product.title, 60)}
          </h3>
        </Link>
        <p className="text-lg font-bold text-primary">
          {formatPrice(product.price)}
        </p>
        <div className="flex items-center mt-2">
          <span className="text-sm text-muted-foreground">
            ⭐ {product.rating.rate} ({product.rating.count})
          </span>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={handleAddToCart}
          className="w-full"
          size="sm"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
