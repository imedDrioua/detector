
import {Component} from 'react';
import Clarifai from "clarifai";
import ColorPallete from "../colorPallete/colorPalete";
import Form from "../form/form";
import PhotoViewer from "../photoViewer/photoViewer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import "./colorDetector.css"

class ColorDetector extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colorsData: [],
            lien: "",
            background: initialBackground,
            showTitle: true
        }

    }
    componentDidMount() {
        const {user,history} = this.props;
        if(!user) history.push("/");
    }

    lienTappe = (even)=>{
        this.setState({lien : even.target.value});
        if(even.target.value==='')
        {
            this.setState({lien : "",
                    background : initialBackground,
                    colorsData : [],
                    showTitle : true
                }
            );
        }

    }
    detecter = ()=>{
        const {lien} = this.state;
        const {setBackground} = this.props;
        if(lien.includes("http")){
            this.setState({showTitle :false});
            app.models
                .predict(
                    Clarifai.COLOR_MODEL,
                    lien)
                .then(
                    response => {
                        response.outputs[0].data.colors.length &&  this.setState({colorsData : response.outputs[0].data.colors});
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
    render() {
        const {colorsData,showTitle,lien} =this.state;
        return(<div>

                <div className={'form row justify-content-center'}>
                    {colorsData.length !== 0  &&  <ColorPallete colors={colorsData}/>}
                    <Form onChanged={this.lienTappe} onClicked={this.detecter} showTitle={showTitle}/>
                    <PhotoViewer src ={lien}/>
                </div>
            </div>
        )
    }

}
const mapStateToProps = (state)=>{
    return{
        user: state.userReducer.user
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        setBackground :(background) => dispatch({type : "SET_BACKGROUND",payload : background})
    }
}
const app = new Clarifai.App({
    apiKey: 'b60f714daecf470f8a53dc14d1fd1986'
});
const initialBackground = "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)";
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ColorDetector));

