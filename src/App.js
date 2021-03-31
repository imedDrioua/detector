
import Particles from "react-particles-js";
import './App.css';
import React  from 'react';
import {Switch , Route} from 'react-router-dom';
import Sign from "./Composants/Sign/Sign";
import Dashboard from "./Composants/Dashboard/dashboard";
import {useSelector} from "react-redux";

function App() {
    const background = useSelector(state => state.appThemeReducer.background);
    return (
         <div className={'app '}>
                <Particles className={"particles"} style={{backgroundImage : `${background}`}} params ={params}/>
                <Switch>
                <Route exact path={"/bb"}>
                    <Sign up={false}/>
                </Route>
                    <Route exact path={"/"}>
                        <Dashboard/>
                    </Route>
                <Route exact path={"/signup"}>
                    <Sign up={true}/>
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
