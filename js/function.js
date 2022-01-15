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

function getExtremeElements(array) {
    
    const newArray=[];
  newArray[0]=array[0];
  newArray[1]=array.length-1;
  return newArray;
  
}

console.log(getExtremeElements([1, 2, 3, 4, 5]))