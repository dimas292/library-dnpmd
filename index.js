export const sayHello = (name) => {
  return `Hello ${name}`;
};

export const sumArray = (numbers) => {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
};
