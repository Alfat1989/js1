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
function findLongestWord(string) {

  const message = string.split(" ")
  console.log(message)
  let messageLong = message[0].length;
  for (let i = 0; i < message.length; i += 1) {
    console.log(message[i].length)
    if (message[i].length > messageLong[i]) {
      messageLong = message[i].length;
    }
    
  }
  return message[messageLong];
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))