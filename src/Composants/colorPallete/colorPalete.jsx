import React from 'react';
import ColorViewer from "../colorViewer/colorViewer";
import "./colorPallete.css"

function ColorPallete({colors}){
    return(
        <div className={'row justify-content-center  pallete border border-info '} >
            <h4>Les couleurs detectés</h4>
            {
                colors.map((color,index) =>{
                 return(
                     <ColorViewer key={index} hexCode={color.raw_hex} />
                    );
                })
            }
        </div>

    );
}
export default ColorPallete;