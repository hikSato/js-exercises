export function retryWithExponentialBackoff(func, maxRetry, callback) {
  let count = 0;
  const second = 1000;
  const job = () => {
    const result = func();
    count++;
    if (result || count >= maxRetry) {
      callback(result);
      return;
    }
    setTimeout(job, 2 ** count * second);
  };
  setTimeout(job, 2 ** count * second);
}

retryWithExponentialBackoff(
  () => false,
  3,
  (e) => console.log(e)
);
