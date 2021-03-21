import React from 'react';
import './form.css'
function Form({onChanged,onClicked,showTitle}){
    return(
        <div >
                 <div className={"row justify-content-center"} >
                     <div className={"col col-6"}>
                         {showTitle &&  <h2  className={"title "} >Introduire le lien pour commencer le magique </h2>}
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
