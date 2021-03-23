import React from 'react'
import Tilt from 'react-tilt'
import '../sign.css'
import logo from '../../../images/logo.png';
import {Link} from 'react-router-dom'
function SignUP(){
    return(<div className={"d-flex justify-content-center"}>
        <form>
            <Tilt className="Tilt  mb-3 logo" options={{ max : 55 ,scale :1.5 ,speed:10 }} style={{ height: "150px", width: "250px" }} >
                <div className="Tilt-inner"> <img src={logo} alt={"error"}/> </div>
            </Tilt>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput"/>
                <label htmlFor="floatingInput">Psudeo</label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Adresse email</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label htmlFor="floatingPassword">Mot de passe</label>
            </div>
            <div className="d-grid ">
                <button className={"btn btn-success btn-lg mt-2 shadow-lg btnMain"}>Enregister</button>
            </div>
            <p className={"m-hint"}>Ou </p>
            <p className={"hint"}>Déja une couleur ?</p>
            <Link style={{textDecoration : "none"}} to={"/"}  >
                <button className={"btn btn-outline-light btn-lg"}>Connecter</button>
            </Link>
        </form>
    </div>);
}
export default SignUP;