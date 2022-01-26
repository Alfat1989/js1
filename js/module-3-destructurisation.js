// const temps = [14, -4, 25, 8, 11];

// console.log(Math.max(...[14, -4, 25, 8, 11]))


// function multiply(firstNumber, secondNumber, ...otherArgs) {
//     console.log(firstNumber);
//   console.log(secondNumber);
//   console.log(otherArgs);
// }

// // multiply(1, 2);
// // multiply(1, 2, 3);
// multiply(1, 2, 3, 4);



// function multiplyMax(number) {
//   let total = 0;
//   for (let i = 0; i <= number; i += 1){
//     total += i;
//   }
//   return total;
// }
// console.log(multiplyMax(8))


// function minNumber(array) {
//   let minNum=array[0]
//   for (const arr of array) {
//     if (minNum > arr) {
//       minNum = arr;
//     }
//   }
//   return Math.round(minNum);
// }

// console.log(minNumber([77,45,34,7.7,11,8,12]))


function arrayOfNumbers(min, max) {
  const newArray = [];
  for (let i = min; i <= max; i += 1){
    
      newArray.push(i);
    
  }
  return newArray;
}

console.log(arrayOfNumbers(1,3))