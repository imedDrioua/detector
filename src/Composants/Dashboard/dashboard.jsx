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


            <div className="row row-cols-1 row-cols-md-3 g-2 elements">
               <TopicCard/>
               <TopicCard/>
               <TopicCard/>

            </div>
            </div>
            </div>
        )
    }
}

export default Dashboard;