   
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


// const currentHours = new Date().getHours();
// console.log(currentHours);
// let time = '';
// if (currentHours > 5 && currentHours < 20) {
//   time = 'day';
// } else {
//   time = 'evening';
// }
// const askLogin = prompt('Введи свой логин');
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
// if (askLogin === null || askLogin === '') {
//   alert('Canceled.');
// } else if (askLogin.length < 4) {
//   alert("I don't know any users having name length less than 4 symbols");
// } else if (askLogin === 'User' || askLogin === 'Admin') {
//   const getPassword = prompt('Введи пароль');
//   if (getPassword !== null && getPassword !== '') {
//     if (askLogin === 'User' && getPassword === 'UserPass') {
//       alert(`Good ${time}, dear User!`);
//     } else if (askLogin === 'Admin' && getPassword === 'RootPass') {
//       alert(`Good ${time}, dear Admin!`);
//     } else {
//       alert('Wrong password!');
//     }
//   } else {
//     alert('Canceled');
//   }
// } else {
//   alert("I don't know you");
// }

//////////////////////////////////////////////////////////

// function squareDigits(num) {
//   const numArr = String(num).split("").map(el=>el**2);
//   return Number(numArr.join(""))
  
// }

// console.log(squareDigits(9119))


// function accum(s) {
//   const textArr = s.toLowerCase().split("")
//     const array=textArr.map((el,index)=>el.toUpperCase()+el.repeat(index)).join("-");
//   return (array);
// }

// console.log(accum("dfdsdf"))

// function isIsogram(str){
//   const text = str.toLowerCase().split("");
//   console.log(text)
//   const text2 = [...text].filter((el, ind, arr) => (arr.indexOf(el) === ind));
//   console.log(text2)
//   if (text.length===text2.length) {
//     return true
//   }
//   return false
// }

// console.log( isIsogram("Dermatoglyphics"))
// console.log( isIsogram("aba"))

// function reverseWords(str) {
//   const strArr=str.split(" ").map(el=>el.split("").reverse().join("")).join(" ")
//   return strArr;
// }

// console.log(reverseWords("This is an example!"))

/////////////////////////количкство пассажиров//////////////////////
// const number = function(busStops){
//   // console.log(busStops)
  
//   return busStops.reduce((acc,el)=>acc+(el[0]-el[1]),0);
  
// }

// console.log(number([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]))

//////////////////////////////сумма положительных чисел//////////////////////////
// function positiveSum(arr) {
//   const number = arr.reduce((acc, el) => {
//     return el>0? acc+el:acc
//   }, 0)
//   return number
// }

// console.log(positiveSum([-1, -2, -3, -4, -5]));


//////////////////////////////////////////Если среднее число массива меньше чем параметр yourPoints)
// function betterThanAverage(classPoints, yourPoints) {
//   return [...classPoints].reduce((acc, el) => acc+el, 0)/ classPoints.length < yourPoints ? true : false;
  
  
// }

// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))


// function sumMix(x){
//   return x.reduce((acc,el)=>acc+Number(el),0)
// }

// console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]))


// //////////////////////////////////////////////////////////////
// const divEl = document.createElement("div")
// divEl.classList.add("container")
// console.log(divEl)

// divEl.innerHTML = `<ul>
// <li><a>Ссылка1</a></li>
// <li><a>Ссылка2</a></li>
// <li><a>Ссылка3</a></li>
// </ul>`
// // divEl.append(ulEl)
 

// const bodyEl = document.querySelector("body")
// bodyEl.append(divEl)



//  Цель этого упражнения — преобразовать строку в новую строку,
//     где каждый символ в новой строке — это «(», если этот символ встречается в исходной
//         строке только один раз,
//     или «)», если этот символ встречается в исходной строке более одного раза.нить.
//     Игнорировать заглавные буквы при определении, является ли символ дубликатом.

// Примеры
// "дин" => "((("
// "отступить" => "()()()"
// "Успех" => ")())())"
// "(( @" => "))(("
// Примечания
// Сообщения об утверждениях могут быть неясными в отношении того,
//     что они отображают на некоторых языках.Если вы читаете «... Это должно кодировать XXX»,
//      «XXX» - это ожидаемый результат, а не ввод!


// const changeLetter = function (word) {
//     const newWords = [...word]
    
//     console.log(newWords)
//     const secondWord = [...word].forEach(el => {
//         const newArr=[]
//         if (newWords.includes(el)) {
//             newArr.push("(")
//         }
//         return newArr
        
//     })
        

   
// }

// console.log(changeLetter("дин"))


// function convertMoney(money) {
//     const cny = 6.75
//     const convert = money * cny;
//     // console.log(convert.toFixed(2))
//     return `${convert} Chines Yuan`
// }

// console.log(convertMoney(50))


// function whatCentury(yearString) {
//     let century = Number(yearString.substr(0, 2));
//     // console.log(century)
    
//     const yearNumber = Number(yearString);
//     if (yearNumber%100 !==0) {
//         century+=1
//     }

//     // console.log(century)

//     const num=Number(String(century).slice(-1))

//     let suffix = ''
    
//     switch (num) {
//         case 1:
//             suffix = "st";
//             break;
        
//         case 2:
//             suffix ='nd';
//             break;
        
//         case 3:
//             suffix ='rd';
//             break;
        
//         default:
//             suffix = 'th';
//     }

//     return century+suffix
    
// }

// console.log(whatCentury("1999"))



function pillars(num_pill, dist, width) {
    if (num_pill <= 1) {
        return 0;
    }
    return ((dist*100)*(num_pill-1)+(width*(num_pill-2)))
}

console.log(pillars(11,15,30))