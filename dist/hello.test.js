"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hello_1 = require("./hello");
describe('greeting', () => {
    it('should return the expected result for input 1', () => {
        const result = (0, hello_1.greeting)("World");
        expect(result).toBe('Hello, World!');
    });
});
