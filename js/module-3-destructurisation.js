// const temps = [14, -4, 25, 8, 11];

// console.log(Math.max(...[14, -4, 25, 8, 11]))


function multiply(firstNumber, secondNumber, ...otherArgs) {
    console.log(firstNumber); 
  console.log(secondNumber); 
  console.log(otherArgs);
}

// multiply(1, 2);
// multiply(1, 2, 3);
multiply(1, 2, 3, 4);