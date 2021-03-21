import React from 'react'
import  './colorViewer.css'
function ColorViewer({hexCode}){
    console.log(hexCode);
  return(
      <div className={'col col-1 circle '} style={{backgroundColor : `${hexCode}`} }>
          
      </div>
  )

}
export default ColorViewer;