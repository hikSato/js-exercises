export const modifyUrl = (obj) => {
  const { base, addQuery, path } = obj;
  const url = new URL(base);
  if (addQuery) {
    addQuery.forEach((e) => {
      url.searchParams.append(e[0], e[1]);
    });
  }
  if (path) {
    url.pathname = path;
  }
  return url.toString();
};
