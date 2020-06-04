// classes = Store, Product,Customer
//interactions
//1- A Store has as  pruducts mobile phones.
//2- A Customer can be a member of  the store and like the products
//3- Customers can eveluate phones.Also  they can order and pay.
//4-Store can display product's price,capacity and member's names. 
//5-Store can print names of products
class Store {
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
class Customer {
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
  };
const mediaInc = new Store("Media Electronics Inc.", "Kuşadası");
class Product {
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
const iphone = new Product("Iphone II", 800, 64, 10);
const huawei = new Product("Huwaei P40", 1000, 128, 5);
const xiaomi = new Product("Xiaomi Redmi Note", 300, 128, 10);
const samsung = new Product("Samsung Galaxy", 200, 64, 4);

const ayca = new Customer("Ayça", 1200, 128);
const deniz = new Customer("Deniz", 500, 64);
const kaya = new Customer("Kaya", 300, 32);
iphone.add(mediaInc);
xiaomi.add(mediaInc);
huawei.add(mediaInc);
samsung.add(mediaInc);
ayca.like(huawei);
deniz.like(huawei);
deniz.like(iphone);
deniz.like(xiaomi);
kaya.like(samsung);
ayca.becomeAMember(mediaInc);
deniz.becomeAMember(mediaInc);
kaya.becomeAMember(mediaInc);





