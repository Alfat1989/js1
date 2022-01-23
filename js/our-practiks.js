// function numbersToSum(array) {
//     let firstNumber = array[0];
//     let secondNumber=array[1];

//     for (const arr of array) {
//         if (arr > 0 && arr % 1 === 0) {
//             if (firstNumber > arr) {
//                 firstNumber = arr;
//             }
//         }
//     }
//     console.log(firstNumbe)
//     // return firstNumbe;

//     for (const arr of array) {
//         if (arr > 0 && arr % 1 === 0) {
//             if (secondNumber=firstNumber) {
//                 array.splice(arr);
//             }
//             if (secondNumber > arr) {
//                 secondNumber = arr;
//             }
//         }
//     }
//     console.log(secondNumber)
// }

// console.log(numbersToSum([20,34,556677,1234,11,-7]))



// function findRestaurant(list1, list2) {
//     const nweArr = [];
//     for (const arr of list1) {
//         if (list2.includes(arr)) {
//             nweArr.push(arr)
//         }
//     }
//     return nweArr
// };

// console.log(findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"],["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]))


// function noSpace(x) {
//     const y = x.split(" ");
//     return y.join('');
// }

// console.log(noSpace("Hello    name"))

// function greet(name) {
//     return (`Hello, ${name} how are you doing today?`)
// }

// console.log(greet("Beatch"))


const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "На берегу спокойных вод",
    author: "Роберт Шекли",
    rating: 8.51,
  },
  {
    title: "Сон смешного человека",
    author: "Федор Достоевский",
    rating: 7.75,
  },
];

for (const book of books) {
    console.log(book);
// console.log(book.author);
// console.log(book.title);
}

