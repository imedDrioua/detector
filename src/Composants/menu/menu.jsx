
import "./menu.css"


const Menu = ({handleDashboard,handleDeconnect})=>{

    return(
        <ol className={"menu-list"}>
            <li>Profile</li>
            <li onClick={handleDashboard}>Dashboard</li>
            <li onClick={handleDeconnect}>Déconnecter</li>
        </ol>
    )
}

export default Menu;