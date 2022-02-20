// const listWithId = document.querySelector(".menu");
// listWithId.style.textTransform = "uppercase";
// listWithId.style.fontSize = '24px';
// console.log(listWithId);

// const listWithClass = document.querySelector('.menu');
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = 'tomato';
// console.log(firstMenuItem);

// const message = document.querySelector("#message");
// console.log(message.value);

// const activeLink = document.querySelector(".btn.active");
// console.log(activeLink.href);

// const image = document.querySelector(".image");
// console.log(image.src); // https://placeimg.com/640/480/animals
// image.src = 'https://placeimg.com/640/480/tech';


// const saveBtn = document.querySelector('.editor button[data-action="save"]');
// const closeBtn = document.querySelector('.editor button[data-action="close"]');

// console.log(saveBtn.dataset.action); //save
// console.log(closeBtn.dataset.action); //close

// const dishes = document.querySelectorAll(".dishes > li");
// dishes.forEach((dish) => {
//   console.log(dish.dataset.id);
//   console.log(dish.innerHTML);
// });

// const article = document.querySelector(".article");
// console.log(article.innerHTML);

// const title = document.querySelector(".article .title");
// console.log(title.innerHTML);


// title.innerHTML='New and <span class="accent">improved</span> title';

// const text = document.querySelector(".article .text");
// console.log(text.innerHTML);

// const link = document.querySelector(".article .link");
// console.log(link.innerHTML);


const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
const list = document.querySelector(".list");

const markup = technologies
    .map((technology) => `<li class="list-item">${technology}</li>`)
    .join("");
  

console.log(markup);
 
list.innerHTML = markup;

const subtitleEl = document.querySelector("h2")
console.log(subtitleEl)
const subtitleElButton = document.addEventListener("click", subtitleEl)

const htmlEl = document.querySelectorAll(".list-item")
htmlEl.forEach(el=>el.innerHTML="hello")
console.log(htmlEl)