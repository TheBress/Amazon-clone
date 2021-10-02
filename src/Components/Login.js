import React, { useState } from 'react'
import { Link,useHistory } from 'react-router-dom'
import { auth } from "../firebase";
import "./Login.css"

function Login() {

    const history=useHistory(); //cambia la url para redireccionar
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const signIn=e=>{
        e.preventDefault(); //No refresca al mandar la info
        auth.signInWithEmailAndPassword(email,password)
        .then((auth=>{
            history.push("/")
        })).catch(error=>alert("Usuario no registrado"));
    }

    const register=e=>{
        e.preventDefault(); 

        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            //cuenta creada correctamente
            if(auth) history.push("/"); //si el usuario esta autentificado accede a la pagina principal
        }).catch(error=>alert("Correo o contraseña no permitido"))
    }

    return (
        <div className="login">
            <Link to="/">
            <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/368px-Amazon_logo.svg.png"/>
            </Link>
            <div className="login_container">
                <h1>Iniciar sesión</h1>
                
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>

                    <button type="submit" onClick={signIn} className="login_signInButton">Iniciar sesión</button>

                </form>
                <p>Al identificarte aceptas nuestras Condiciones de uso y venta. Consulta nuestro Aviso de privacidad y nuestras Aviso de Cookies y Aviso sobre publicidad basada en los intereses del usuario.</p>

                    <button onClick={register} className="login_registerButton">Crear tu cuenta de Amazon</button>
            </div>

        </div>
    )
}

export default Login
