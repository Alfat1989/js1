const mainDivEl = document.querySelector(".main-div")
const mainTitle = document.createElement("h1")
mainTitle.textContent = "Модуль 7"
mainTitle.style.textAlign="center"
mainDivEl.appendChild(mainTitle)

const containerDivButtonEl = document.querySelector(".js-container")
const addBtnEl = document.querySelector(".js-add-btn")
let labelCounter = containerDivButtonEl.children.length+1



addBtnEl.addEventListener('click', onAddBtnClick)
containerDivButtonEl.addEventListener('click', onButtonClock)// Событие клика на диве


///////////////////Делегирование события/////////////////////////
///////////Вешаем событие на общий див и выводим значение на кликаемый элемент///////////////
function onButtonClock(evt) {
    // console.log(evt.target.nodeName)// По какому эдементу кликнули
    if (evt.target.nodeName !== "BUTTON") {
        return
        // Если кликнул не на кнопку то эффекта не будетт никакого
    }
    console.log(evt.target.textContent) // Показывает элемент на котором был клик
}

function onAddBtnClick() {
    const btn = document.createElement('button')
    btn.type = 'button';
    btn.textContent = `Кнопка ${labelCounter}`; 

    containerDivButtonEl.appendChild(btn)
    labelCounter += 1
    
    console.log(`Добавилась ${btn.textContent}`)
}

/////////////////////////////////////////////////////////////////////////////


///////////////////Вешаем класс на кнопки и выводим в консоль выбранный тег//////////////////////

// const listEl = document.querySelector(".js-tags")
// let selectedTag = null;

// listEl.addEventListener('click', onButtonclick)

// function onButtonclick(e) {
//     if (e.target.nodeName !== "BUTTON") {
//         return
//     }

//     const activeBtn = document.querySelector('.tags__btn--active') //Ищеи по классу, если нет то возврвщае null
//     // console.log(activeBtn);

//     if (activeBtn) {
//         activeBtn.classList.remove('tags__btn--active')// Если есть такой класс то снимаем его с элемента
//     }
    


    
//     const btn=e.target // Событие на клик записываем в переменную
//     btn.classList.add("tags__btn--active") //Добавляем класс на кнопку по которой кликнули
//     selectedTag = btn.dataset.value;//Присваиваем значение тега к которому присвоили класс
    
//     console.log(selectedTag);
// }


/////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////............//////////////////////////////////////////

const listEl = document.querySelector(".js-tags")
const selectedTag = new Set();//Обьект где будут храниться выбранные значения


listEl.addEventListener('click', onButtonclick)

function onButtonclick(e) {
    if (e.target.nodeName !== "BUTTON") {
        return
    } 

    const clicketBtn = e.target
    const isActive = clicketBtn.classList.contains('tags__btn--active')
        
    if (isActive) {
        selectedTag.delete(clicketBtn.dataset.value)
    } else {
        selectedTag.add(clicketBtn.dataset.value)
    }

    clicketBtn.classList.toggle('tags__btn--active')

      //  добавляем значения (они не повторяются)
    console.log(selectedTag);

    
    

}

