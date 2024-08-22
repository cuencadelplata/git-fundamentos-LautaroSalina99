// ferrari.test.js
const Ferrari = require('./ferrari');

describe('Ferrari Class', () => {
    let myFerrari;

    beforeEach(() => {
        myFerrari = new Ferrari();
    });

    test('should start the Ferrari', () => {
        expect(myFerrari.start()).toBe('Ferrari started!');
        expect(myFerrari.status()).toBe('Ferrari is running.');
    });

    test('should not start the Ferrari if it is already running', () => {
        myFerrari.start();
        expect(myFerrari.start()).toBe('Ferrari is already running!');
    });

    test('should stop the Ferrari', () => {
        myFerrari.start();
        expect(myFerrari.stop()).toBe('Ferrari stopped!');
        expect(myFerrari.status()).toBe('Ferrari is off.');
    });

    test('should not stop the Ferrari if it is already off', () => {
        expect(myFerrari.stop()).toBe('Ferrari is already off!');
    });
});
