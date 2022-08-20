import {useState} from 'react';
import './nav.css'
import {useDispatch,useSelector} from "react-redux";
import {useHistory,useLocation}  from "react-router-dom"
import userAvatar from '../../images/user.png';
import Menu from "../menu/menu";
function Navigation (){
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const user = useSelector(state => state.userReducer.user)
    const deconnecter = ()=>{
        dispatch({
            type : "ADD_USER",
            payload :null
        });
        dispatch({
            type : "AUTH_USER",
            payload : false
        })
        dispatch({
            type :"SET_BACKGROUND",
            payload : null
        })
        if(clicked) hideUser();
        history.push("/");

    }
    const connecter = ()=>{
        history.push("/");
    }
    const dashboard = ()=>{
        hideUser();
        if(location.pathname!=="/dashboard") history.push("/dashboard");

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
    const profile = ()=>{
        hideUser();
      if(! location.pathname.includes("/profile"))  history.push("/profile");
    }
    return (
       <nav className={"nav navbar shadow-lg"}>
           {user && <div id={"user"} onClick={clickUser} className={"user-avatar "}>
               <img id={"image-user"} alt="error" src={userAvatar}/>
           </div>}
           {

               clicked &&(<div className={"menu"}>
                   <Menu handleDashboard={dashboard} handleDeconnect={deconnecter} handleProfile={profile}/>
               </div>)
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
