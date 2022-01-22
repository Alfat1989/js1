
//Обьект
// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     raiting: 8.38,
// };

// console.log(book);




//Вложенные свойства обьекта
// const user = {
//     name: "John Conor",
//     tag: "American",
//     location: {                //Вложенность
//         coutry: "Jamaica",
//         city: "Ocho Rios",
//     },
//     hobbies: ["swiming", "music", "sci-fi"],
//     status: {  //Вложенность
//         followers: 5623,
//         views: 4827,
//         likes: 1381,
//     },
// };

// console.log(user)
// console.log(user.location.coutry)//Обращение к свойствам через точку

// const userLocation = user.location;
// console.log(`User location is: ${userLocation}`);
// console.log(userLocation);

// const userCountry = user.location.coutry;
// console.log(`User country is: ${userCountry}`);

// const userHobbies = user.hobbies;
// console.log(userHobbies);
 
// const firstHobbies = user.hobbies[0];
// console.log(firstHobbies);

// const userName = "name";
// console.log(user[userName])




//Изменение значения свойства

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.rating = 9;
// book.isPublic = false;
// book.genres.push("dramm")

// console.log(book.rating)
// console.log(book.isPublic)
// console.log(book.genres)




//Короткие свойства

// const name = "John Conor";
// const age = 25;

// const user = {
//     name: name,
//     age: age,
// };

// console.log(user.name);
// console.log(user.age);

// const user = {
//     name,
//     age,
// };

// console.log(user.name);
// console.log(user.age);



//Вычисляемые свойства

// const propName = "name";
// const user = {
//   age: 25,
// };

// user[propName] = "John Conor"
// console.log(user.name);

// const user2 = {
//     age: 28,
//     [propName]:"Sarah Conor"
// }

// console.log(user2.name);



//Методы объекта

// const bookShelf = {
//     books: ["The Last Kingdom", "Dream Guardian"],
//     getBooks() {
//         console.log("Этот метод будет возвращать все книги - свойство books");
//     },
//     addBook(bookName) {
//         console.log("Этот метод будет добавлять новую книгу в свойство books");
//     },
// };
// bookShelf.getBooks();
// bookShelf.addBook("Новая книга");



//////////////////////////Перебор объекта//////////////////////////
//////Цикл for...in

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//     console.log(key);
//     console.log(book[key]);
// }



// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// for (const key in apartment){
//   keys.push(key);
//   values.push(apartment[key])
// }
// // for (const value in apartment){
// // values.push(value);
// // }

// console.log(keys);
// console.log(values);



// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
  
//  if(apartment.hasOwnProperty(key))
//   keys.push(key);
//   values.push(apartment[key]);
  
// }

// console.log(keys);
// console.log(values);



// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const userName = prompt("Enter name key: ");

// book[userName] = "John";
// const rusLanf="russian"
// book.pageCount = 836;
// book.language=["english", rusLanf]
// console.log(book)
// console.log(book.language)
// alert(`User name is: ${book.name}`);

const bookShelf = {
  books: ["The Last Kingdom", "Dream Guardian", "Hurry Potter", "Matrix", "Witcher"],
  getBooks() { },
  addBooks(bookName) {
    if (this.books.length < 6) {
      this.books.push(bookName);
      return this.books;
    } 
    return `books is too mutch`
  },
  
}

const bookSecond = {
  books:[],
  addBooks(bookName) {
    if (this.books.length < 6) {
      this.books.push(bookName);
      return this.books;
    } 
    return `books is too mutch`
  },
  
}

console.log(bookShelf.addBooks("Supernatural"))

bookShelf.name='cinema'
console.log(bookShelf)
console.log(bookSecond)

console.log(bookSecond.addBooks('Muvies'))

