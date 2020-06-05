const Customer = require("./customer");
const Store = require("./store");
const Product = require("./product");
const Database = require("./database");

const mediaInc = new Store("Media Electronics Inc.", "Kuşadası");

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

Database.save("store.json", mediaInc);
Database.save("product.json", iphone);
Database.save("product.json", huawei);
Database.save("product.json", xiaomi);
Database.save("product.json", samsung);
Database.save("customer.json", ayca);
Database.save("customer.json", deniz);
Database.save("customer.json", kaya);

const loadedFile = Database.load("store.json");
console.log(loadedFile.name);
