
import userAvatar  from "../../images/avatar.png"

import "./profile.css";
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
const Profile = ()=>{

    const user_state = useSelector(state=> state.userReducer.user)
    if(!  user_state ) return <Redirect to={"/"}/> 
    return(
        <div className={"container profile-container"}>
            <div className={"header"}>
            <h3>Mon Profile </h3>

            </div>
            <img src={userAvatar} alt="Avatar" className="avatar" />
        <div className={"container infos "}>
              <form className={" form_custom"}>
                  <label htmlFor={"nom"}> Nom :</label>


                  <text id={"nom"}>{user_state.profile.fname}</text>
                  <br/>
                  <label htmlFor={"prenom"}>Prenom :</label>

                  <text id={"prenom"}>{user_state.profile.lname}</text>
                  <br/>
                  <label htmlFor={"mail"}>E-mail : </label>

                  <text id={"mail"}>{user_state.fb_info.email}</text>
                  <br/>
                  <label htmlFor={"tlf"}>Téléphone :</label>

                  <text id={"tlf"}>{user_state.profile.phone}</text>
              </form>
        </div>
        </div>

    )
}


export default Profile;