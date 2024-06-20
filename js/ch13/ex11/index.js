export async function retryWithExponentialBackoff(func, maxRetry, callback) {
  let count = 0;
  const second = 1000;
  const job = async () => {
    const result = await func();
    console.log(result);
    count++;
    if (result) {
      return result;
    }
    if (count >= maxRetry) {
      throw new Error("error");
    }
    new Promise(() => setTimeout(job, 2 ** count * second));
  };
  return new Promise(() => setTimeout(job, 2 ** count * second));
}

// (async () => {
//   const resp = await retryWithExponentialBackoff(
//     () => fetch("https://example.com"),
//     5
//   );
//   console.log(resp);
// })();
