import colors from "./colorsObj.js"
console.log(colors)

const divnEl = document.querySelector('.js-palette')
divnEl.addEventListener('click', onCardClick)

const cardsMarkUp = createColorCardsMarkup(colors)
divnEl.insertAdjacentHTML('beforeend', cardsMarkUp)

function createColorCardsMarkup(colorObj) {
    return colorObj.map(({ hex, rgb }) => {
        return`
        <div class="color-card">
            <div
                class='color-swatch'
                data-hex='${hex}'
                data-rgb='${rgb}'
                style='background-color:${hex}'
            ></div>
                <dvi class='color-meta'>
                    <p>HEX: ${hex}</p>
                    <p>RGB: ${rgb}</p>
                </dvi>
        </div>
        `;
    }).join('');
        
}

function onCardClick(e) {
    if (e.target.className!=='color-swatch') {
        return
    }  
    
    addActiveClass(e)
}


function addActiveClass(e) {
    
    const currentActiveCard=document.querySelector('.color-card.is-active')

    if (currentActiveCard) {
        currentActiveCard.classList.remove('is-active')
    }
    
    const swatchEl = e.target;
    const parentColorCard = swatchEl.closest('.color-card')
    parentColorCard.classList.add('is-active')
    document.body.style.backgroundColor = swatchEl.dataset.hex;
    console.log(swatchEl.dataset.hex)
}