class UsuarioCompra{
    constructor(pName){
        this.products = [];
        this.nombre = pName;
    }
    setProduct (pId, ProductoList){
        //Busqueda del producto
       let currentProduct =  ProductoList.findOne(p => producto.id === pId )
       this.products.push(currentProduct);
    }
}