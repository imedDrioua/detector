import logo from "../../images/logo.png";
import "./topicCard.css";

const TopicCard = ()=>{
    return(
        <div className="col ">
            <div className="card border border-success border-2 element h-100 ">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Detecteur de couleurs</h5>
                    <p className="card-text">Avec le lien d'une photo detecter toutes les couleurs dans cette photo
                    et générer une background avec ces couleurs</p>
                </div>
                <div className="card-footer">
                    <button className="btn btn-outline-info btn-lg ">Essayer</button>
                </div>
            </div>
        </div>
    )
}
export default TopicCard;