export const restrict = (target, templete) => {
  const templeteKeys = Object.keys(templete);
  for (let key of Object.keys(target)) {
    if (!templeteKeys.includes(key)) {
      delete target[key];
    }
  }
  return target;
};

export const substract = (target, ...sources) => {
  for (let source of sources) {
    const templeteKeys = Object.keys(source);
    for (let key of Object.keys(target)) {
      if (templeteKeys.includes(key)) {
        delete target[key];
      }
    }
  }
  return target;
};
