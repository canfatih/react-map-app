import * as actionTypes from "../actions/actionTypes";

const initialState={

    visible:false
}

const tabloReducer=(state=initialState,action)=>{

switch (action.type) {
    case actionTypes.TABLO_GETIR:
        return {
            ...state,
            visible: action.paylaod
        };

       

    default:
       return state;
}
}



export default tabloReducer;