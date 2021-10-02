import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider';
import $ from 'jquery';

function Product({id,title,image,price,rating}) {

    const [{basket},dispatch]=useStateValue();

    const addToBasket=()=>{
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            },
        })

        $(".header_optionBasquet").addClass("add");
        setTimeout(add, 2000);
    }

    const add=()=>{
        $(".header_optionBasquet").removeClass("add");
    }

    return (
        <div className="product">
            <div className="product_info">
               <p>{title}</p>
               <p className="product_price">
                   <strong>{price}</strong>
                   <small>€</small>
               </p>
               <div className="product_rating">
                {Array(rating).fill().map(()=>(<p>⭐</p>))}         

               </div>
            </div>
            <img src={image}/>
        
        <button onClick={addToBasket}>Añadir a la cesta</button>
        </div>
    )
}

export default Product
