export const fibonacciRange = (num: number) => {
  let x = 0;
  let y = 1;
  let z;
  let i = 0;
  const ranger = [x, y];
  for (i = 2; i < num; i++) {
    z = x + y;
    x = y;
    y = z;
    ranger.push(z);
  }
  return ranger;
};
