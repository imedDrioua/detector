import React from 'react'
import './nav.css'
import {Link} from "react-router-dom";

function Navigation (){
    return (
       <nav className={"nav navbar shadow-lg"}>
        <Link to={'/'}>
           <button className={"btn btn-outline-success btn-lg me-3 mt-2 shadow-lg button-nav"}>Déconnecter</button>
        </Link>
       </nav>

);
}
export default Navigation;