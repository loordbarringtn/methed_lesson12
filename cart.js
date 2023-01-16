const cart = {
  items: [],
  count: 0,
  discount: null,
  set setDiscount(discount) {
    if (discount === "METHED") {
      this.discount = 0.15;
    } else if (discount === "NEWYEAR") {
      this.discount = 0.21;
    }
  },
  get totalPrice() {
    return this.calculateItemPrice();
  },
  add(productName, productPrice, quantity) {
    this.items.push({ productName, productPrice, quantity });
    this.count += quantity;
  },
  increaseCount() {
    this.count++;
  },
  calculateItemPrice() {
    if (this.discount === null) {
      return this.items.reduce(
        (acc, cur) => acc + cur.productPrice * cur.quantity,
        0
      );
    }
    return (
      (1 - this.discount) *
      this.items.reduce((acc, cur) => acc + cur.productPrice * cur.quantity, 0)
    );
  },

  clear() {
    this.items.length = 0;
    this.count = 0;
  },
  print() {
    console.log(JSON.stringify(this.items));
    console.log(`Общая стоимость корзины: ${this.totalPrice}`);
  },
};

cart.add("Яблоко", 15, 25);
cart.add("Ананас", 150, 4);
cart.add("Мандарин", 20, 20);
cart.add("Арбуз", 230, 2);
cart.print();
console.log(`Использование гетера: ${cart.totalPrice}`);

cart.setDiscount = "METHED";
console.log(`Общая стоимость с учётом 15% скидки: ${cart.totalPrice}`);
cart.setDiscount = "NEWYEAR";
console.log(`Общая стоимость с учётом 21% скидки: ${cart.totalPrice}`);

cart.clear();
cart.print();
