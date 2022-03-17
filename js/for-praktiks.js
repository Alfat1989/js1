import users from "./export-file.js";

console.log(users)

const sectionEl = document.querySelector('.section')

const markup = [];

const divEl = document.createElement('div')
divEl.className = ('first-div');
const title = document.createElement('h1')
title.className = ('main - title');
title.textContent = 'Тестовый сайт'

divEl.appendChild(title)
markup.push(divEl)
console.log(markup)

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