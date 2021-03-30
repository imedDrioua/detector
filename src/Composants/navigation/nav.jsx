import React from 'react'
import './nav.css'
import {useDispatch} from "react-redux";
import {useHistory}  from "react-router-dom"

function Navigation (){
    const dispatch = useDispatch();
    const history = useHistory();
    const deconnecter = ()=>{
        dispatch({
            type : "ADD_USER",
            payload : null
        });
        dispatch({
            type :"SET_BACKGROUND",
            payload :"linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)"
        })
        history.goBack()
    }
    return (
       <nav className={"nav navbar shadow-lg"}>

           <button onClick={deconnecter} className={"btn btn-outline-success btn-lg me-3 mt-2 shadow-lg button-nav"}>Déconnecter</button>

       </nav>

);
}
export default  Navigation;