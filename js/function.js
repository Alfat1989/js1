// function multiply(x, y, z) {
//     console.log(`mult ${x+y+z}`)
// }

// multiply(1, 3, 1);



//  return
// function multReturn(x, y, z) {
//     console.log("Код до return выполняется как обычно");
//     return x * y * z;
//     console.log("Этот лог никогда не выполнится, он стоит после return");
// }

// let result = multReturn(2, 3, 4)
// console.log(result);


//  порядок выполнения функции
// function plusPar(a,b,c) {
//     console.log(`Результат умножения равен ${a * b * c}`);
// }

// console.log("Лог до вызова функции plusPar");
// plusPar(2, 3, 5);
// console.log("Лог после вызова функции plusPar");



// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const amaut = prompt("Введити сумму снятия");
// const balance = 5000;

// function withdraw(amaut, balance) {
//     if (amaut===0) {
//         console.log("Для проведения операции введите сумму больше нуля")
//     } else if (amaut>balance) {
//         console.log("Недостаточно средств на счету")
//     } else {
//         console.log("Операция снятия средств проведена успешно");
//     }
// }

// withdraw(amaut, balance);

// function withdraw(amaut, balance) {
//     if (amaut===0) {
//         console.log("Для проведения операции введите сумму больше нуля");
//         return;
//     }
//     if (amaut > balance) {
//         console.log("Недостаточно средств на счету")
//         return;
//     }
    
//     console.log("Операция снятия средств проведена");
    
// }

// withdraw(amaut, balance);




// function out() {
//     console.log("hello");
//     inners()
        
    
// }

// function inners() {
//     out();
// }

// out();



// 9.2
// function getExtremeElements(array) {
    
//     const newArray=[];
//   newArray[0]=array[0];
//   newArray[1]=array[array.length-1]
//   return newArray;
  
// }

// console.log(getExtremeElements(["Earth", "Mars", "Venus"]))


//  10.2

// function splitMessage(message, delimeter) {
//   let words=message.split(delimeter);
//   return words;
// }

// console.log(splitMessage("Mango", ""))



//11.2
// function calculateEngravingPrice(message, pricePerWord) {
   
//   // const messageOne = message.split(" ").length;
//   const totalPrice = message.split(" ").length * pricePerWord
//   return totalPrice
   
// }

// alert(calculateEngravingPrice("Web-development is creative work", 40))




//13.2
// function slugify(title) {
  

//   const slug=title.split(" ").join("-").toLowerCase();
  // return slug
  
// }

// alert(slugify("How to become a JUNIOR developer in TWO WEEKS"));



//16.2
// function makeArray(firstArray, secondArray, maxLength) {
    
//   const allArray = firstArray.concat(secondArray);
  
//   const lastArray=allArray.slice(0, maxLength);
//   return lastArray

   
// }
  
// alert(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));


//18.2
// function calculateTotal(number) {
//   let total=0;
//   for (let i=0; i<=number; i+=1)
//   total+=i;
//   return total;
  
// }

// console.log(calculateTotal(7))



//20.2
// function calculateTotalPrice(order) {
//   let total = 0;
  
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   return total;
  
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]))



//21.2
// function findLongestWord(string) {

//   const message = string.split(" ")
//   console.log(message)
//   let messageLong = [];
//   for (let mess of message) {
//     console.log(mess)
//     if (mess.length > messageLong.length) {
//       messageLong = mess;
//     }
    
//   }
//   return messageLong;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));





//23.2
// function filterArray(numbers, value) {
//   const newAreeay = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i])
//     if (numbers[i] > value) {
//       newAreeay.push(numbers[i]);
//     }
//   }
//   return newAreeay
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));



//25.2
// function getCommonElements(array1, array2) {
//   const sameArray=[];
//   for (let same of array1) {
//     console.log(same);
//     if (array2.includes(same)) {
//       sameArray.push(same);
//     }
    
//   }
//   return sameArray;
// }

// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]))

//29.2
// function getEvenNumbers(start, end) {
//   const nweEvent = [];
//   for (let i = start; i <= end; i += 1)
//     if (i % 2 === 0) {
//       nweEvent.push(i)
//     }
//   return nweEvent
// }
// console.log(getEvenNumbers(6, 12));


//32.2
// function includes(array, value) {
//   let real;
  
//   for (let i = 0; i < array.length; i+=1) {
//     console.log(array[i]);
//     if (array[i] === value) {
//       real = true;
//       break;
//     } else {
//       real = false;
//     }

//   }
//   return real;
// }
  

// console.log(includes([1, 2, 3, 4, 5], 3));
