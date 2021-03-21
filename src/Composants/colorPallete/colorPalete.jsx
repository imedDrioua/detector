import React from 'react';
import ColorViewer from "../colorViewer/colorViewer";
import "./colorPallete.css"

function ColorPallete({colors}){
    return(
        <div className={'row justify-content-center pallete border border-info rounded-pill '} >
            <h4>Les couleurs detectés</h4>
            {
                colors.map(color =>{
                 return(
                     <ColorViewer hexCode={color.raw_hex} />
                    );
                })
            }
        </div>

    );
}
export default ColorPallete;