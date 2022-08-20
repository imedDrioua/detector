
const initialeState={
    user : null,
    internet : false,

}

const userReducer=(state=initialeState,action)=>{
    switch(action.type) {
        case "ADD_USER" :{
            return {...state, user : action.payload}
        }
        case "CONNECT_CHECK" : {
            return {...state, internet: action.payload}
        }
        default :
            return state;

    }
}
export default userReducer;