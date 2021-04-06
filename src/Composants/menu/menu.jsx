
import "./menu.css"


const Menu = ({handleDashboard,handleDeconnect,handleProfile})=>{

    return(
        <ol className={"menu-list"}>
            <li onClick={handleProfile}>Profile</li>
            <li onClick={handleDashboard}>Dashboard</li>
            <li onClick={handleDeconnect}>Déconnecter</li>
        </ol>
    )
}

export default Menu;