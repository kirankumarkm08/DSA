// // const obj = {
// //   name: "kiran",
// //   age: 22,
// //   greet: function () {
// //     // console.log("hello " + this.name);
// //   },
// // };
// // obj.gender = "male";
// // // console.log(obj);
// // obj.greet();

// // // console.log(Object.keys(obj));
// // // console.log(Object.values(obj["name"]));
// // console.log(Object.entries(obj));

// // // grouped by

const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];

// const result = Object.groupBy(inventory, ({ type }) => type);
// console.log(result);

// const result1 = Object.groupBy(inventory, ({ quantity }) => quantity);

// console.log(result1);

// // Object.entries()

// c

console.log(Object.is(1, 1));

const keyed = Object.keys(inventory);
console.log(keyed);

console.log(Object.values(inventory));
