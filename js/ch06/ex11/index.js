export const obj = {
  r: 1,
  theta: (2 * Math.PI) / 3,

  get x() {
    return this.r * Math.cos(this.theta);
  },
  get y() {
    return this.r * Math.sin(this.theta);
  },

  set x(value) {
    if (isNaN(value)) new Error();
    this.r = Math.sqrt(value ** 2 + this.y ** 2);
    this.theta = Math.atan2(this.y, value);
  },
  set y(value) {
    if (isNaN(value)) new Error();
    this.r = Math.sqrt(this.x ** 2 + value ** 2);
    this.theta = Math.atan2(value, this.x);
  },
};
