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

// function nbYear(p0, percent, aug, p) {
//   // your code
//   for(i = 0; p > p0; i++) {
//     p0 = Math.floor(p0 + p0 * percent / 100 + aug);
//   }
//   return i;
// }

// console.log(nbYear(1500000, 2.5, 10000, 2000000))


// function getFruit(name) {
//   const fruits = {
//     srawberry: 'strawberry1',
//     kiwi: 'kiwi1',
//     apple: 'apple1'
//   }

//   return Promise.resolve(fruits[name]);
// }

// getFruit('apple').then(apple=>console.log(apple))


// function findOutliner(numbers) {
//   const odd = []
//   const even = []

//   for (let i = 0; i < numbers.length; i += 1) {
    
//     if (numbers[i] % 2 === 0) {
//       even.push(numbers[i])
        
//     } else {
//       odd.push(numbers[i])
     
//     }

//   }

//   if (odd.length < even.length) {
//     return odd[0];
//   } else {
//     return even[0]
//   }

// }


// console.log(findOutliner([2,3,4,6,8]))
// console.log(findOutliner([3,5,6,7,9]))

function persistence(num) {
  let result;
  const x = String(num).split('');
  console.log(x);
  
  if(num > 9 && num > 99){
    // result = x.reduce((acc, elem) => {
    //   acc *= Number(elem);
    //   return acc;
    // }, 1);
    return x.map(elem => Number(elem) * Number(elem+1));
    }
    
    // return x;
}

console.log(persistence(39)) //,3);
// console.log(persistence(4)) //,0);
// console.log(persistence(25)) //,2);
