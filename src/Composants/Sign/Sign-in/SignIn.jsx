import React,{useState} from 'react'
import Tilt from 'react-tilt'
import '../sign.css'
import logo from '../../../images/logo.png';
import {Link} from 'react-router-dom'
function SignIn(){
    const [email,setEmail]=useState();
    const [mtp , setMtp]=useState();
    const onEmailtappe = (even)=>{
        setEmail(even.target.value);
    }
    const onMtptappe = (even)=>{
        setMtp(even.target.value);
    }
    const signin=()=>{
        fetch("http://localhost:3001/signin",{
            method: "POST",
            headers: {'content-type':"application/json"},
            body : JSON.stringify({
                email,
                mtp
            })
        })
    }
    return(<div className={"d-flex justify-content-center"}>
        <form className={"sign"} method={"post"} action={"http://localhost:3001/signin"}>
            <Tilt className="Tilt  mb-3 logo" options={{ max : 55 ,scale :1.5 ,speed:10 }} style={{ height: "150px", width: "250px" }} >
                <div className="Tilt-inner"> <img src={logo} alt={"error"}/> </div>
            </Tilt>
             <div className="form-floating mb-3">
            <input type="email" onChange={onEmailtappe} className="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label htmlFor="floatingInput">Adresse email</label>
        </div>
            <div className="form-floating">
                <input type="password" onChange={onMtptappe} name={"mtp"} className="form-control" id="floatingPassword" placeholder="Password"/>
                <label htmlFor="floatingPassword">Mot de passe</label>
            </div>
            <Link style={{textDecoration : "none"}} to={"/home"}  >
            <div className="d-grid ">
                    <button type={"submit"} className={"btn btn-success btn-lg mt-2 shadow-lg btnMain"}>Connecter</button>
                </div>
            </Link>
            <p className={"m-hint"}>Ou </p>
            <p className={"hint"}>Nouvelle Couleur ?</p>
            <Link style={{textDecoration : "none"}} to={"/signup"}  >
            <button className={"btn btn-outline-light btn-lg"}> Enregistrer</button>
            </Link>
        </form>
    </div>);
}
export default SignIn;