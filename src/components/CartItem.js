const CartItem = ({data, delFromCart}) =>{
    let {id_product,name_product,cost,stock,category,descripcion, quantity} = data;
  
  
    return  (
    


        <div style={{borderBottom: "thin solid gray"}}>
        <h4>{name_product}</h4>
        <h5> ${cost}.00 x {quantity} = ${cost * quantity}.00 </h5>
        <h5> {descripcion}</h5>
        <button> Eliminar</button>

        </div>


 

    );








}

export default CartItem