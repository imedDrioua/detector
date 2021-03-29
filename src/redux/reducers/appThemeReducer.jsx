

const initialState={ background : "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)"}

const appThemeReducer = (state=initialState , action )=>{
    switch(action.type){
        case  "SET_BACKGROUND" :{
            return {...state , background: action.payload}
        }
        default : return state;
    }

}
export default appThemeReducer;