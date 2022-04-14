// import users from "./export-file.js";

console.log('hello world')

// const sectionEl = document.querySelector('.section')

// const markup = [];

// const divEl = document.createElement('div')
// divEl.className = ('first-div');
// const title = document.createElement('h1')
// title.className = ('main - title');
// title.textContent = 'Тестовый сайт'

// divEl.appendChild(title)
// markup.push(divEl)

// sectionEl.appendChild(divEl)




// //////////массив имён/////////////
// const getUserNames = users => {
//   return users.map(el=>el.name)
// };

// console.log(getUserNames(users));


// ///////////////объекты с определенным цветом глаз/////////////
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(({eyeColor})=>eyeColor===color)
// };

// console.log(getUsersWithEyeColor(users, 'blue'));




// ///////////////////////Получить массив имен пользователей по полу/////////////////////

// // const getUsersWithGender = (users, gender) => {
// //   return users.filter(user=>user.gender===gender).map(el=>el.name)
// // };

// // console.log(getUsersWithGender(users, 'male'))



// const getUsersWithGender = (users, gender) => {
//   return users.filter(user=>user.gender===gender).map(el=>el.name)
// };

// console.log(getUsersWithGender(users, 'male'))


// //////////////////////////Получить массив только неактивных пользователей///////////////////////
// const getInactiveUsers = users => {
//   return users.filter(({ isActive }) =>isActive!==true )
// };

// console.log(getInactiveUsers(users))





// /////////////Получить пользоваля (не массив) по email (поле email, он уникальный)/////
// const getUserWithEmail = (users, email) => {
//   return users.find(({email})=>(email)===email)
// };

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
// console.log(getUserWithEmail(users, 'elmahead@omatom.com'));





// ////////Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age)./////
// const getUsersWithAge = (users, min, max) => {
//   return users.filter(({age}) => (age>=min&&age<max) )
// };

// console.log(getUsersWithAge(users, 20, 30));

// console.log(getUsersWithAge(users, 30, 40));




// //////////////////////Получить общую сумму баланса (поле balance) всех пользователей.
// // const calculateTotalBalance = users => {
// //   return users.reduce((total, {balance}) => {
// //     return total+=balance
// //   },0)
// // };

// // console.log(calculateTotalBalance(users))

// const calculateTotalBalance = users => {
//   return users.reduce((total, user) => {
//     return total+=user.balance
//   },0)
// };

// console.log(calculateTotalBalance(users))



// ///////////////Массив имен всех пользователей у которых есть друг с указанным именем.
// const getUsersWithFriend = (users, friendName) => {
//  return users.filter(({friends})=>friends.includes(friendName)).map(({name})=>name)
// };

// console.log(getUsersWithFriend(users, 'Briana Decker'));
// console.log(getUsersWithFriend(users, 'Goldie Gentry'));






// //9/////////Массив имен (поле name) людей, отсортированных в зависимости
// //от количества их друзей(поле friends)

// const getNamesSortedByFriendsCount = users => {
//   return users.sort((a,b)=>a.friends.length-b.friends.length).map(({name})=>name)
// };

// console.log(getNamesSortedByFriendsCount(users));






// //10///////Получить массив всех умений всех пользователей (поле skills),
// //при этом не должно быть повторяющихся умений и они должны быть отсортированы
// //в алфавитном порядке.
// const getSortedUniqueSkills = users => {
//   return users.flatMap(({ skills }) => skills)
//     .filter((el, ind, arr) => arr.indexOf(el) === ind)
//     .sort((a, b) =>a.localeCompare(b))
// };

// console.log(getSortedUniqueSkills(users));




// function sumDigits(number) {
//   return number
//     .toString()
//     .split('')
//     .filter(e => {
//       if (e !== '-') {
//         return e
//        }
//     }).map(Number)
//     .reduce((previousValue, currentValue)=>previousValue+currentValue,0)

// }

// console.log(sumDigits(-4956))


// function gimme (triplet) {
//   const a=[...triplet].sort((a,b)=>a-b)
//   const b = a[1]
//   return triplet.indexOf(b)

// }


// console.log(gimme([2,1,3]))


