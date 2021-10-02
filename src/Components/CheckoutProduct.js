import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider';
import $ from 'jquery';


function ChekoutProduct({id,image,title,price,rating}) {

    const [{basket},dispatch]=useStateValue();

    const removeFromBasket=()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        })

        $(".header_optionBasquet").addClass("delete");
        setTimeout(deleteP, 2000);
    }

    const deleteP=()=>{
        $(".header_optionBasquet").removeClass("delete");
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image}/>

            <div className="checkoutProduct_info">
            <p className="checkoutProduct_title"> {title} </p>
            <p className="checkoutProduct_price">
                <small>€</small>
                <strong>{price}</strong>
            </p>


            <div className="checkoutProduct_rating">
            {Array(rating).fill().map(()=>(<p>⭐</p>))}            
            </div>        

            <button onClick={removeFromBasket}>Eliminar de la cesta</button>
            </div>
        </div>
    )
}

export default ChekoutProduct
