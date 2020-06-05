module.exports = class Product {
  constructor(name, price, capacity, inventory, followers = []) {
    this.name = name;
    this.price = price;
    this.capacity = capacity;
    this.inventory = inventory;
    this.followers = followers;
  }
  add(store) {
    this.store = store.name;
    store.products.push(this);
  }
}
