// задача — максимально сократить код,
// чтобы соответствовать строгим требованиям
// Ката по количеству символов.(не более 161)
//  Можно предположить, что все элементы массива уникальны.
// function find(array, element) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === element) return i;
//   }
//   return "Not found";
// }

// const arr = [1, 2, 4, 5, 6]
// const find = (arr, e) => arr.indexOf(e) !== -1
//   ? arr.indexOf(e)
//   : "Not Found";
// find(arr, 5)

// ==============================================
// Даны два массива, нужно написать функцию
// которая проверяет эти массивы, удаляет одинаковые элементы,
// и возвращает числа по возрастанию

// const arr1 = [1, 3, 5, 7, 9, 10];
// const arr2 = [10, 2, 2, 2, 8, 6, 4, 2, 1];

// function mergeArrays(arr1, arr2) {
//   let res = [];
//   const arrUnity = arr1.concat(arr2);
//   arrUnity.forEach((el) => !res.includes(el) ? res.push(el) : 0);
//   res.sort((a, b) => a - b);
// };

// mergeArrays(arr1, arr2);

// ==============================================

// Написать функцию, которая возвращает для четные чисел Even для нечетных Odd

// function evenOrOdd(num) {
//   return num % 2 === 0 ? "Even" : "Odd";
// }

// Преобразовать массив строк в массив чисел

// const strArr = ['1.1', '3.2', '5.4', '2.3'];

// function toNumberArray(strArr) {
//   const arr = [];
//   strArr.forEach((el) => {
//     const convertStr = Number(el);
//     arr.push(convertStr)
//   })
//   return arr;
// };
// toNumberArray(strArr);

// Функция принимает числа и строку, вернуть сумму
// чисел входных данных

// function sumMix(x) {
//   let res = 0;
//   x.forEach((x) => {
//     const sum = x++;
//     res += sum;
//   });
//   return res;
// }

// ==============================================
// отсортировать массив целых чисел по произведению
// значения и индекса позиций.
// Для сортировки индекс начинается с 1, а не с 0!
// Сортировка должна быть по возрастанию.
// Массив никогда не будет нулевым
// и всегда будет содержать числа.

// const arr = [23, 2, 3, 4, 5];

// function sortByValueAndIndex(arr) {
//   const arrIndex = arr.map((el, i) => [el * (i + 1), el]);
//   const sortArr = arrIndex.sort((a, b) => a[0] - b[0]);
//   return sortArr.map((el) => el[1])
// }
// sortByValueAndIndex(arr)

// ==============================================
// По условию даны два массива, нужно объединить их
// удалить одинаковые элементы, и вернуть массив
// в возрастанию чисел;

// const arr1 = [1,3,5,7,9,11,12];
// const arr2 = [1,2,3,4,5,10,12];

// function mergeArrays(arr1, arr2) {
//   const combinedArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     combinedArr.push(arr1[i]);
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     combinedArr.push(arr2[i]);
//   }
//   console.log(combinedArr)

//   // Удаляем дубликаты
//   const uniqueArr = [];
//   for (let i = 0; i < combinedArr.length; i++) {
//     if (!uniqueArr.includes(combinedArr[i])) {
//       uniqueArr.push(combinedArr[i]);
//     }
//   }
//   console.log(uniqueArr)

//   // Решение по условию =>
//   // Сортируем массив по возрастанию
//   // for (let i = 0; i < uniqueArr.length; i++) {
//   //   for (let j = i + 1; j < uniqueArr.length; j++) {
//   //     if (uniqueArr[i] > uniqueArr[j]) {
//   //       const temp = uniqueArr[i];
//   //       uniqueArr[i] = uniqueArr[j];
//   //       uniqueArr[j] = temp;
//   //     }
//   //   }
//   // }

//   uniqueArr.sort((a,b) => a - b);
//   console.log(uniqueArr)
//   return uniqueArr;
// }
// mergeArrays(arr1, arr2);

// ==============================================
// // Нужно найти самое маленькое число в массиве
// const arr = [78,56,232,12,18];

// function findSmallestInt(arr) {
//   let res = arr[0];
//   arr.forEach((el) => {
//     if ( el < res){
//       res = el;
//     }
//   });
//   return res;
// };
// findSmallestInt(arr);
// const arr = [1, 2, 3];

