


import "./profile.css";
const Profile = ({user})=>{
    return(
        <div className={"container profile-container"}>
            <div className={"header"}>
                <h1> My  color identifier </h1>
                <label htmlFor={"name"}> Nom  </label> <input id={"name"} type={"text"} />
                <label>Prenom </label>
                <label>E-mail</label>
                <label></label>

            </div>


        </div>
    )
}


export default Profile;