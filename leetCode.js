function memoize(fn) {
  const cache = new Map();
  let callCount = 0;

  return {
    call: function(...args) {
      const key = JSON.stringify(args); // Create a unique key based on the function arguments
      if (cache.has(key)) {
        return cache.get(key);
      } else {
        const result = fn(...args);
        cache.set(key, result);
        callCount++;
        return result;
      }
    },
    getCallCount: function() {
      return callCount;
    }
  };
}

// Example functions:
const sum = (a, b) => a + b;
const fib = (n) => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));
const factorial = (n) => (n <= 1 ? 1 : factorial(n - 1) * n);

// Example usage:
const memoizedSum = memoize(sum);
const memoizedFib = memoize(fib);
const memoizedFactorial = memoize(factorial);

// Sample actions:
const actions = ["call","call","getCallCount","call","getCallCount"];
const values = [[2, 2], [2, 2], [], [1, 2], []];

const execute = (fnName, actions, values) => {
  const results = [];
  const memoizedFn = memoize(fnName === "sum" ? sum : fnName === "fib" ? fib : factorial);

  actions.forEach((action, index) => {
    if (action === "call") {
      results.push(memoizedFn.call(...values[index]));
    } else if (action === "getCallCount") {
      results.push(memoizedFn.getCallCount());
    }
  });

  return results;
};

// Example 1
const output = execute("sum", actions, values);
console.log(output); // Output: [4, 4, 1, 3, 2]


