import {Component} from 'react'
import Navigation from "../navigation/nav";
import "./dashboard.css";
import TopicCard from "../topicCard/topicCard";
class Dashboard extends Component {

    render() {
        return(
            <div>
            <Navigation/>
            <div className={"dashboard"}>
                <h2 className={"dash-title "}>Qu'est ce qu'on a ?</h2>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 elements">
               <TopicCard direction={"/colorDetector"}/>
               <TopicCard direction={1}/>
               <TopicCard direction={2}/>

            </div>
            </div>
            </div>
        )
    }
}

export default Dashboard;