
import Form from "./Composants/form/form";
import Particles from "react-particles-js";
import './App.css'
import PhotoViewer from "./Composants/photoViewer/photoViewer";
import React , {useState} from 'react';
import Clarifai  from 'clarifai';
import ColorPallete from "./Composants/colorPallete/colorPalete";
import {Switch , Route} from 'react-router-dom';
import SignIn from "./Composants/Sign/Sign-in/SignIn";
import SignUP from "./Composants/Sign/Sign-up/SignUP";

function App() {
    const [colorsData , setColorsData] = useState([]);
    const [lien , setLien ] = useState("");
    const [background , setBackground ] = useState(initialBackground);
    const [showTitle , setShowtitle] = useState(true);
    const lienTappe = (even)=>{
        setLien(even.target.value);
        if(even.target.value==='')
        {
            setShowtitle(true);
            setBackground(initialBackground);
            setColorsData([]);
        }

    }
    const detecter = ()=>{
        if(lien.includes("http")){
            setShowtitle(false);
            app.models
                .predict(
                    Clarifai.COLOR_MODEL,
                    lien)
                .then(
                    response => {
                        response.outputs[0].data.colors.length &&  setColorsData(response.outputs[0].data.colors);
                        const colors = response.outputs[0].data.colors;
                        let colorsString = `linear-gradient(to right top`;
                        for (let color of colors) {
                            colorsString = colorsString + `,${color.raw_hex}`
                        }
                        colorsString = colors.length > 1 ? colorsString + ")" : colorsString + ",#FFF)";
                        setBackground(colorsString);
                    }
                )
                .catch(err => console.log(err));
        }
    }
    return (

        <Switch>
            <div className={'app container'}>
                <Particles className={"particles"} style={{backgroundImage : `${background}`}} params ={params}/>
                <Route exact path={"/"}>
                    <SignIn/>
                </Route>
                <Route  path={"/home"}>
                    <div className={'row justify-content-center'}>
                        {colorsData.length !== 0  &&  <ColorPallete colors={colorsData}/>}
                        <Form onChanged={lienTappe} onClicked={detecter} showTitle={showTitle}/>
                        <PhotoViewer src ={lien}/>
                    </div>
                </Route>
                <Route exact path={"/signup"}>
                    <SignUP/>
                </Route>
            </div>
        </Switch>

    );
}

export default App;
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
const initialBackground = "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)";
const app = new Clarifai.App({
    apiKey: 'b60f714daecf470f8a53dc14d1fd1986'
});
