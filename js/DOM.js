const divEl = document.querySelector(".container")
divEl.classList.add("js-container")

console.log(divEl)

const paragraphEl = document.createElement("label")
paragraphEl.textContent="Введите пароль"
console.log(paragraphEl)

const inputEl = document.createElement("input")
paragraphEl.append(inputEl)

divEl.append(paragraphEl)



console.log(inputEl.value)

const getCllass = function (name) {
    console.log(name.class)
}

// const newClass=buttonEl.classList.toggle("conts")

const buttonEl = document.createElement("button")
buttonEl.type="button"
buttonEl.textContent = "Кнопка"
buttonEl.classList.add("button")
console.log(buttonEl)

divEl.append(buttonEL)
dfgdfg