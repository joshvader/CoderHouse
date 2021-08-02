const cargarDatos = ()=>{
    let vistaProductos = "";
      let listaProductos = JSON.parse(localStorage.getItem(keyLocalStorage));

    listaProductos.map((producto)=>{
       
        vistaProductos += `
        <div class="col-md-3 offset-md-1 mb-2">
        <div class="card" styles="width: 18rem; id=${producto.id}">
            <div class="card-body">
            <img src="${producto.img}" class="card-img--top item" style="width:200px"alt="${producto.titulo}"></a>
                <h5 class="card-title item-title">${producto.nombre}</h4>
                <p class="card-text item-price">Precio: ${producto.precio}</p>
                <a  class="btn btn-primary addToCart" onclick="agregarAlCarrito(${producto.id}")>Agregar al Carrito</a>
            </div>
        </div>
    </div>`
      
        $("#contenedorProductos").html(vistaProductos);
    });
};
//Lo voy a dejar reservado acá mientras tanto
/*onclick="agregarAlCarrito(${producto.id}")*/