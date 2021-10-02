import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { Link,useHistory } from "react-router-dom";
import ChekoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import axios from "axios";

function Payment() {
  var total=0;
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [ClientSecret, setClientSecret] = useState(true);


  useEffect(()=>{
      const getClientSecret=async ()=>{
        const response=await axios({
          method:"POST",
          url:`/payments/create?total=${precioTotal()}`
        });
        setClientSecret(response.data.ClientSecret);
      }

      getClientSecret();

  },[basket])

  console.log("Client secret:",ClientSecret);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload=await stripe.confirmCardPayment(ClientSecret,{
      payment_method:{
        card:elements.getElement(CardElement)
      }
    }).then(({paymentIntent})=>{
      //Si todo el pago se completa bien realiza todas estas ordenes
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        history.replaceState("/orders");
    })

  };

  const handleChange = e => {
    setDisabled(e.empty); //Si no hay evento inhabilita el boton
    setError(e.error ? e.error.message : ""); //Si hay algun error lo muestra
  };

  const precioTotal=()=>{
    for(var i=0;i<basket.length;i++) total=total+Number(basket[i].price);
    return total;
  }

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Pago (<Link to="/checkout">{basket.length} productos</Link>)
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Dirección de envío</h3>
          </div>

          <div className="payment_address">
            <p>{user ? user.email : ""}</p>
            <p>Calle Miguel de Unamuno 10</p>
            <p>Arroyomolinos,Madrid,España</p>
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Revisión de pedido</h3>
          </div>

          <div className="payment_items">
            {basket.map((item) => (
              <ChekoutProduct
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Método de pago</h3>
          </div>

          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                      <h3>Total: {value}</h3>
                  )}
                  decimalScale={2}
                  value={precioTotal()}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"€"}
                />
                <button disabled={processing|| disabled || succeeded}>
                  <span>{processing ? <p>Procesando</p>:"Comprar ya"}</span>
                </button>
              </div>

              {error && <div>{error}</div>} {/*Si existe un error aparece */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
