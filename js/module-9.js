// console.log('This is 9 modupr "promis" ');

// const isSuccess = Math.round(Math.random()*(50 - 20) + 20)
// // const isSuccess = true

// console.log(isSuccess)

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (isSuccess>40) {
//             resolve('yes')
//         }
//         else {
//             reject('no')
//         }
//     }, 1000)
// });

// promise.then(value => {
//     console.log("onResolve call inside promise.then()");
//     console.log(value); // "Success! Value passed to resolve function"
//   },
//   // onReject will run third or not at all
//   error => {
//     console.log("onReject call inside promise.then()");
//     console.log(error); // "Error! Error passed to reject function"
//   }
// );
// promise.then(onYes).then(onSecondYes).catch(onNo).finally(onFinaly)

// function onYes() {
//     console.log('will yesssssss')
//     console.log(value)
    
// }

// function onSecondYes() {
//     console.log('will second yesssssss')
//     console.log(value)
    
// }

// function onNo() {
//     console.log('Noooooooooo')
// }

// function onFinaly() {
//     console.log('Promis end!!!!!!!!!!')
// }




////////////////////////////////////////////

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });

// promise.then(value => {
//     console.log('yes');
//     return value*2
// }).then(value => {
//     console.log('second yes');
//     console.log(value)
// }).catch(error => {
//     console.log(error)
// }).finally()

function nbYear(p0, percent, aug, p) {
  // your code
  for(i = 0; p > p0; i++) {
    p0 = Math.floor(p0 + p0 * percent / 100 + aug);
  }
  return i;
}

console.log(nbYear(1500000, 2.5, 10000, 2000000))
