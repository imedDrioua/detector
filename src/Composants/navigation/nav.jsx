import React from 'react'
import './nav.css'
import {useDispatch,useSelector} from "react-redux";
import {useHistory}  from "react-router-dom"
import userAvatar from '../../images/user.png';

function Navigation (){
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.userReducer.user)
    const deconnecter = ()=>{
        dispatch({
            type : "ADD_USER",
            payload : null
        });
        dispatch({
            type :"SET_BACKGROUND",
            payload :"linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)"
        })
        history.push("/");
    }
    const connecter = ()=>{
        history.push("/");
    }
    return (
       <nav className={"nav navbar shadow-lg"}>
           {user && <div className={"user-avatar "}>
               <img src={userAvatar}/>
           </div>}
           <button
               onClick={user ?  deconnecter : connecter}
               className={"btn btn-outline-success btn-lg me-3 mt-2 shadow-lg button-nav"}>
               {user ?  "Déconnecter" : "Connecter"}
           </button>

       </nav>

);
}
export default  Navigation;