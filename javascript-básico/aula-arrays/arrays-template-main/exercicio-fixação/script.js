let arrayNumbers =[1,8,45,90,345];
let copyArrayNumbers = arrayNumbers.slice();
copyArrayNumbers.splice(copyArrayNumbers.length-1,1);
copyArrayNumbers.push(6);
copyArrayNumbers.splice(2,1);
console.log("Original", arrayNumbers);
console.log("Copia", copyArrayNumbers);