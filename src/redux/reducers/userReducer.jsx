
const initialeState={
    user : null
}

const userReducer=(state=initialeState,action)=>{
    switch(action.type) {
        case "ADD_USER" :{
            return {...state, user : action.payload}
        }
        default :
            return state;

    }
}
export default userReducer;