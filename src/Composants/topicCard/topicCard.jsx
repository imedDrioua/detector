import logo from "../../images/logo.png";
import "./topicCard.css";
import {useHistory , useRouteMatch} from "react-router-dom";
const TopicCard = ({direction})=>{
    const match = useRouteMatch();
    const history= useHistory();
    const clickHandling=()=>{
     setTimeout(()=>{history.push(`${match.url}${direction}`)},200);
    }
    return(
        <div className="col col-md-2 col-lg-2">
            <div onClick={clickHandling} className="card  element ">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Detecteur de couleurs</h5>
                    <p className="card-text">Détection et génération des arrières plans avec les couleurs d'une photo</p>
                </div>
            </div>
        </div>
    )
}
export default TopicCard;
