// function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// }

// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }


// registerGuest("Манго", greet);


// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// });

// registerGuest("Поли", function notify(name) {
//   console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
// });


// function processCall(recipient) {
//   // Имитируем доступность абонента случайным числом
//     const isRecipientAvailable = Math.random() > 0.5;
//     console.log(isRecipientAvailable)

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
//     // Логика активации автоответчика
//   } else {
//     console.log(`Соединяем с ${recipient}, ожидайте...`);
//     // Логика принятия звонка
//   }
// }

// processCall("Манго");

// function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);


// function repeatLog(n) {
//   for (let i = 0; i < n; i += 1) {
//     console.log(i);
//   }
// }

// repeatLog(5);

// const numbers = [];
// for (let i = 5; i <= 25; i += 1){
//     if (i % 5 === 0) {
//         numbers.push(i)
//     }
// }

// console.log(numbers);

// numbers.forEach(function (number, index) {
//     console.log(`Индекс ${index}, значение ${number}`)
// });




///////////////////////////////////////////////////////
//////////////////коллбэки функций/////////////////////

// const doMath = function (a, b, callback/*переменная для функции add*/) {
//     const result = callback(a, b/*передали параметры для функции add*/);
    
//     console.log(result); /*выдача результата*/
// }

// const add = function (x, y/*приняли параметры то callback (a,b)*/) {
//     return x + y;
// }

// const sub = function (x, y) {
//     return x - y;
// }

// doMath(4, 5, add/*ссылка на функцию*/);
// doMath(20, 18, add)
// doMath(20, 18, sub)

// ////аналогичная задача//анонимные функции////////

// doMath(6, 7, function (x, y) {
//     return x * y;
// });

/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////





///////////////////////////////////ЗАМЫКАНИЯ/////////////////////////////////


// const fnA = function (parametr) {
//     const innerVariablr = "Значение внутренней переменной";

//     const innerFunction = function () {
//         console.log("Это вызов innerFunction");
//     };
//     return innerFunction;
// };

// const fnB = fnA();
// fnB()
// console.log(fnB)




////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////// З А М Ы К А Н И Я ///////////////////////////////////

const closure = function () {
    const makeMaster = function (name) {
    const makeDetal = function (detal, detal2) {
        console.log(`${name} ремонтирует ${detal} и ${detal2}`)
    }
    return makeDetal;
}

const masterPetr = makeMaster('Пётр');  // передаем в пременную результат вызова функции с параметром
const masterAlex = makeMaster("Алексей"); // передаем в пременную результат вызова функции с параметром

masterPetr("мотор", "кпп") // вызвали пременную с именем Пётр и предпли ей значение для другой функции
masterAlex("кузов", "дно")
masterAlex("фары", "радио")
masterAlex("кпп", "редкутор")


const rounder = function (places) {
    return function (number) {
        return Number(number.toFixed(places))
    }
}


const rounder2 = rounder(2)
console.log(rounder2(44.3457332))


const multiply = function (mult) {
    return function (number) {
        return number*mult
    }
}


const multiply2 = multiply(2);
const multiply3 = multiply(3);
const multiply4 = multiply(4);

console.log(multiply2(33));
console.log(multiply3(33));
console.log(multiply4(33));
    
}

// console.log(closure()) 




/////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

const user = {
    fullName: "Mango",
    showName() {
        console.log("this: ", this);
        console.log("this.fillName: ", this.fullName);

    },
};

user.showName.call(user)