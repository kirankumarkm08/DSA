const obj = {
  name: "kiran",
  age: 22,
  greet: function () {
    // console.log("hello " + this.name);
  },
};
obj.gender = "male";
// console.log(obj);
obj.greet();

// console.log(Object.keys(obj));
// console.log(Object.values(obj["name"]));
console.log(Object.entries(obj));
