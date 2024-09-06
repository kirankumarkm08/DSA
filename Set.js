const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr1 = [1, 2, 3, 4, 5, 6, 7];

const Set1 = new Set(arr);
const Set2 = new Set(arr1);
// Set1.add(100);
// Set1.delete(4);
// Set1.size;
// Set1.clear();
// console.log(Set1.has(1));

// console.log(Set1);
// const iter = Set2.entries();

// for (const i of iter) {
//   console.log(i);
// }

// function logSet(n1, n2, set) {
//   console.log(`${n1}= ${n2}`);
// }
// new Set(["foo", "bar", undefined]).forEach(logSet);

const odds = new Set([1, 3, 5, 7, 9]);
const squares = new Set([1, 4, 9]);
// console.log(odds.intersection(squares)); // Set(2) { 1, 9 } ? not working
// console.log(odds.union(squares)); // Set(9) { 1, 3, 5, 7, 9, 4 }
// console.log(odds.intersection(squares)); // not working

// const fours = new Set([4, 8, 12, 16]);
// const evens = new Set([2, 4, 6, 8, 10, 12, 14, 16, 18]);
// console.log(fours.isSubsetOf(evens)); // true
// not working

// const myset = new Set(arr);
// console.log(myset.next().value);

for (let i in arr) {
  console.log(i, arr[i]);
}
