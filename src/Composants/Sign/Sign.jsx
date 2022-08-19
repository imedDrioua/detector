import React,{useState} from 'react'
import './sign.css'
import {Link} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom"
import ColorsLogo from "../logos/colorsLogo";
import {signup_fr, sigin_fr, register} from "../../firebase/firebaseApp";

function Sign({up}){
    const [psudeo,setPsudeo] = useState('');
    const [email , setEmail ]=useState('');
    const [password , setMtp]=useState('');
    const [error ,setError] = useState(false);
    const [found , setFound] = useState(true);
    const history = useHistory();
    const dispatch = useDispatch();
    const onEmailtappe = (even)=>{
        setEmail(even.target.value);
    }
    const onMtptappe = (even)=>{
        setMtp(even.target.value);
    }
    const onPsudeotappe = (even)=>{
        setPsudeo(even.target.value);
    }
    const signup=   async (event) => {
        event.preventDefault();

        let user = await signup_fr(email, password,psudeo)
        dispatch({
            type: "ADD_USER",
            payload: user ?? null
        })
        user ? history.push("/dashboard") : setError(true);

    }
    const signin= async (event) => {
        event.preventDefault();
        let user = await  sigin_fr(email, password);
        if (user) {
            dispatch({
                type: "ADD_USER",
                payload: user ?? null
            })
            history.push("/dashboard");

        } else {
            user ? setError(true) : setFound(false)
        }


    }

    return(<div className={"d-flex justify-content-center"}>
        <form className={"sign"} onSubmit={up ? signup : signin} >
            <ColorsLogo/>
            {(error && up) && <p style={{color : "red"}}>Something went wrong mother fucker</p>}
            {(error && !up)&& <p style={{color : "red"}}> Worng password you fucking stupid </p> }
            {found || <p style={{color : "red"}} >No user with this credintials go fuck your self </p>}
            {up && <div className="form-floating mb-3">
                <input required onChange={onPsudeotappe} type="text" className="form-control" id="floatingInput"
                       placeholder={"Jack"}/>
                <label htmlFor="floatingInput">Nom et Prénom</label>
            </div>}
            <div className="form-floating mb-3">
                <input required onChange={onEmailtappe} type="email" className="form-control" id="floatingInput1" placeholder="name@example.com"/>
                <label htmlFor="floatingInput1">Adresse email</label>
            </div>
            <div className="form-floating">
                <input required onChange={onMtptappe} type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label htmlFor="floatingPassword">Mot de passe</label>
            </div>

            <div className="d-grid ">
                <button  type="submit" className={"btn btn-success btn-lg mt-2 shadow-lg btnMain"}>{up ? "Enregister" : "Connecter"}</button>
            </div>
            <p className={"m-hint"}>Ou </p>
            <p className={"hint"}>{up ? "Déja une couleur ?" : "Une nouvelle couleur ?"}</p>
            <Link style={{textDecoration : "none"}} to={up ? "/" : "/signup"}  >
                <button className={"btn btn-outline-light btn-lg"}>{up ? "Connecter" : "Enregistrer"}</button>
            </Link>
        </form>
    </div>);
}
export default Sign;