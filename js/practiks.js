   
/////ЗАДАЧА 1
//Оплата чека с процентом

// const userInput = prompt("Введите сумму чека: ");
// const tip = prompt("Введите процент чаевых: ")

// if (userInput === null || tip === null) {
//     alert("Отмена операции");
// } else {
//     const secondNumber = Number.parseFloat(userInput);
//     const secondTip = Number.parseFloat(tip);
    
//     if (Number.isNaN(secondNumber) || Number.isNaN(secondTip) || secondNumber < 0 ||
//         secondTip<0 || secondTip>100) {
//         alert("Не правильно введённые данные");
//     } else {
//         const tipAmout = Number((secondNumber * secondTip / 100).toFixed(2));
//         const totalSumToPay = secondNumber + tipAmout;
//         alert(`Check number: ${secondNumber} : Процент: ${secondTip}% Сумма процента: ${tipAmout} Сумма общая: ${totalSumToPay}`)
//     }
// }





/////ЗАДАЧА 2
// Find middle character of the word.
// User is going to input a word. Your task is to find the middle character of this word.
// If the word’s length is odd - return the middle character.If word’s length is even - return the middle 2 characters.
// You should validate for empty value and for value with spaces only, in that case show message: “Invalid value”.
// For user input use “prompt” function. For displaying result use “alert” function.

// Examples:
// 	For user input “test” should return “es”
// 	For user input “character” should return “a”
// 	For user input “B” should return “B”
// 	For user input “” should return “Invalid value”
// For user input “       “ should return “Invalid value”


// const inputText = prompt("Введите слово или текст");

// if (inputText === null || inputText.trim() === "") {
//     alert("Invalid value");
// } else {
//     const lelgthString = inputText.length;
//     if (lelgthString % 2 === 0) {
        
//         const startIndex = lelgthString / 2 - 1;
//         const endIndex = startIndex + 2;
//         alert(inputText.slice(startIndex, endIndex));
//     }
//     else {
//         const centralIndex = Math.floor(lelgthString / 2)
//         alert(inputText.slice(centralIndex, centralIndex+1));
//     }
// }






/////ЗАДАЧА 3
// Write the code which verify user rights.
// Step 1. Check login
// 	Ask user for a login // use prompt()
// 	If the input is an empty line or Esc – show “Canceled.” // for showing - use alert()
// 	If the input length less than 4 symbols - show “I don't know any users having name length less than 4 symbols”.
// 	If it’s another string – then show “I don’t know you”.
// 	If the visitor enters "User" or "Admin", then prompt for a password.
// Step 2. Check password:
// 	For an empty string or cancelled input, show “Canceled.”
// 	For login “User” correct password is “UserPass”, for “Admin” correct password is  “RootPass”.
// In other case, show “Wrong password”.
// Step 3. Greets the user appropriately:
// 	If the current time in hours is more then 5.00 and less then 20: // current hours – new Date().getHours()
// 	For “User” show “Good day, dear User!”
// 	For “Admin” show “Good day, dear Admin!”
// 	In other way:
// 	For “User” show “Good evening, dear User!”
// 	For “Admin” show “Good evening, dear Admin!


const currentHours = new Date().getHours();
console.log(currentHours);
let time = '';
if (currentHours > 5 && currentHours < 20) {
  time = 'day';
} else {
  time = 'evening';
}
const askLogin = prompt('Введи свой логин');
// if (askLogin === null || askLogin === '') {
//   alert('Canceled.');
// } else if (askLogin.length < 4) {
//   alert("I don't know any users having name length less than 4 symbols");
// } else if (askLogin === 'User' || askLogin === 'Admin') {
//  const getPassword = prompt('Введи пароль');
//   if (getPassword === null || getPassword === '') {
//     alert('Canceled');
//   } else {
//     if (askLogin === 'User' && getPassword === 'UserPass') {
//       alert(`Good ${time}, dear User!`);
//     } else if (askLogin === 'Admin' && getPassword === 'RootPass') {
//       alert(`Good ${time}, dear Admin!`);
//     } else {
//       alert('Wrong password!');
//     }
//   }
// } else {
//   alert("I don't know you");
// }
if (askLogin === null || askLogin === '') {
  alert('Canceled.');
} else if (askLogin.length < 4) {
  alert("I don't know any users having name length less than 4 symbols");
} else if (askLogin === 'User' || askLogin === 'Admin') {
  const getPassword = prompt('Введи пароль');
  if (getPassword !== null && getPassword !== '') {
    if (askLogin === 'User' && getPassword === 'UserPass') {
      alert(`Good ${time}, dear User!`);
    } else if (askLogin === 'Admin' && getPassword === 'RootPass') {
      alert(`Good ${time}, dear Admin!`);
    } else {
      alert('Wrong password!');
    }
  } else {
    alert('Canceled');
  }
} else {
  alert("I don't know you");
}