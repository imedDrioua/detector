
import "./userInfo.css";
import user from "../../images/user.png"
const UserInfo =()=>{
    return (
        <div >
        <img style={{width : "30%",height :"auto",position : "absolute",left :"-140px",top:"30px"}}src={user}/>
        <form className={"info-form"}>
            <label>Psudeo : Imed Drioua </label>
            <label>Adresse : ii_drioua@esi.dz </label>
            <label>Session : 0</label>
        </form>
        </div>
    )
}
export default UserInfo;