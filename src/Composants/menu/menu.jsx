
import "./menu.css"


const Menu = ({handle})=>{

    return(
        <ol className={"menu-list"}>
            <li>Profile</li>
            <li onClick={handle}>Dashboard</li>
            <li>Déconnecter</li>
        </ol>
    )
}

export default Menu;