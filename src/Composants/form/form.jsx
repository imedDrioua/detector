import React from 'react';
import './form.css'
import logo from "../../images/logo.png";
import Tilt from "react-tilt";
function Form({onChanged,onClicked,showTitle}){
    return(
        <div >
            <Tilt className="Tilt  mb-3 logo" options={{ max : 55 ,scale :1.5 ,speed:10 }} style={{ height: "150px", width: "250px" }} >
                <div className="Tilt-inner"> <img src={logo} alt={"error"}/> </div>
            </Tilt>
                 <div className={"row justify-content-center"} >
                     <div className={"col col-6"}>
                         {showTitle &&  <h2  className={"title "} >Tappez le lien pour commencer le magique </h2>}
                     </div>
                 </div>
                     <div className={"row justify-content-center"} >
                     <div className={"col col-5"}>
                         <input onChange={onChanged} className={"p-3 shadow-lg form-control shadow-lg mt-2"} type={"text"}/>
                     </div>
                 </div>
                 <div className={"row justify-content-center"} >
                     <div className={'col col-3'}>
                     <div className="d-grid ">
                                 <button onClick={onClicked} className="btn btn-primary shadow-lg mt-2" type="button">Detecter</button>
                             </div>
                 </div>
                 </div>
        </div>
    );
}
export default Form;
