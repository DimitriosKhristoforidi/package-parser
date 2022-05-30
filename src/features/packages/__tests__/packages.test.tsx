import { getEmptyPackage, isArray, isEmpty } from '../utils';

describe('Packages Slice', () => {
  describe('Utils', () => {
    it('Should return empty package', () => {
      const emptyPackage = getEmptyPackage('name');
      expect(emptyPackage.name).toBe('name');
      expect(emptyPackage.description).toBe('');
      expect(emptyPackage.author?.name).toBe('');
      expect(emptyPackage.maintainers.length).toBe(0);
      expect(emptyPackage.homepage).toBe('');
    });

    it('Should return correct boolean (isArray)', () => {
      const array = isArray([]);
      const notArray = isArray(true);

      expect(array).toBe(true);
      expect(notArray).toBe(false);
    });

    it('Should return correct boolean (isEmpty)', () => {
      const emptyString = isEmpty('');
      const emptyObject = isEmpty('{}');
      const nonEmptyObject = isEmpty('{"react": "18.0.1"}');

      expect(emptyString).toBe(true);
      expect(emptyObject).toBe(true);
      expect(nonEmptyObject).toBe(false);
    });
  });
});
