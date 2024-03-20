export const func = (obj) => {
  const proto = Object.getPrototypeOf(obj);
  const protoKeys = Reflect.ownKeys(proto);
  const keys = Reflect.ownKeys(obj);
  return [...keys, ...protoKeys];
};
