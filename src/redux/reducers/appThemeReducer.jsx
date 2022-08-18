

const initialState={ background : "linear-gradient(to right top, #051937, #051937, #051937, #051937, #051937)"}

const appThemeReducer = (state=initialState , action )=>{
    switch(action.type){
        case  "SET_BACKGROUND" :{
            return {...state , background: action.payload ?? initialState}
        }
        default : return state;
    }

}
export default appThemeReducer;