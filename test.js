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

const arr = [23, 2, 3, 4, 5];

function sortByValueAndIndex(arr) {
  const arrIndex = arr.map((el, i) => [el * (i + 1), el]);
  const sortArr = arrIndex.sort((a, b) => a[0] - b[0]);
  return sortArr.map((el) => el[0])
}

sortByValueAndIndex(arr)