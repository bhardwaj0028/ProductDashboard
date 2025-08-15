import { formatPrice, truncateText } from '@/lib/utils';

describe('Utility Functions', () => {
  describe('formatPrice', () => {
    it('should format price correctly', () => {
      expect(formatPrice(10.99)).toBe('$10.99');
      expect(formatPrice(0)).toBe('$0.00');
      expect(formatPrice(1000)).toBe('$1,000.00');
    });
  });

  describe('truncateText', () => {
    it('should truncate text when longer than maxLength', () => {
      const longText = 'This is a very long text that should be truncated';
      expect(truncateText(longText, 20)).toBe('This is a very long ...');
    });

    it('should return original text when shorter than maxLength', () => {
      const shortText = 'Short text';
      expect(truncateText(shortText, 20)).toBe('Short text');
    });

    it('should return original text when equal to maxLength', () => {
      const text = 'Exactly twenty chars';
      expect(truncateText(text, 20)).toBe('Exactly twenty chars');
    });
  });
});
