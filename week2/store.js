module.exports = class Store {
  constructor(name, address, members = [], products = []) {
    this.name = name;
    this.address = address;
    this.members = members;
    this.products = products;
    this.orderlist = [];
  }
  printProductNames() {
    this.products.forEach(printName);
  }
  getMembersCount() {
    return this.members.length;
  }
  getFollowersCount(product) {
    return product.followers.length;
  }
  displayPrice(product) {
    return product.price;
  }

  displayMembers() {
    console.log(this.name + "'s members list is : " + this.members);
  }

  displayFollowers(product) {
    console.log(product.name + "'s followers list is : " + product.followers);
  }
  displayCapacity(product) {
    return product.capacity;
  }
}
printName = (product) => console.log(product.name);
