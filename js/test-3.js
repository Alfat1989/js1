
//12.3
function countProps(object) {
  let propCount = 0;
  let allKey=[];
  // Change code below this line
for (let key in object){
if (object.hasOwnProperty(key)){
	allKey.push(key);
  propCount=allKey.length
} 
}
  // Change code above this line
  return propCount;
}