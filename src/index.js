module.exports = function reverse (n) {
  let result = '';
  let x = Math.abs(n);
  if (x < 10) {
      return x;
  }
    while (x !== 0) {
        result = `${result}${x % 10}`;
        x = Math.floor(x / 10);
    }
    return Number(result);
}
