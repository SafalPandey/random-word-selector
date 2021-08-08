expect.extend({
  toBeOneOf(received, arr) {
    const pass = arr.includes(received);

    if (pass) {
      return {
        message: () => `expected ${received} to not be one of ${arr}`,
        pass: true
      };
    } else {
      return {
        message: () => `expected ${received} to be one of ${arr}`,
        pass: false
      };
    }
  }
});
