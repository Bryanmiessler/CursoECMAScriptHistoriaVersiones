function* iterate(array)  {
  for (let value of array) {
      yield value;
  }
}

const it = iterate(["Oscar", "Alexa", "David", "Gerlis"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);


function* iterate(array, array2){
  for (let value of array){
      yield value;
  }
  for(let value2 of array2){
      yield value2;
  }
}

const it2 = iterate(['Angel','Juan','Víctor','Marcos'], ['Angela', 'Juana', 'Víctoria', 'María']);
console.log(it2.next().value);
console.log(it2.next().value);
console.log(it2.next().value);
console.log(it2.next().value);
console.log(it2.next().value);
console.log(it2.next().value);
console.log(it2.next().value);
console.log(it2.next().value);
console.log(it2.next().value);
console.log(it2.next().value);