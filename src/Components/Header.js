import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import {auth} from "../firebase"

function Header() {
  const [{ basket,user }, dispatch] = useStateValue();

  const handleAuthentication=()=>{
    if(user){
      auth.signOut(); //cerrar sesion en firebase
    }
  }



  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication}  className="header_option">
            <span className="header_optionLineOne">Hola {user ? user.email: "invitado"} </span>
            <span className="header_optionLineTwo">{user ? 'Cerrar sesion' : 'Iniciar sesion'}</span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optionLineOne">Devoluciones</span>
          <span className="header_optionLineTwo">& Pedidos</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Tu</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionBasquet">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basquetCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
