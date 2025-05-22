//factorial.js

//obtenemos el numero desde la línea de comandos
const input = process.argv[2];

//validacion
if (input === undefined) {
  console.error("❌ Error: Debes proporcionar un numero como.");
  console.error("👉 Ejemplo de uso: node factorial.js 5");
  process.exit(1);
}

//convertirlo a numero
const number = Number(input);

//validacion de entrada
if (isNaN(number) || !Number.isInteger(number) || number < 0) {
  console.error("❌ Error: El numero debe ser un entero no negativo.");
  process.exit(1);
}

//funcion para calcular el factorial
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

//calculo y resultado
const result = factorial(number);
console.log(`✅ El factorial de ${number} es ${result}`);
