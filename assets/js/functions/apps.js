/* Selectores */
const carrito = document.querySelector('#botonAgregar');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const listaProductos = document.querySelector('#lista-productos');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];

listaProductos.addEventListener('click', agregarProducto);
carrito.addEventListener('click', eliminarProducto);
vaciarCarritoBtn.addEventListener('click', vaciarCarrito);



/*document.addEventListener('DOMContentLoaded', () => {
	articulosCarrito = JSON.parse(localStorage.getItem('cargaDatos')) || [];

	insertarCarritoHTML();
})

*/


const detectarBotones = (data) => {
    const botones = document.querySelectorAll('(${producto.id})')
    console.log(botones)
}