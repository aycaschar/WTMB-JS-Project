module.exports =class Customer {
  constructor(
    name,
    budget,
    requiredCapacity,
    favMobilePhones = [],
    subscribedStores = []
  ) {
    this.name = name;
    this.budget = budget;
    this.favMobilePhones = favMobilePhones;
    this.subscribedStores = subscribedStores;
    this.orderlist = [];
    this.requiredCapacity = requiredCapacity;
  }
  tellYourWish(customer) {
    console.log(
      "Hello my name is " +
        this.name +
        ". I like to buy a mobilephone  which is at least " +
        this.requiredCapacity +
        "GB . I can pay max. " +
        this.budget +
        "euros"
    );
  }
  eveluatePhone(product) {
    if (
      this.requiredCapacity <= product.capacity &&
      this.budget >= product.price &&
      product.inventory >= 1
    ) {
      console.log("I m ready to order");
    } else {
      console.log("Try another one");
    }
  }
  order(product, store) {
    this.product = product;
    store.orderlist.push(this);
    this.orderlist.push(product.name);
  }
  pay(product) {
    console.log(
      "Your bill is " +
        product.price +
        " euros. Thank you for choosing " +
        product.name
    );
    return product.inventory--;
  }
  like(product) {
    this.favMobilePhones.push(product);
    product.followers.push(this.name);
  }
  becomeAMember(store) {
    this.subscribedStores.push(store);
    store.members.push(this.name);
  }
}
