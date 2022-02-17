import { combineReducers } from "redux";
import popupReducer from "./popupReducer"
import tabloReducer from "./tabloReducer";
import editItemReducer from "./editItemReducer"

const rootReducer =combineReducers({

    popupReducer,
    tabloReducer,
    editItemReducer
    
    
})

export default rootReducer;