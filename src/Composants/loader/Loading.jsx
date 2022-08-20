import React from 'react';
import {useSelector} from "react-redux";
import Loader from './loader';
import "./loading.css"

export default function Loading({component}) {
     const user = useSelector(state=> state.userReducer.internet)
    return (
        user ? component  :
                <div className=" loading_view">
                    <div className="msg">{"Just one moment please..."}</div>
                    <Loader />
                </div>

    )
}