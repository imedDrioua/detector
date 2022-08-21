
import "./dashboard.css";
import TopicCard from "../topicCard/topicCard";

import {Redirect, withRouter} from 'react-router-dom';
import {useSelector} from "react-redux";
import {Loading} from "../loader/Loading";

function  Dashboard () {
    const user = useSelector(state=> state.userReducer.user)
    const auth = useSelector(state=> state.userReducer.auth)
    if( ! user && !auth){
      return   <Redirect to={"/"}/>
    }
    if(auth && ! user){
        return <Loading />
    }else
      return(

            <div className={"dashboard"}>
                <h2 className={"dash-title "}>Qu'est ce qu'on a ?</h2>
                <div className="row g-2 justify-content-center elements">
               <TopicCard direction={"/colorDetector"}/>
               <TopicCard direction={1}/>
               <TopicCard direction={2}/>
            </div>
            </div>

        )

}

export default withRouter(Dashboard);