import {Component} from 'react'
import "./dashboard.css";
import TopicCard from "../topicCard/topicCard";
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';
const mapStateToProps = (state)=>{
    return{
        user: state.userReducer.user
    }
}
class Dashboard extends Component {

    componentDidMount() {
        const {user,history} = this.props;
        if(!user) history.push("/");
    }


    render() {
        return(
            <div>
            <div className={"dashboard"}>
                <h2 className={"dash-title "}>Qu'est ce qu'on a ?</h2>
                <div className="row g-3 justify-content-center elements">
               <TopicCard direction={"/colorDetector"}/>
               <TopicCard direction={1}/>
               <TopicCard direction={2}/>
            </div>
            </div>
            </div>
        )
    }
}

export default connect(mapStateToProps,null)(withRouter(Dashboard));