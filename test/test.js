const products = [
  { price: 100, quantity: 2 },
  { price: 120, quantity: 2 },
  { price: 110, quantity: 4 },
];

const totalPrice = products.reduce(
  (total, product) => total + product.price * product.quantity,
  0,
);

console.log(totalPrice)
