import { TYPES } from "../actions/shoppingActions"

export const shoppingInitialState = {

        products: [ //DE ACA PUEDO TRAER LOS PRODUCTOS CON UN API
        //LOS HAGO YO PARA PROBAR
        { id: 1, name: "Producto 1", price:100},
        { id: 2, name: "Producto 2", price:300},
        { id: 3, name: "Producto 3", price:10},
        { id: 4, name: "Producto 4", price:200},
        { id: 5, name: "Producto 5", price:109},
        { id: 6, name: "Producto 6", price:140},

        ],
        cart:[],

};


export function shoppingReducer(state,action){

        switch (action.type) {
                case TYPES.ADD_TO_CART :{

                }
                
                case TYPES.REMOVE_ONE_FROM_CART: {


                }


                case TYPES.REMOVE_ALL_FROM_CART: {


                }
                
                case TYPES.CLEAR_CART: {

                }

                 return state;
        }  
}