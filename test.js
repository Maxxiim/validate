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

const arr = [1, 2, 4, 5, 6]
const find = (arr, e) => arr.indexOf(e) !== -1
  ? arr.indexOf(e)
  : "Not Found";
find(arr, 5)

// ==============================================
// Даны два массива, нужно написать функцию
// которая проверяет эти массивы, удаляет одинаковые элементы,
// и возвращает числа по возрастанию

const arr1 = [1, 3, 5, 7, 9, 10];
const arr2 = [10, 2, 2, 2, 8, 6, 4, 2, 1];

function mergeArrays(arr1, arr2) {
  let res = [];
  const arrUnity = arr1.concat(arr2);
  arrUnity.forEach((el) => !res.includes(el) ? res.push(el) : 0);
  res.sort((a, b) => a - b);
  console.log(res)
};

mergeArrays(arr1, arr2);