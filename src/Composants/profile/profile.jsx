
import userAvatar  from "../../images/avatar.png"

import "./profile.css";
import {useDispatch, useSelector} from "react-redux";
import {Redirect, useHistory} from "react-router-dom";
import {check_mail, signout} from "../../firebase/firebaseApp";


const Profile = ()=>{

    const user_state = useSelector(state=> state.userReducer.user)
    const email_verified = user_state?.fb_info.emailVerified
    const history = useHistory();
    const dispatch  = useDispatch()
    if(!  user_state ) return <Redirect to={"/"}/>
    const handleMailCheck =async ()=>{
        await check_mail(user_state.fb_info.email).then(()=>{
            alert("email sent relogning is required...")
        })
        await signout(dispatch)
        history.push("/");

    }
    const handlPrint =()=>{
        console.log(user_state)
    }
    return(
        <div className={"container profile-container"}>
            <div className={"header"}>
            <h3>Mon Profile </h3>

            </div>
            <img onClick={handlPrint} src={userAvatar} alt="Avatar" className="avatar" />
            <br/>
            { email_verified || <button onClick={handleMailCheck}
                     className={"btn btn-outline-error btn-lg me-3 mt-2 shadow-lg button-nav"}>
                Confirmer votre adresse e-mail </button>}
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