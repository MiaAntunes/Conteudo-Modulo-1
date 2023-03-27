let n1 = ["miau", "auau", "piupiu"];
let n2 = [2,8,10];
let n3 = ["good", 5, 7 === 7];
let n4 = [1]
let n5 = []

// console.log(n1.length); // 3;
// console.log(n1[3])// Se bos tentarmos checar o índice 3 ele não vai ter, então irá ter dar undefined
// console.log(typeof n3[0] === "string");
// console.log(n4[0])

// const array =[1,4,56,7,8,5,4,677,5,4,78,65,0];
// console.log(array[array.length-1])

const array =[1,4,56,7,8,5,4,677,5,4,78,65,0];
const copyArray = array;
copyArray.push(22);
console.log(`Array original`, array)
console.log(`Array copia`, copyArray);
console.log(copyArray);
//Ele atribui o 22 para as duas constante

const arrayString =["a","b","c"];
const copyArrayString = arrayString.splice();
copyArrayString.push("d");
console.log(arrayString)
console.log(copyArrayString)
//COM O SPLICE, ELE SÓ VAI ATRIBUI ESSE VALOR NO QUE ESTÁ PEDINDO;
// O splice faz com que o array ocupe outro espaço, para nao interferir na original;





