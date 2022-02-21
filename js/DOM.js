

const btnEl = document.querySelector(".btn")
btnEl.style.backgroundColor="pink"
btnEl.textContent="pink"
btnEl.setAttribute("type", "button")

btnEl.setAttribute("data-action", "save")

console.log(btnEl.dataset.action)

console.log(btnEl.hasAttribute("type"))


console.log(btnEl)
console.log(btnEl.attributes)


const newTagEl = document.createElement("h1");
newTagEl.textContent="This is h1 tag"
console.log(newTagEl)

const imageEl = document.createElement("img")
imageEl.src = "https://avatars.mds.yandex.net/i?id=5f28b35384960743cf4aa743467a92fd-5877456-images-thumbs&n=13"
imageEl.alt = "Cosmos"



console.log(imageEl)

const listEl = document.createElement("ul")
console.log(listEl)

const itemUlEl = document.createElement("li")
itemUlEl.classList="img-main"
console.log(itemUlEl)

itemUlEl.append(imageEl)

listEl.append(itemUlEl)

console.log(listEl)

const listUlEl = document.querySelector(".list-element")
listUlEl.append(itemUlEl)
console.log(listUlEl)

const article = document.querySelector(".article");
console.log(article.innerHTML);


