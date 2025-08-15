'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Product } from '@/lib/types';
import { fetchProduct } from '@/lib/api';
import { formatPrice } from '@/lib/utils';
import { useCartStore } from '@/store/cartStore';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ShoppingCart } from 'lucide-react';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const addToCart = useCartStore((state) => state.addToCart);

  const productId = parseInt(params.id as string);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        const productData = await fetchProduct(productId);
        setProduct(productData);
      } catch (err) {
        setError('Failed to load product. Please try again later.');
        console.error('Error loading product:', err);
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      loadProduct();
    }
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading product...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <p className="text-destructive mb-4">{error || 'Product not found'}</p>
            <Button onClick={() => router.back()}>
              Go Back
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        variant="ghost"
        onClick={() => router.back()}
        className="mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back
      </Button>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="p-6">
            <div className="relative aspect-square">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <div>
            <Badge variant="secondary" className="mb-2">
              {product.category}
            </Badge>
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-2xl font-bold text-primary mb-4">
              {formatPrice(product.price)}
            </p>
            
            <div className="flex items-center mb-6">
              <span className="text-lg">
                ⭐ {product.rating.rate}
              </span>
              <span className="text-muted-foreground ml-2">
                ({product.rating.count} reviews)
              </span>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Description</h2>
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="space-y-4">
            <Button
              onClick={handleAddToCart}
              size="lg"
              className="w-full"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">Category:</span>
                <p className="text-muted-foreground capitalize">{product.category}</p>
              </div>
              <div>
                <span className="font-medium">Rating:</span>
                <p className="text-muted-foreground">{product.rating.rate}/5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
