
//12.3
// function countProps(object) {
//   let propCount = 0;
//   let allKey=[];
//   // Change code below this line
// for (let key in object){
// if (object.hasOwnProperty(key)){
// 	allKey.push(key);
//   propCount=allKey.length
// }
// }
//   // Change code above this line
//   return propCount;
// }


//19.3
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];


// function getAllPropValues(propName) {
//   const arrayValues=[]
//   for (let prod of products) {
//     console.log(prod);
//     if (prod.hasOwnProperty(propName)) {
//       arrayValues.push(prod[propName]);
//     }
//   }
//   return arrayValues;
// }

// console.log(getAllPropValues("price"))




// 20.3
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let total = 0;
//   for (let prod of products) {
    
//     if (prod.name === productName) {
//       total = prod.price * prod.quantity;
      
//     }
    
//   }
//   return total;
// }

// console.log(calculateTotalPrice("Droid"))


// 33.3
// function findMatches(firstArray, ...othersNumber) {
//   const matches = []; // Don't change this line
//   for (const number of othersNumber) {
//       console.log(number)
//       if (firstArray.includes(number)) {
//           matches.push(number)
//       }
      
//   }

//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7))




// const bookShelf = {
  
//   books: ["The last kingdom", "The guardian of dreams"],
  
//   getBooks() {
//     return this.books;
//   },

   
// };

// console.log(bookShelf.getBooks())



// const objectFIrst = {
//   name: ["John"],
//   secondName: "Connor",
//   add(param) {
//     this.name.push(param);
//   },
//   newKey(key) {
//     this[key]
//   },
  
// }
  
// objectFIrst.city="Los Angeles"
  
// objectFIrst.newKey('state')

// objectFIrst.add("Sarra")



// console.log(objectFIrst)



const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    
      if (this.potions.includes(newPotion)) {
        return `Error! Potion ${newPotion} is already in your inventory!`;
      }
    

      this.potions.push(newPotion);
    
  },
  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },
  // Change code above this line
};

atTheOldToad.addPotion({name:"Speed potion"})

console.log(atTheOldToad.potions)


