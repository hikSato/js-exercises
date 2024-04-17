export const counterGroup = () => {
  let total = 0;
  return {
    newCounter: () => {
      let n = 0;
      const counter = {
        count: () => {
          total++;
          return n++;
        },
        reset: () => {
          total -= n;
          n = 0;
        },
      };
      return counter;
    },
    total: () => {
      return total;
    },
  };
};
