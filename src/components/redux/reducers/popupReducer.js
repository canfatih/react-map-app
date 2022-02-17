
import * as actionTypes from "../actions/actionTypes";

const initialState ={

    popups: [],
    visible: false,
    list:[],
    id:1,
    newItem:[],
    coordinats:null,
editId:null
    
};


const popupReducer=(state=initialState,action) =>{

  switch (action.type) {
    case actionTypes.COMPLETE_POPUP:
      
     return {
       ...state
          };

      case actionTypes.EKLEME_MENU:
          return {
              ...state,
              visible: action.paylaod
          };
          
  
          case actionTypes.ADD_KAYIT:
            return{
              ...state,
              list:[...state.list,action.payload]
            }
            case actionTypes.REMOVE_FROM_TABLE:
              return {
                ...state,
                list:state.list.filter(list=>list.id!==action.payload)
              }
              case actionTypes.COUNTER:
                return{
                  ...state,
                  id:state.id+action.payload
                }
              case actionTypes.COORDINAT_EKLE:
                return{
                     ...state,
                    coordinats: action.payload
                   
                   }
                case actionTypes.EDIT_ID:
                  return {
                    ...state,
                   editId:action.payload
                  }
                
             
                 
        
    default:
     return state;
  }
}

export default popupReducer;