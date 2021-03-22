import React from 'react'
import Tilt from 'react-tilt'
import './sign.css'
import logo from '../../images/logo.png';

function Sign(){


    return(<div className={"d-flex justify-content-center"}>
        <form>

            <Tilt className="Tilt  mb-3 logo" options={{ max : 55 ,scale :1.5 ,speed:10 }} style={{ height: "150px", width: "250px" }} >
                <div className="Tilt-inner"> <img src={logo} alt={"error"}/> </div>
            </Tilt>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="d-grid ">
                <button style={{fontFamily : "Pacifico" ,fontSize : "1.5em" ,letterSpacing :"3px"}} className={"btn btn-success btn-lg mt-2 shadow-lg"}>Connecter</button>
            </div>
            <p className={"m-hint"}>Ou </p>
            <p className={"hint"}>Nouvelle Couleur ?</p>

            <button className={"btn btn-outline-dark btn-lg"}>Enregistrer</button>

        </form>
    </div>);
}
export default Sign;