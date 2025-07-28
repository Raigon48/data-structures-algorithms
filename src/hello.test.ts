import { greeting } from './hello';

describe('greeting', () => {
    it('should return the expected result for input 1', () => {
        const result = greeting("World");
        expect(result).toBe('Hello, World!');
    });
});