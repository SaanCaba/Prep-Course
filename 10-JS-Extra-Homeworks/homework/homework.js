// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
    //return Object.entries(objeto)
  let array = [];
  for(const propiedades in objeto){
    array.push([propiedades, objeto[propiedades]])
  }
  return array
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  const obj = {};

  let transform = string.split('').sort() // ordenamos el string en un array, ordenado alfabeticamente
  for(let i = 0; i < transform.length; i++){
    if(obj[transform[i]]){ // al valor de a, por ej ya le sumamos 1.
      obj[transform[i]] += 1
    }else{
      obj[transform[i]] = 1 // si no existe el la propiedad, le sumamos 1. Para crearla
  }

}
  return obj
}



function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let array = s.split('');
  let mayus = '';
  let minus = '';
  for(let i = 0; i < array.length ; i++){
    if(array[i] === array[i].toUpperCase()){
      mayus += array[i]
    }else{
      minus += array[i]
    }
  }
  return mayus + minus
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let string = [];
  for(let i = 0 ; i < str.length; i++){
    string.unshift(str[i])
  }
  return string.join('').split(" ").reverse().join(" ") // convertimos el array a tring, lo ordenamos en un array, separado por palabras, con reverse lo damos vuelta, y otra vez con join lo volvemos a convertira String.
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí:
 let alReves = numero.toString().split('').reverse().join('')
 alReves = parseInt(alReves)
 if(numero === alReves) return 'Es capicua'
 return 'No es capicua'
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
return cadena.split('').filter(el => el !==  'a' && el !== 'b' && el !== 'c').join('')
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
let arrOrdenado = arr.sort((a,b)=> a.length - b.length)
return arrOrdenado
           // asi lo ordenamos de menos a mayor, cambiando de lugar estos dos de mayor a menor.
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let interseccion = [];
  for(let i = 0; i < arreglo1.length; i++){
    for(let j = 0; j < arreglo2.length; j++){
      if(arreglo1[i]===arreglo2[j]){
        interseccion.push(arreglo1[i])
      }
    }
  }
  return interseccion
  // return arreglo1.filter(elemento => arreglo2.includes(elemento)) FORMA MAS SIMPLE.
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};