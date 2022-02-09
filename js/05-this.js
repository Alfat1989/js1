// const showTag = function () {
    
//     console.log('Показывает объект', this)
//     console.log(`Показывает тег этого обьекта, "${this.tag}"`)
// }


// const user = {
//     tag: "Mango",
//     city: "Tokyo",
// }

// const player = {
//     tag: "Poly",
//     city: "Paris",
    
// }

// user.showUserTage = showTag;

// player.showPlayerTag = showTag;


// user.showUserTage()

// player.showPlayerTag()

// const xyz = user.showUserTage;

// console.log(xyz)

const customer = {
  firstName: "Jacob",
  lastName: "Mercer",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeMessage(callback) {
  // callback() это вызов метода getFullName без объекта
  console.log(`Обрабатываем заявку от ${callback()}.`);
}


customer.getThis = customer.getFullName;


console.log(customer.getThis())


// makeMessage(customer.getFullName.bind(customer));

