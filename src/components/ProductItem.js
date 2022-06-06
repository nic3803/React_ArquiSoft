const ProductItem = ({data, addToCart}) => {
    
    let{id_product,name_product,cost,stock,category,descripcion} = data;  //aca tengo que cargar los product
    return <div style={{border:"thin solid gray", padding:"1rem"}}> 
    
    <h4>  {name_product}  </h4> 
    <h5>   ${cost}.00      </h5>

    <button onClick={()=> addToCart(id_product)}>  Agregar  </button>
     </div>


    


};


export default ProductItem;