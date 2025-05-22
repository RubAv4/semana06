//interfaz Producto
interface Producto {
  nombre: string;
  precio: number;
  disponible: boolean;
}

//array con al menos 3 productos que cumplen la interfaz
const productos: Producto[] = [
  { nombre: "Laptop", precio: 3200, disponible: true },
  { nombre: "Mouse inalámbrico", precio: 120, disponible: false },
  { nombre: "Monitor 24 pulgadas", precio: 780, disponible: true }
];

//funcion que devuelve solo los nombres de productos disponibles
function obtenerDisponibles(lista: Producto[]): string[] {
  return lista
    .filter(producto => producto.disponible)
    .map(producto => producto.nombre);
}

//mostrar en consola los nombres de productos disponibles
const disponibles = obtenerDisponibles(productos);
console.log("✅ Productos disponibles:", disponibles);