// function largestPairSum (numbers) {
//   const maxFirst = Math.max(...numbers)
//   const maxIndex = numbers.indexOf(maxFirst)
//   const minArr = numbers.splice(maxIndex, 1)
//   console.log(minArr)
//   console.log(numbers)
//   // const minArr = numbers.filter(e => {
    
//   //   if (e !== maxFirst) {
      
//   //     return e
//   //   }

//   // })
//   // console.log(minArr)
//  const maxSecond=Math.max(...numbers)
//  return maxFirst+maxSecond
// }

// console.log(largestPairSum([-39, 92, -69, 72, -29, 39, -82, 86, -61,
//   -79, -25, 92, -86, -55, -67, -27, -78, -17, -66, 85, 23, 83, -25, 42, 64,
//   -53, 40, 72, 43, -42, -32, -27]
// ))

// var isAnagram = function(test, original) {
//   if(test.length!==original.length){
//     return false
//   }
    
//   const rightTest=test.toLowerCase().split('').sort((a,b)=>a.localeCompare(b)).join('')
//   const originalTest=original.toLowerCase().split('').sort((a,b)=>a.localeCompare(b)).join('')
  
//   if (rightTest === originalTest) {
//     return true
//   } else {
//     return false
//   }

// };


// console.log(isAnagram('bumble', 'dumble'))

// function solve(s){
//     //..
//   const splitArr=s.split('')
//   let totalUp=0
//   let totalLow=0
//   for(const letter of splitArr){
    
//     if(letter===letter.toUpperCase()){
//     totalUp+=1
//   }else{
//     totalLow+=1
//   }
    
//   }
//   return totalLow>=totalUp? s.toLowerCase():s.toUpperCase()
  
// }



// function getCount(str) {
//   let vowelsCount = 0;
//   const considers = ['a', 'e', 'i', 'o', 'u'];
//   for (let consider of considers) {
//     for (let s of str)
//       if (s === consider) {
//         vowelsCount += 1;
//       }
//   }
  
//   // enter your majic here
  
//   return vowelsCount;
// }

// console.log(getCount('abracadabra'))


// var greet = function (name) {
//   const hello = "Hello";
//   return hello.concat(
//     " ",
//     name[0].toUpperCase(),
//     name.slice(1).toLowerCase(),
//     "!"
//   );
// };


// console.log(greet('rikk'))



// function highAndLow(numbers){
//   const arrNumbers = numbers.split(' ')
//   console.log(arrNumbers)
//   return `${Math.max(...arrNumbers)} ${Math.min(...arrNumbers)}`
// }

// console.log(highAndLow("1 2 3 4 5"))



// function roundToNext5(n){
    
//   for (let i = n; ; i += 1){
//       if (i%5===0) {
//         return i
//       }
//   }

// }

// console.log(roundToNext5(-5))



// function sortByLength (array) {
//  return [...array].sort((a,b)=>a.length-b.length)
// };


// console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Eyesa","et",'', "Monocles"]))


 
// function capitalize(s) {

//   const firstArray = []
//   const secondstArray = []
//   for (let i = 0; i < s.length; i += 1) {
//     if (i % 2 === 0) {
//       firstArray.push(s[i].toUpperCase())
//     } else {
//       firstArray.push(s[i])
//     }
      
//   }

//   for (let i = 0; i < s.length; i += 1) {
//     if (i % 2 !== 0) {
//       secondstArray.push(s[i].toUpperCase())
//     } else {
//       secondstArray.push(s[i])
//     }
    
//   }

//   return [`${firstArray.join('')}`, `${secondstArray.join('')}`]
// }

// console.log(capitalize("abcdef"))


// function maskyt(cc) {
//   if (cc.length <= 4) return cc;
// }

// console.log(maskyt(''))

// function unusedDigits(array) {
//   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//   const arr2 = array.join('').split('').map(Number)
//   console.log(arr2)
//   const newArr = [];
//   for (let i = 0; i <= arr2.length; i += 1){
//     for (let j = 0; j <= arr.length; j += 1){
//       if (arr2[i]===(arr[j])) {
//         newArr.push(arr2[i])
//       }
//     }
//     return newArr
//   }
// }

// console.log(unusedDigits([12,34,56,78]))

// function pos_to_neg(num) {
//   if (num<=0) {
//     return num
//   }
// return -Math.abs(num);
// }

// console.log(pos_to_neg(-1))


