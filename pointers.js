// // // // // // let arr = [-9, -4, -1, 1, 4, 8, 11];

// // // // // // let left = 0;
// // // // // // let right = arr.length-1;

// // // // // // while(left < right) {
// // // // // //   let sum = arr[left]+arr[right];
// // // // // //   if(sum == 0){
// // // // // //     console.log(left);
// // // // // //     console.log(right);
// // // // // //     break;
// // // // // //   } else if(sum < 0){
// // // // // //     left+=1;
// // // // // //   } else {
// // // // // //     right -= 1;
// // // // // //   }
// // // // // // }

// // // // // var number = "02346108";

// // // // // function splitEven(number) {
// // // // //   number = number.split('');
// // // // //   var i = 0;

// // // // //   while(i<number.length){
// // // // //     if(number[i] % 2 == 0 && number[i+1] % 2 == 0){
// // // // //       number.splice(i+1, 0, "+");
// // // // //       i+=2;
// // // // //     } else {
// // // // //       i++;
// // // // //     }
// // // // //   }
// // // // //   console.log(number.join(''));
// // // // // }

// // // // // splitEven(number);

// // // // // function anagram(arr) {
// // // // //     let obj = {};

// // // // //     for (let i = 0; i < arr.length; i++) {
// // // // //       let sorted = arr[i].toLowerCase().split("").sort().join("");
// // // // //       obj[sorted] = arr[i];
// // // // //     }

// // // // //     return Object.values(obj);
// // // // //   }

// // // // //   let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// // // // //   console.log( anagram(arr) );

// // // // // var arr = [NaN, 0, 15, false, -22, "", undefined, 47, null];

// // // // // const nulled = arr.filter((i) => {
// // // // //   if (i) {
// // // // //     console.log(i);
// // // // //   }
// // // // // });

// // // // Input: numbers= [30, -20, 20, -10, 10, 40, 50, 60, 70, 50], target=50
// // // // Output: 2,3

// // // // var mapper = {};
// // // // var indexNum = [];

// // // // var indices = twoSum([20,10,40,50,60,70], 50);
// // // // console.log(indices);

// // // // function twoSum(nums, sum){

// // // //   for(var i=0; i<nums.length; i++){
// // // //     if(mapper[nums[i]] != null){
// // // //       indexNum.push([mapper[nums[i]], i]);
// // // //     } else {
// // // //       mapper[sum - nums[i]] = i;
// // // //     }
// // // //   }

// // // //   return indexNum;
// // // // }

// // // // var testArray = [
// // // //   { name: "Jai", age: 26 },
// // // //   { name: "Shiv", age: 22 },
// // // //   { name: "Anuj", age: 5 },
// // // //   { name: "Jenny", age: 20 },
// // // // ];

// // // // const test = testArray.filter((i) => i.age > 18);
// // // // console.log(test);

// // // var cars = [
// // //   { type: "Rolvo", year: 2016 },
// // //   { type: "Saab", year: 2001 },
// // //   { type: "BMW", year: 2010 },
// // // ];

// // // function myFunction() {
// // //   cars.sort(function (a, b) {
// // //     var x = a.type.toLowerCase();
// // //     var y = b.type.toLowerCase();
// // //     if (x < y) {
// // //       return -1;
// // //     }
// // //     if (x > y) {
// // //       return 1;
// // //     }
// // //     return 0;
// // //   });
// // //   console.log(cars);
// // // }

// // // myFunction();

// // // function firstNonRepeatedCharacter(string) {
// // //   for (var i = 0; i < string.length; i++) {
// // //     var c = string[i];
// // //     if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
// // //       console.log(c);
// // //     }
// // //   }
// // //   return null;
// // // }

// // // firstNonRepeatedCharacter("aabcba");

// // // function factorialize(num) {
// // //   if (num < 0) return -1;
// // //   else if (num == 0) return 1;
// // //   else {
// // //     console.log(num * factorialize(num - 1));
// // //   }
// // // }
// // // factorialize(5);

// // const numbers = [1, 2, 3, 4, 5, 5, 5, 5, 5, 5];

// // function removeDuplicates(array) {
// //   return [...new Set(array)];
// // }
// // console.log(removeDuplicates(numbers));

// // function BankAccount(initialBalance) {
// //     let balance = initialBalance; // Private variable

// //     return {
// //       deposit: function (amount) {
// //         balance += amount;
// //         return `Deposited: ${amount}, New Balance: ${balance}`;
// //       },
// //       withdraw: function (amount) {
// //         if (balance >= amount) {
// //           balance -= amount;
// //           return `Withdrew: ${amount}, New Balance: ${balance}`;
// //         } else {
// //           return 'Insufficient funds!';
// //         }
// //       },
// //       checkBalance: function () {
// //         return `Current Balance: ${balance}`;
// //       }
// //     };
// //   }

// //   const account = BankAccount(100);
// //   console.log(account.deposit(50));      // Deposited: 50, New Balance: 150
// //   console.log(account.withdraw(30));     // Withdrew: 30, New Balance: 120
// //   console.log(account.checkBalance());   // Current Balance: 120

// // const newPro = new Promise((resolve, reject) => {
// //   const success = false;
// //   if (success) {
// //     resolve("Promise Resolved Successfully");
// //   } else {
// //     reject("Promise Rejected");
// //   }
// // });

// // console.log(newPro); //

// new Promise((resolve) => {
//     setTimeout(() => resolve(1), 1000);
//   })
//     .then((result) => {
//       console.log(result); // Logs 1
//       return result * 2;
//     })
//     .then((result) => {
//       console.log(result); // Logs 2
//       return result * 3;
//     })
//     .then((result) => {
//       console.log(result); // Logs 6
//     });

// const p1 = Promise.resolve("Result 1");
// const p2 = new Promise((resolve) =>
//   setTimeout(() => resolve("Result 2"), 2000)
// );
// const p3 = Promise.resolve("Result 3");

// Promise.all([p1, p2, p3]).then(
//   (res) => console.log(res) // ["Result 1", "Result 2", "Result 3"]
// );

// const p12 = new Promise((resolve) => setTimeout(() => resolve('Result 1'), 2000));
// const p22 = new Promise((resolve) => setTimeout(() => resolve('Result 2'), 1000));

// Promise.race([p12, p22]).then((result) => {
//   console.log(result); // 'Result 2' (the first one to resolve)
// });

// function traditional() {
//   console.log(arguments);
// }

// traditional(1, 2, 3, 4, 5);

const arrowway = () => console.log(arguments);

arrowway(1, 2, 3, 4);

// const arrow = () => {
//   const result = 1;

//   setTimeout(() => {
//     console.log(result);
//   },2000);
// };

// arrow();
