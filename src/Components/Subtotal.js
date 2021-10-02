import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import {useHistory} from "react-router-dom";

function Subtotal() {
  var total=0;
  const history = useHistory();
  const [{basket},dispatch]=useStateValue();

  const precioTotal=()=>{
    for(var i=0;i<basket.length;i++) total=total+Number(basket[i].price);
    return total;
  }

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <p>
            Subtotal ({basket.length} objetos):<strong>{value}</strong>
          </p>
        )}
        decimalScale={2}
        value={precioTotal()}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"€"}
      />

      <small className="subtotal__gift">
        <input type="checkbox" /> Este pedido tiene un regalo
      </small>
      <button onClick={e=>history.push("/payment")}>Pagar</button>
    </div>
  );
}

export default Subtotal;
