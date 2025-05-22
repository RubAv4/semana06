
Ejercicio 1: Factorial con Node.js
Meta

Crear un script Node.js (`factorial.js`) que calcule el factorial de un número pasado como argumento desde la línea de comandos. El script debe validar si se proporcionó un argumento y si este es un número entero no negativo.
Criterios de Éxito

    Lee el número desde `process.argv[2]`.
    Valida que el argumento exista y sea un número entero >= 0. Muestra mensajes de error claros si no lo es.
    Implementa una función para calcular el factorial.
    Muestra el resultado en la consola (ej: "El factorial de 5 es 120").

Indicación de Entrega: Sube tu archivo `factorial.js` a tu repositorio personal de GitHub o plataforma similar.


Ejercicio 2: Tipado de Objetos con TypeScript
Meta

Crear un archivo TypeScript (`producto.ts`) que defina una interfaz llamada `Producto` con propiedades `nombre` (string), `precio` (number) y `disponible` (boolean). Luego, crea un array de objetos que cumplan con esta interfaz e implementa una función que reciba el array y devuelva solo los nombres de los productos disponibles.
Criterios de Éxito

    Define correctamente la interfaz `Producto`.
    Crea un array con al menos 3 objetos `Producto`.
    La función `obtenerDisponibles` recibe `Producto[]` y devuelve `string[]`.
    El archivo `producto.ts` compila sin errores usando `tsc`.
    Ejecuta el `.js` resultante con `node` y muestra la lista de nombres de productos disponibles.

Indicación de Entrega: Sube los archivos `producto.ts` y el `producto.js` generado a tu repositorio.


Ejercicio 3: Configuración Básica de `tsconfig.json`
Meta

En un nuevo directorio de proyecto, inicializa un archivo `tsconfig.json`. Modifícalo para que los archivos JavaScript compilados se guarden en una carpeta separada llamada `dist` y que el código JavaScript resultante sea compatible con la versión ES2016 de ECMAScript.
Criterios de Éxito

    Genera un `tsconfig.json` usando `tsc --init`.
    Modifica la opción `outDir` a `"./dist"`.
    Modifica la opción `target` a `"ES2016"`.
    Crea un archivo TS simple (ej: `app.ts`) en la raíz del proyecto.
    Al ejecutar `tsc` en la terminal (sin especificar archivo), se crea la carpeta `dist` con el archivo `app.js` compilado dentro.

Indicación de Entrega: Sube el archivo `tsconfig.json` y tu archivo `app.ts` de prueba a tu repositorio.
