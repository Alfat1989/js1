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

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// // function makeMessage(callback) {
// //   // callback() это вызов метода getFullName без объекта
// //   console.log(`Обрабатываем заявку от ${callback()}.`);
// // }


// customer.getThis = customer.getFullName;


// console.log(customer.getThis())

// const another = customer.getFullName();


// const user = {
//   tag: "Mango",
//   showTag() {
//     console.log(this);
//     console.log(this.tag);
//   },
// }

// // user.showTag()

// const invokeAction = function (action) {
//   console.log(action);
  
  
//   action()
// }

// invokeAction(user.showTag)


const book = {
  title: "React for beginner",
  
  showTitle() {
    console.log(this.title);
  },
}

// const showThis=function() {
//     console.log(this);
//   }

const bookSecond = {
  title: "JS for beginner",
  
}

// bookSecond.showThis = showThis;
 
// bookSecond.showThis()


const counter = {
  value: 0,
  increment(value){
    console.log("increment -> this", this);
    this.value += value;
    console.log(this)
  },
  decrement(value){
    console.log("increment -> this", this);
    this.value -= value;
  }
}

const updateCounter = function (value, operation) {
  operation(value)
}

// updateCounter(10, counter.increment());

// counter.increment(10);


function greetGuest(greeting,a,b) {
  console.log(`${greeting}, ${this.username}.`);
}

const mango = {
  username: "Манго",
};
const poly = {
  username: "Поли",
};

greetGuest.call(mango, "Добро пожаловать" );
 




// makeMessage(customer.getFullName.bind(customer));

const user = {
  tag: "mango",
  showTag() {
    console.log(this)
  }
}

const showThis = function () {
  console.log("This in showThis: ", this)
}

const foo = () => {
  console.log("This is foo: ", this)
}

const user2 = {
  tag:"Poly",
}

const objA = {
  x: 25,
  z: 33,
};

user2.showUserTag=user.showTag

user2.fnFoo = user.showTag

user2.showUserTag()
user2.fnFoo()

const anotherShowThis=showThis.bind(objA)

showThis.call(objA)

anotherShowThis()



const objects = [
  { name: "Mango", price: 50, quantity: 1, },
  { name: "Poly", price: 47, quantity: 1, },
  { name: "Apple", price: 44, quantity: 1, },
  { name: "Qiwi", price: 52, quantity: 1, },
  { name: "Banana", price: 51, quantity: 1, },

]

const pushTotalPrice = function (objects) {

  for (let obj of objects) {
    
    console.log(obj)
    obj.total = obj.price * obj.quantity;
    console.log(obj.total)
  }
}

const moreQuantity = function (name, quantitys, array) {
  for (let arr of array) {
    
    if (arr.name === name) {
      arr.quantity = quantitys;
      // arr.total=arr.price * quantitys
    } else {
      console.log("That product none")
     }

  }
}

moreQuantity("Poly", 6, objects);

pushTotalPrice(objects)

console.log(objects)




