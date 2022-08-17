
import userAvatar  from "../../images/avatar.png"

import "./profile.css";
const Profile = ({user})=>{
    return(
        <div className={"container profile-container"}>
            <div className={"header"}>
            <h3>Mon Profile </h3>

            </div>
            <img src={userAvatar} alt="Avatar" className="avatar" />
        <div className={"container infos "}>
              <form className={" form_custom"}>
                  <label htmlFor={"nom"}> Nom :</label>

                  <text id={"nom"}>Drioua</text>
                  <br/>
                  <label htmlFor={"prenom"}>Prenom :</label>

                  <text id={"prenom"}>Imed</text>
                  <br/>
                  <label htmlFor={"mail"}>E-mail : </label>

                  <text id={"mail"}>ii_drioua@esi.dz</text>
                  <br/>
                  <label htmlFor={"tlf"}>Téléphone :</label>

                  <text id={"tlf"}>+213 541874128</text>
              </form>
        </div>
        </div>

    )
}


export default Profile;