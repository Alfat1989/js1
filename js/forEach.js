const filter = (array, test) => {
    const filteredArray = [];
    for (let el of array) {
        const passed = test(el);
        if (passed) {
            filteredArray.push(el)
        }
    }
    return filteredArray;
}



const fruits=[
{ name: "Apple", price: 50 },
{ name: "Grape", price: 60 },
{ name: "Strawberry", price: 110 },
];


const callback = fruit => {
    return fruit.price >= 60;
}

console.log(filter(fruits, callback))


