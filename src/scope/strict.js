'use strict'; // es una funcionalidad que le permite al motor de JavaScript cambiar la manera en que ejecuta el código. En este modo, se reduce las cosas que podemos hacer, esto es bueno porque permite manejar errores que son poco perceptibles o que el motor de JavaScript sobreentiende y ayuda a su compilación para corregirlos.
PI = 3.1416;
console.log(PI);

function myFunction() {
  return PI = 3.1416;
}

console.log(myFunction());