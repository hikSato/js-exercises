export const withResource = (o, process) => {
  try {
    process(o);
  } finally {
    o.close();
  }
};
