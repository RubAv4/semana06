//array con al menos 3 productos que cumplen la interfaz
var productos = [
    { nombre: "Laptop", precio: 3200, disponible: true },
    { nombre: "Mouse inalámbrico", precio: 120, disponible: false },
    { nombre: "Monitor 24 pulgadas", precio: 780, disponible: true }
];
//funcion que devuelve solo los nombres de productos disponibles
function obtenerDisponibles(lista) {
    return lista
        .filter(function (producto) { return producto.disponible; })
        .map(function (producto) { return producto.nombre; });
}
//mostrar en consola los nombres de productos disponibles
var disponibles = obtenerDisponibles(productos);
console.log("✅ Productos disponibles:", disponibles);
