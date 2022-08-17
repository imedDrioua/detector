
import Particles from "react-particles-js";
import './App.css';
import React,{useEffect}  from 'react';
import {Switch , Route} from 'react-router-dom';
import Sign from "./Composants/Sign/Sign";
import Dashboard from "./Composants/Dashboard/dashboard";
import {useSelector,useDispatch} from "react-redux";
import ColorDetector from "./Composants/colorDetector/colorDetector";
import Navigation from "./Composants/navigation/nav";
import Profile from "./Composants/profile/profile";

function App() {
    const dispatch = useDispatch();
    const handleInsternetStateActive = ()=>{
        dispatch({
            type : "CONNECT_CHECK",
            payload : true
        })
        alert("Connexion internet rétablie")
    }

    const handleInsternetStateDesActive= ()=>{
        dispatch({
            type : "CONNECT_CHECK",
            payload : false
        })
        alert("Pas de connexion internet... ")
    }
    useEffect(()=>{
        window.addEventListener('online',handleInsternetStateActive)
        window.addEventListener('offline',handleInsternetStateDesActive)
        return function (){
            window.removeEventListener('online',handleInsternetStateActive)
            window.removeEventListener('offline',handleInsternetStateDesActive)
        }
    },[])
    const background = useSelector(state => state.appThemeReducer.background);

    return (
         <div  className={'app container-fluid'}>
                <Particles className={"particles"} style={{backgroundImage : `${background}`}} params ={params}/>
             <Navigation/>

             <Switch>
                <Route exact path={"/"}>
                    <Sign up={false}/>
                </Route>
                    <Route exact path={"/dashboard"}>
                        <Dashboard/>
                    </Route>
                <Route exact path={"/signup"}>
                    <Sign up={true}/>
                </Route>
                    <Route exact path={"/dashboard/colorDetector"}>
                        <ColorDetector/>
                    </Route>
                 <Route exact path={"/dashboard/profile"}>
                     <Profile user={null} />
                 </Route>
                </Switch>
            </div>
    );
}
const   params={
    "particles": {
        "number": {
            "value": 160,
            "density": {
                "enable": false
            }
        },
        "size": {
            "value": 10,
            "random": true
        },
        "move": {
            "direction": "bottom",
            "out_mode": "out"
        },
        "line_linked": {
            "enable": false
        }
    },
    "interactivity": {
        "events": {
            "onclick": {
                "enable": true,
                "mode": "remove"
            }
        },
        "modes": {
            "remove": {
                "particles_nb": 10
            }
        }
    }
}

export default App;
