export const assign = (obj1, ...sources) => {
  for (let source of sources) {
    for (let key of Object.keys(source)) {
      obj1[key] = source[key];
    }

    const symbols = Object.getOwnPropertySymbols(source);
    for (let symbol of symbols) {
      if (source.propertyIsEnumerable(symbol)) {
        obj1[symbol] = source[symbol];
      }
    }
  }
  return obj1;
};
