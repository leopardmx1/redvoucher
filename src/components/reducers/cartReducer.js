import {ADD_TO_CART, REMOVE_TO_CART} from '../actions/cartActions'

import Item1 from '../../assets/images/products/Imagen_1.jpg'
import Item2 from '../../assets/images/products/Imagen_2.jpg'
import Item3 from '../../assets/images/products/Imagen_3.jpg'
import Item4 from '../../assets/images/products/Imagen_4.jpg'
import Item5 from '../../assets/images/products/Imagen_5.jpg'
import Item6 from '../../assets/images/products/Imagen_6.jpg'
import Item7 from '../../assets/images/products/Imagen_7.jpg'
import Item8 from '../../assets/images/products/Imagen_8.jpg'
import Item9 from '../../assets/images/products/Imagen_9.jpg'
import Item10 from '../../assets/images/products/Imagen_10.jpg'
import Item11 from '../../assets/images/products/Imagen_11.jpg'
import Item12 from '../../assets/images/products/Imagen_12.jpg'
import Item13 from '../../assets/images/products/imagen_13.png'




const initState = {
    products: [
        {id:1,title:'Cinépolis Klic', description: "Folio válido solo para renta de cualquier película del catalogo. No aplica para rentar películas de estreno, preestreno, preventa ni para partidos de fútbol, béisbol o eventos en vivo.", price:39,img:Item1},
        {id:2,title:'Combos medianos', description: "4 combos medianos válidos de lunes a domingo; cada combo contiene unas palomitas medianas y un refresco mediano.", price:237,img: Item2},
        {id:3,title:'Boleto tradicional 2D', description: "6 boletos tradicionales válidos de lunes a domingo.",price:270,img: Item3},
        {id:4,title:'Boletos 2D y combos medianos', description: "4 boletos válidos de lunes a viernes + 2 combos medianos de palomitas y refrescos", price:262,img:Item4},
        {id:5,title:'Boletos Tradicionales y combos med.', description: "4 boletos válidos de lunes a domingo + 2 combos medianos de palomitas y refrescos", price:294,img: Item5},
        {id:6,title:'Boletos Tradicionales y combo nachos', description: "4 boletos válidos de lunes a domingo + 2 combos nachos normales y refrescos medianos.",price:294,img: Item6},
        {id:7,title:'Boletos Tradicionales y combo hot dog', description: "4 boletos válidos de lunes a domingo + 2 combos hot dog normal y refrescos medianos", price:294,img:Item7},
        {id:8,title:'Boletos IMAX y Combos Medianos', description: "4 boletos 3D o IMAX válidos de lunes a domingo + 2 combos medianos de palomitas y refrescos.", price:382,img: Item8},
        {id:9,title:'Boletos 4DX', description: "4 boletos 4DX válidos de lunes a domingo.",price:474,img: Item9},
        {id:10,title:'Boletos VIP 2D', description: "4 boletos VIP 2D válidos de lunes a domingo.", price:407,img:Item10},
        {id:11,title:'Boleto Tradicional 2D', description: "4 boletos tradicionales válidos de lunes a domingo.", price:182,img: Item11},
        {id:12,title:'Combos Grandes', description: "2 combos grandes válidos de lunes a domingo; cada combo contiene unas palomitas grandes de mantequilla y un refresco grande.",price:152,img: Item12}
    ],
    latestBuy: [
        {id:13,title:'6 boletos tradicionales de lunes a domingo', description: "Folio válido solo para renta de cualquier película del catalogo. No aplica para rentar películas de estreno, preestreno, preventa ni para partidos de fútbol, béisbol o eventos en vivo.", price:39,img:Item13},
        {id:14,title:'Combos medianos', description: "4 combos medianos válidos de lunes a domingo; cada combo contiene unas palomitas medianas y un refresco mediano.", price:237,img: Item13},
    ],
    cart:[]
}
const cartReducer = (state = initState, action)=>{
    switch (action.type) {
        case ADD_TO_CART:
            let addedProduct = state.products.find(item=> item.id === action.id)
                //check if the action id exists in the addedItems
            let existed_item= state.cart.find(item=> action.id === item.id)
            if(existed_item)
            {
                addedProduct.quantity += 1
                addedProduct.subtotal = addedProduct.quantity * addedProduct.price 
                return{
                    ...state 
                }
            }
            else{
                addedProduct.quantity = 1;
                //calculating the total
                addedProduct.subtotal = addedProduct.quantity * addedProduct.price 
                
                return{
                    ...state,
                    cart: [...state.cart, addedProduct]
                }
                
            }
        case REMOVE_TO_CART:
            let itemToRemove= state.cart.find(item=> action.id === item.id)
            let new_items = state.cart.filter(item=> action.id !== item.id)

            //calculating the total
            return{
                ...state,
                cart: new_items
            }
        default:
            return state
    }
}
export default cartReducer;