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


const initState = {
    products: [
        {id:1,title:'Cinépolis Klic', description: "Folio válido solo para renta de cualquier película del catalogo. No aplica para rentar películas de estreno, preestreno, preventa ni para partidos de fútbol, béisbol o eventos en vivo.", price:110,img:Item1},
        {id:2,title:'Adidas', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: Item2},
        {id:3,title:'Vans', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: Item3},
        {id:4,title:'White', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:Item4},
        {id:5,title:'Cropped-sho', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img: Item5},
        {id:6,title:'Blues', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item6}
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{

}
export default cartReducer;