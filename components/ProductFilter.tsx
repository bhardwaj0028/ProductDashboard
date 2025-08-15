'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface ProductFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function ProductFilter({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}: ProductFilterProps) {
  return (
    <Select value={selectedCategory} onValueChange={onCategoryChange}>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select category" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Categories</SelectItem>
        {categories.map((category) => (
          <SelectItem key={category} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