// function multiplyAll(arr, multi) {
//   const newArr = [];
//   arr.map((el) => newArr.push(el * multi));
//   return newArr;
// };

// multiplyAll(arr, 2)

// ==============================================
// Нужно найти максимальное и минимальное число в массиве
// const arr = [-388046, 102794, 282578, -112076, 33335, -384302, -403385, -117426, -519147, 80253, -286715, -414759, 55695, 108546, -149848, 231669, 454823, -27559, 70592, -532130, -537953, 313258, -108449, 249583, 378071, -588357, 150666, -581114, 66785, -499632, 205908, -463071, 180858, -578482, -138714, 311612, 60780, -104567, -304794, -365061, 36516, -442612, -160654, 452613, -550073, -432003, 246113, 282268, -70223, 439550, -256199];

// function minMax(arr) {
//   let numMinMax = [];
//   numMinMax =  arr.sort((a,b)=> a - b);
//   return [numMinMax[0], numMinMax[numMinMax.length-1]];
// }
// minMax(arr);

// ==============================================
// Напишите функцию, которая принимает число и
// проверяет его разницу между числами
// результат буква
// 90 <= score <= 100 	'A'
// 80 <= score < 90 	  'B'
// 70 <= score < 80 	  'C'
// 60 <= score < 70 	  'D'
// 0 <= score < 60 	    'F'

// 95,90,93 A

// function getGrade(s1, s2, s3) {
//   const average = Math.floor((s1 + s2 + s3) / 3);
//   console.log(average)
//   if (average >= 90) {
//     console.log("A")
//     return "A"
//   } else if (average >= 80) {
//     console.log("B")
//     return "B"
//   } else if (average >= 70) {
//     console.log("C")
//     return "C"
//   } else if (average >= 60) {
//     console.log("D")
//     return "D"
//   } else {
//     console.log("F")
//     return "F"
//   }
// };

// getGrade(89, 89, 90)
// ==============================================

// Написать функцию, которая принимает число целое
// и расставляет их в порядке убывания от большего к меньшему
// const n = 15;

// function descendingOrder(n){
//   let res = ""
//   let split = n.toString().split("").map(Number);
//   split.sort((a,b) => b - a);
//   split.forEach((el) => {
//     res += el;
//   });
//   return +(res);
// };

// descendingOrder(n);

// ==============================================
// Нужно поместить объект в массив
// items = []
// items.push({a: "b", c: "d"});

// ==============================================
// Написать функцю, которая принимает число
// и выполняется с ней математические операции
// .add(n), .sub(n), .mul(n), .div(n), .pow(n) and .sqr()
// n.add(5).div(2).mul(3).sub(35).pow(2).sqr();

// let n = {
//     n: 25,
//     add: function(value) {
//         this.n += value;
//         return this;
//     },
//     sub: function(value) {
//         this.n -= value;
//         return this;
//     },
//     mul: function(value) {
//         this.n *= value;
//         return this;
//     },
//     div: function(value) {
//         this.n /= value;
//         return this;
//     },
//     pow: function(value) {
//         this.n **= value;
//         return this;
//     },
//     sqr: function() {
//         return Math.sqrt(this.n);
//     },
// };

// let res = n.add(5).div(2).mul(3).sub(35).pow(2).sqr();
// console.log(res)\

// ==============================================
// Рекурсия функции
// Написать функцию, которая вычисляет сумму чисел
// с использованием цикла, через рекурсию

// Цикл
// function sumTo(n){
//     let res = 0;
//     for ( let i = 0; i <= n; i++){
//         res += i;
//     }
//     return res;
// };

// sumTo(2)

// рекурсия

// function sumTo(n) {
//     if (n === 1) return n;
//     else {
//         n + sumTo(n - 1)
//     }
// };

// sumTo(2)
// ==============================================
// Вычислить факториал
// Написать функцию, которая вовзращает n!, использую рекурсию

// function factorial(n) {
//     if (n === 1) return n
//     else {
//         return n * factorial(n - 1);
//     }
// }

// factorial(2)

// ==============================================
// Напишите функцию fib(n)
// которая возвращает n-е число Фибоначчи

// function fib(n) {
//     if (n <= 1) return 1;
//     else {
//         fib(n - 1) + fib(n - 2);
//     }
// };
// fib(2)