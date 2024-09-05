const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.pop(); // remove the last element
arr.push(0); // add the last element
arr.unshift(11); //add in 1st element
arr.shift(); // remove in 1st element
arr.map((i) => console.log(i)); // return each element in a new  array  with mutate the original array
const slice = arr.slice(0, 2);
console.log("Sliced array:", slice); // returns only selected elements

const arr1 = [9, 2, 5, 1, 10, 100, -1];
function compare(a, b) {
  return a - b; // sort in descending order
}

console.log("sortde array :" + arr1.sort(compare));

console.log("");

for (let i of arr) {
  console.log(i);
}

console.log(arr.some((i) => i % 10));

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months);

arr.splice(4, 0, 100);

console.log(arr);

const reducer = arr.reduce((items, curr) => items + curr);
console.log("Sum of array elements:", reducer);

const filtered = arr.filter((i) => i > 3);
console.log(filtered);

const index = arr.indexOf(100);
console.log("Index of 100:", index);


