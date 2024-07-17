export const nestedUnwritableObj = () =>
  Object.freeze({
    c: Object.freeze({ d: Object.freeze({ e: 3 }) }),
  });

export const unwritableAndUnconfigurableObj = () =>
  Object.defineProperties(
    {},
    { a: { value: 1, writable: false, enumerable: true, configurable: false } }
  );

export const writableAndUnconfigurableObj = () =>
  Object.defineProperties(
    {},
    { b: { value: 2, writable: true, enumerable: true, configurable: false } }
  );
