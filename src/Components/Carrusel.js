import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import "./Carrusel.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function Carrusel() {
    return (
        <Carousel indicators={false} className="carrusel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/I/71vJHHgLr5L._SX3000_.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/I/61OEDfFiwZL._SX3000_.jpg"
          />
      
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/I/71wTCqBFCsL._SX3000_.jpg"
          />
      
        </Carousel.Item>
      </Carousel>
    )
}

export default Carrusel
