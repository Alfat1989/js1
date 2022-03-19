import users from "./export-file.js";

const sectionEl = document.querySelector('.section')

const markup = [];

const divEl = document.createElement('div')
divEl.className = ('first-div');
const title = document.createElement('h1')
title.className = ('main - title');
title.textContent = 'Тестовый сайт'

divEl.appendChild(title)
markup.push(divEl)

sectionEl.appendChild(divEl)




//////////массив имён/////////////
const getUserNames = users => {
  return users.map(el=>el.name)
};

console.log(getUserNames(users));


///////////////объекты с определенным цветом глаз/////////////
const getUsersWithEyeColor = (users, color) => {
  return users.filter(({eyeColor})=>eyeColor===color)
};

console.log(getUsersWithEyeColor(users, 'blue'));




///////////////////////Получить массив имен пользователей по полу/////////////////////

// const getUsersWithGender = (users, gender) => {
//   return users.filter(user=>user.gender===gender).map(el=>el.name)
// };

// console.log(getUsersWithGender(users, 'male'))



const getUsersWithGender = (users, gender) => {
  return users.filter(user=>user.gender===gender).map(el=>el.name)
};

console.log(getUsersWithGender(users, 'male'))


//////////////////////////Получить массив только неактивных пользователей///////////////////////
const getInactiveUsers = users => {
  return users.filter(({ isActive }) =>isActive!==true )
};

console.log(getInactiveUsers(users))





/////////////Получить пользоваля (не массив) по email (поле email, он уникальный)/////
const getUserWithEmail = (users, email) => {
  return users.find(({email})=>(email)===email)
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); 





////////Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age)./////
const getUsersWithAge = (users, min, max) => {
  return users.filter(({age}) => (age>=min&&age<max) )
};

console.log(getUsersWithAge(users, 20, 30)); 

console.log(getUsersWithAge(users, 30, 40));




//////////////////////Получить общую сумму баланса (поле balance) всех пользователей.
// const calculateTotalBalance = users => {
//   return users.reduce((total, {balance}) => {
//     return total+=balance
//   },0)
// };

// console.log(calculateTotalBalance(users))

const calculateTotalBalance = users => {
  return users.reduce((total, user) => {
    return total+=user.balance
  },0)
};

console.log(calculateTotalBalance(users))



///////////////Массив имен всех пользователей у которых есть друг с указанным именем.
const getUsersWithFriend = (users, friendName) => {
 return users.filter(({friends})=>friends.includes(friendName)).map(({name})=>name)
};

console.log(getUsersWithFriend(users, 'Briana Decker')); 
console.log(getUsersWithFriend(users, 'Goldie Gentry')); 






//9/////////Массив имен (поле name) людей, отсортированных в зависимости 
//от количества их друзей(поле friends)

const getNamesSortedByFriendsCount = users => {
  return users.sort((a,b)=>a.friends.length-b.friends.length).map(({name})=>name)
};

console.log(getNamesSortedByFriendsCount(users));






//10///////Получить массив всех умений всех пользователей (поле skills), 
//при этом не должно быть повторяющихся умений и они должны быть отсортированы 
//в алфавитном порядке.
const getSortedUniqueSkills = users => {
  return users.flatMap(({ skills }) => skills)
    .filter((el, ind, arr) => arr.indexOf(el) === ind)
    .sort((a, b) =>a.localeCompare(b))
};

console.log(getSortedUniqueSkills(users));




