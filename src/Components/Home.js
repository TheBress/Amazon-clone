import React from "react";
import Carrusel from "./Carrusel";
import "./Home.css";
import Product from "./Product";
import ProductInfo from "../Products.json";

function Home() {
  return (
    <div className="Home">
      <div className="home_container">
        <Carrusel />

        <div className="home_row">
          <Product
            id={20000}
            title="FIFA 22 Standard Plus Edition PS4 [Exclusivo de Amazon]"
            price="69.90"
            image="https://m.media-amazon.com/images/I/81fHTb5f-jS._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id={23131243}
            title="Braun Recortadora de Barba 6 en 1, Máquina Cortar Pelo, Cortapelos Nariz, Facial, MGK 3221, Verde Eléctrico"
            price="23.19"
            image="https://m.media-amazon.com/images/I/91HnJxkPEML._AC_SL1500_.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id={49382843}
            title="Viuda Negra [Blu-ray]"
            price="20.95"
            image="https://m.media-amazon.com/images/I/71lkEW3QTWL._SY445_.jpg"
            rating={4}
          />
          <Product
            id={3827432}
            title="Camiseta de Baloncesto para Hombre, NBA"
            price="34.88"
            image="https://m.media-amazon.com/images/I/61at9Ne46OS._AC_SL1500_.jpg"
            rating={3}
          />
          <Product
            id={94832943}
            title="Nintendo eShop Tarjeta de regalo 15€"
            price="15.00"
            image="https://m.media-amazon.com/images/I/61Ds2tygNiL._AC_SL1000_.jpg"
            rating={3}
          />
        </div>

        <div className="home_row">
          <Product
            id={632327}
            title="Samsung UE32T4305AKXXC Smart TV de 32 con Resolución HD"
            price="225.00"
            image="https://m.media-amazon.com/images/I/81OQLYp-seL._AC_SL1500_.jpg"
            rating={5}
          />

        </div>
      </div>
    </div>
  );
}

export default Home;
