export function createLoggingProxy(target) {
  const callHistory = [];

  const handler = {
    get(target, propKey, receiver) {
      const originalMethod = target[propKey];

      if (typeof originalMethod !== "function") {
        return Reflect.get(target, propKey, receiver);
      }

      return function (...args) {
        const result = originalMethod.apply(this, args);

        callHistory.push({
          timestamp: new Date(),
          methodName: propKey,
          params: args,
        });

        return result;
      };
    },
  };

  const proxy = new Proxy(target, handler);
  return { proxy, callHistory };
}
