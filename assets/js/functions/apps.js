/* Selectores 
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




const detectarBotones = (data) => {
    const botones = document.querySelectorAll('.card')
    console.log(botones)
}

*/

/* Selectores */
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const listaProductos = document.querySelector('#lista-productos');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];

const botonAgregar = document.getElementById('contenedorProductos');
botonAgregar.addEventListener("click", agregarProducto);

function detectar(){
    alert("Estoy vivo!!!");
}


function agregarProducto(e) {
    /* Evitamos la accion por defecto del boton */
	e.preventDefault();
	if (e.target.classList.contains("agregar-carrito")) {
		/* Selecciono el card del producto sobre el que se hizo click */
		const productoSeleccionado = e.target.parentElement.parentElement;
     console.log("Producto agregado exitosamente");
		//console.log(productoSeleccionado.querySelector('.precio span').textContent);
		//obtenerDatosProducto(productoSeleccionado);
	};
}

function eliminarProducto(e) {
	if (e.target.classList.contains('borrar-producto')) {
		const productoId = e.target.getAttribute('data-id');

		articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoId);

		insertarCarritoHTML();
		guardarStorage();
	}
}
