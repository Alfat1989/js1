// const clearLogBtn = document.querySelector('[data-action="clear"]');
// const logList = document.querySelector(".log-list");
// let keypressCounter = 1;

// document.addEventListener("keydown", logMessage);
// document.addEventListener("keyup", logMessage);
// clearLogBtn.addEventListener("click", reset);

// function logMessage({ type, key, code }) {
//   const markup = `<div class="log-item">
//     <span class="chip">${keypressCounter}</span>
//     <ul>
//       <li><b>Event</b>: ${type}</li>
//       <li><b>Key</b>: ${key}</li>
//       <li><b>Code</b>: ${code}</li>
//     </ul>
//   </div>`;

//   logList.insertAdjacentHTML("afterbegin", markup);

//   if (type === "keyup") {
//     incrementKeypressCounter();
//   }
// }

// function reset() {
//   keypressCounter = 1;
//   logList.innerHTML = "";
// }

// function incrementKeypressCounter() {
//   keypressCounter += 1;
// }

//////////////////////////Кнопки///////////////////////////////////
////////////////////////////////////////////////////////////////
// const addBtnEl = document.querySelector("button[data-action=add]")
// const removeBtnEl = document.querySelector("button[data-action=remove]")
// const clickBtnEl = document.querySelector("#btn")
// console.log(clickBtnEl)




// addBtnEl.addEventListener('click', () => {
//   console.log('Слушатель добавлен')
//   clickBtnEl.addEventListener("click", onClickBtn)


// })


// removeBtnEl.addEventListener('click', () => {
//   console.log('Слушатель снят')
//   clickBtnEl.removeEventListener('click', onClickBtn)
// })


// function onClickBtn() {
//   console.log('Клик по кнопке')
// }

//////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////



////////////////////////////////////Форма///////////////////////////////////
//////////////////////////////////////////////////////////////////////////

// const form = document.querySelector("#form")
// // console.log(form)

// form.addEventListener('submit', onFormSubmit)

// function onFormSubmit(event) {
//   event.preventDefault();
//   // const formElements=event.currentTarget.elements
//   // console.dir(formElements.subscription.value)

//   // const email=formElements.email.value
//   // const password = formElements.password.value
  
//   // console.log(email, password)

//   const formData = new FormData(event.currentTarget)
//   formData.forEach((value, name)=> {
//     console.log(value);
//     console.log(name);
//   })
  
// }




//////////////////////форма заявки//////////////////////////////
///////////////////////////////////////////////////////////////

const inputEl = document.querySelector(".js-input")
const licenseCheckBoxEl = document.querySelector(".js-locense")
const btn = document.querySelector(".js-button")
const nameLabel = document.querySelector(".js-button > span")

const paragraphEl = document.createElement("p")
paragraphEl.classList.add('paragraph')
const lastDivEl = document.querySelector('.last-div')
lastDivEl.appendChild(paragraphEl)
console.log(lastDivEl)


// inputEl.addEventListener('focus', onInputFocus)
// inputEl.addEventListener('blur', onInputBlur)
inputEl.addEventListener('input', onInputChange)
licenseCheckBoxEl.addEventListener('change', onLicenseChange)
btn.addEventListener('click', onBtnClick)
nameLabel.addEventListener('click', onBtnClick)

function onInputFocus(event) {
  console.log("Инпут получил фокус событие")
}

function onInputBlur(event) {
  console.log("Инпут получил blur событие")
}

function onInputChange(event) {
  
  nameLabel.textContent=event.currentTarget.value
}

function onLicenseChange(event) {
  btn.disabled=!event.currentTarget.checked
  
}

function onBtnClick(event) {
  console.log(`Пользователь ${event.currentTarget.textContent}`)
}