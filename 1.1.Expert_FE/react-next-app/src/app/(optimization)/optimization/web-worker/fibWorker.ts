function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);

  // Tối ưu
  // const fib = [0, 1];
  // for (let i = 2; i <= n; i++) {
  //   fib[i] = fib[i - 1] + fib[i - 2];
  // }
  // return fib[n];
}

self.onmessage = (e) => {
  const n = e.data;
  const start = performance.now();
  const result = fibonacci(n);
  const end = performance.now();
  self.postMessage({ result, time: end - start });
};
