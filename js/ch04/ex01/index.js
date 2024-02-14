const compObj = {
  realPart: 3,
  imaginaryPart: 3,
};

export const add = (obj1, obj2) => {
  const re = obj1.realPart + obj2.realPart;
  const im = obj1.imaginaryPart + obj2.imaginaryPart;
  return { realPart: re, imaginaryPart: im };
};
export const sub = (obj1, obj2) => {
  const re = obj1.realPart - obj2.realPart;
  const im = obj1.imaginaryPart - obj2.imaginaryPart;
  return { realPart: re, imaginaryPart: im };
};
export const mul = (obj1, obj2) => {
  const re =
    obj1.realPart * obj2.realPart - obj1.imaginaryPart * obj2.imaginaryPart;
  const im =
    obj1.realPart * obj2.imaginaryPart + obj1.imaginaryPart * obj2.realPart;
  return { realPart: re, imaginaryPart: im };
};
export const div = (obj1, obj2) => {
  const conjugateObj2 = {
    realPart: obj2.realPart,
    imaginaryPart: -obj2.imaginaryPart,
  };
  const denominator = mul(obj2, conjugateObj2).realPart;
  const numeratorObj = mul(obj1, conjugateObj2);
  return {
    realPart: numeratorObj.realPart / denominator,
    imaginaryPart: numeratorObj.imaginaryPart / denominator,
  };
};
