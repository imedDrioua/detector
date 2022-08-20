import React from 'react';

import Loader from './loader';
import "./loading.css"

export const  Loading = WComponent => {


    return (
                <div className=" loading_view">
                    <div className="msg">{"Just one moment please..."}</div>
                    <Loader />
                </div>)


}