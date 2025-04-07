// Ejercicio 1:
// Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase

// Ejercicio 2:
// Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números

function myAlgorithm_1(letter, phrase){
  let myResult = 0;
  for(let i=0; i<phrase.length; i++){
    if (letter === phrase[i]) myResult++;
  }
  return myResult;
}
function myAlgorithm_2(numero){
  for(let i=0; i<=50; i++){
    if ((numero + i) % 2 === 1){
      console.log(numero + i);
    }
  }
  // return `Números impares entre ${numero} y ${numero+50}.`
}

console.log(myAlgorithm_1('e', 'espada verde'));

myAlgorithm_2(71);
