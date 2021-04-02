import logo from "../../images/logo.png";
import Tilt from "react-tilt";
import React from "react";


const ColorsLogo =()=>{
    return(
        <Tilt className="Tilt  mb-3 logo" options={{ max : 55 ,scale :1.1 ,speed:10 }} style={{ height: "150px", width: "250px" }} >
            <div className="Tilt-inner"> <img style={{width : "100%" , height : "auto"}} src={logo} alt={"error"}/> </div>
        </Tilt>
    )
}
export default ColorsLogo;