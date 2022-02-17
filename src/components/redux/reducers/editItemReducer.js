import * as actionTypes from "../actions/actionTypes";

const initialState={

    visible:false
}

const editItemReducer=(state=initialState,action)=>{

switch (action.type) {
    case actionTypes.EDIT_ITEM:
        return {
            ...state,
            visible: action.payload
        };

       

    default:
       return state;
}
}



export default editItemReducer;