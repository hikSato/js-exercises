export const addMyCall = (f) => {
  f.myCall = (o, ...args) => {
    return f.bind(o)(...args);
  };
};
