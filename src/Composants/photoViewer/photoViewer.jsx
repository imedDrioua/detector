import React from 'react'
import  "./photoViewer.css";

function PhotoViewer({src}){

    return ( src !== '' && src.includes("http") ? <div className={"row justify-content-center mt-2 "} >
        <div className={'col col-6 align-self-start'}  >
            <img className={"border border-info "} src={src}  />
        </div>
    </div> : <span></span>);


}
export default PhotoViewer;