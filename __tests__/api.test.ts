import { fetchProducts, fetchProduct, fetchCategories } from '@/lib/api';

// Mock fetch globally
global.fetch = jest.fn();

describe('API Functions', () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  describe('fetchProducts', () => {
    it('should fetch products successfully', async () => {
      const mockProducts = [
        { id: 1, title: 'Test Product', price: 10.99, category: 'test' }
      ];
      
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockProducts,
      });

      const result = await fetchProducts();
      
      expect(fetch).toHaveBeenCalledWith('https://fakestoreapi.com/products');
      expect(result).toEqual(mockProducts);
    });

    it('should throw error when fetch fails', async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
      });

      await expect(fetchProducts()).rejects.toThrow('Failed to fetch products');
    });
  });

  describe('fetchProduct', () => {
    it('should fetch single product successfully', async () => {
      const mockProduct = { id: 1, title: 'Test Product', price: 10.99 };
      
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockProduct,
      });

      const result = await fetchProduct(1);
      
      expect(fetch).toHaveBeenCalledWith('https://fakestoreapi.com/products/1');
      expect(result).toEqual(mockProduct);
    });
  });

  describe('fetchCategories', () => {
    it('should fetch categories successfully', async () => {
      const mockCategories = ['electronics', 'clothing'];
      
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockCategories,
      });

      const result = await fetchCategories();
      
      expect(fetch).toHaveBeenCalledWith('https://fakestoreapi.com/products/categories');
      expect(result).toEqual(mockCategories);
    });
  });
});
