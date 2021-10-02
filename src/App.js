import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Components/Checkout";
import React, { useEffect } from "react";
import Login from "./Components/Login";
import { auth } from "./firebase";
import { useStateValue } from "./Components/StateProvider";
import Payment from "./Components/Payment";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise=loadStripe("pk_test_51JdI9VIyyLk4ANrd0hsgsuau0fBTCfZL9Jxvk4SUparqmVWMEfh6Gfd2t79fqk7JvLuHBjr3rUzEvSYfrgUOEY1Y0016YBsYgK");


function App() {

  const [{},dispatch]=useStateValue();

    useEffect(()=>{
        //solo se ejecuta cuando el componente se carga
        auth.onAuthStateChanged((authUser) => {

          if (authUser) {

            dispatch({
              type: "SET_USER",
              user: authUser,
            });
          } else {
            dispatch({
              type: "SET_USER",
              user: null,
            });
          }
        });
      }, []);
    

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
          <Payment/>
          </Elements>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
