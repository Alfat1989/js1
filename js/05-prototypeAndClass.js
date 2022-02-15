console.log(Math.round(Math.random(50 - 40) * 40))


// class User {
//     constructor(email) {
//         this.email = email;
//     }

//     get emailOn() {
//     return this.email;
//   }
    
//     set emailNew(newEmail) {
//     this.email = newEmail;
//   }
// }
 
// class ContentEditor extends User {
//     constructor({ email, posts }) {
//         super(email);
//         this.posts = posts;
//     }
    
//     addPost(newPost) {
//         this.posts.push(newPost);
//     }
// }

// const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
// console.log(editor);
// console.log(editor.email)
// editor.addPost("post-1")
// editor.addPost("post-2")
// editor.addPost("post-3")
// editor.addPost("post-3")
// editor.addPost("post-3")
// editor.addPost("post-3")

// const uniquPosts = editor.posts.filter((elem, ind, arr) => arr.indexOf(elem) === ind);
// console.log(editor.posts.filter((elem, ind, arr) => arr.indexOf(elem) === ind))

// console.log(editor.posts)



//////////////////////////////////////////////////////////////////////////////////////

const audi = {
    brand:"Audi",
    model: "Q5",
    price:50000,
}

class Car{

    static Roles = {
        ADMIN: "admin",
        EDITOR: "editor",
    }

    #email;

    constructor({brand, model, price, role}={}) {
        this.brand = brand;
        this.model = model;
        this._price = price;
        this.role = role;
        this.#email = "car@mail.com";
    }

    // newPrice(newPrice) {
    //     this.price=newPrice
    // }

    get price() {
        return this._price;
    }

    set price(newPrice) {
        this._price = newPrice;
    }
}

const carAudi = new Car({
    brand:"Audi",
    model: "Q5",
    price: 50000,
    role: Car.Roles.ADMIN
})


console.log(carAudi)
console.log(carAudi.price)
// carAudi.newPrice(55000)
console.log(carAudi.price)
console.log(carAudi.role)

const carBmw = new Car({ model: "BMW" });
console.log(carBmw)
console.log(carAudi.price)
carAudi.price=53000
console.log(carAudi.price)