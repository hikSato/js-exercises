export function loggingProxy(target) {
  const callHistory = [];

  const handler = {
    get(target, property) {
      const original = target[property];

      if (typeof original === "function") {
        return function (...args) {
          callHistory.push({
            timestamp: new Date(),
            methodName: property,
            args: args,
          });
          return original.apply(this, args);
        };
      }

      return original;
    },
  };

  const proxy = new Proxy(target, handler);
  return { proxy, callHistory };
}
