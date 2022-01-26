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


// function arrayOfNumbers(min, max) {
//   const newArray = [];
//   for (let i = min; i <= max; i += 1){
    
//       newArray.push(i);
    
//   }
//   return newArray;
// }

// console.log(arrayOfNumbers(1,3))


const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  name,
  tag,
  stats: { followers, views: userViews, likes: userLikes = 0 },
} = user;

console.log(name); // Jacques Gluke
console.log(tag); // jgluke
console.log(followers); // 5603
console.log(userViews); // 4827
console.log(userLikes);
