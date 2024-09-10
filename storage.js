// function getCookie(name) {
//   const value = `; ${document.cookie}`;
//   const parts = value.split(`; ${name}=`);
//   if (parts.length === 2) return parts.pop().split(";").shift();
// }

// // Example usage
// const username = getCookie("username");
// console.log(username); // Outputs: JohnDoe

const object1 = {
  name: "John",
  age: 30,
  city: "New York",
  hobbies: ["reading", "painting", "cooking"],
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

console.log(object1);
