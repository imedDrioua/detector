import {useState} from 'react';
import './nav.css'
import {useDispatch,useSelector} from "react-redux";
import {useHistory}  from "react-router-dom"
import userAvatar from '../../images/user.png';
import Menu from "../menu/menu";
import UserInfo from "../user-info/UserInfo";

function Navigation (){
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.userReducer.user)
    const deconnecter = ()=>{
        dispatch({
            type : "ADD_USER",
            payload : null
        });
        dispatch({
            type :"SET_BACKGROUND",
            payload :"linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)"
        })
        history.push("/");
    }
    const connecter = ()=>{
        history.push("/");
    }
    const [clicked, setClicked] = useState();
    const hideUser = ()=>{
        document.getElementById("user").classList.remove("user-avatar-clicked");
        document.getElementById("image-user").classList.remove("hide-user-image");
        setClicked(false);
    }
    const clickUser = ()=>{
        document.getElementById("user").classList.add("user-avatar-clicked");
        document.getElementById("image-user").classList.add("hide-user-image");
        setTimeout(()=>{        setClicked(true);
        },800);
    }
    return (
       <nav className={"nav navbar shadow-lg"}>
           {user && <div id={"user"} onClick={clickUser} className={"user-avatar "}>
               <img id={"image-user"} src={userAvatar}/>
           </div>}
           {
                clicked && (<div className={"user-info-form"}><UserInfo/></div>) }

           {    clicked &&(<div className={"menu"}> <Menu handle={hideUser}/></div>)

           }
           <button
               onClick={user ?  deconnecter : connecter}
               className={"btn btn-outline-success btn-lg me-3 mt-2 shadow-lg button-nav"}>
               {user ?  "Déconnecter" : "Connecter"}
           </button>

       </nav>

);
}


export default  Navigation;
