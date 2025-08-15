'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export function SearchBar({ onSearch, placeholder = "Search products..." }: SearchBarProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [query, onSearch]);

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="pl-10"
      />
    </div>
  );
}
