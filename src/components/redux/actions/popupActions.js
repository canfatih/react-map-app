
import * as actionTypes from "./actionTypes"
 const completePopup = (popup) => ({

    
  type: actionTypes.COMPLETE_POPUP,
  payload:popup
});


 const eklemeMenu = (payload) => ({
    type: actionTypes.EKLEME_MENU,
    paylaod: payload
});

const tabloGetir=(payload)=>({

    type: actionTypes.TABLO_GETIR,
    paylaod: payload
});
const editItem=(payload)=>({
    type:actionTypes.EDIT_ITEM,
    payload:payload
    })


const addKayit=(kayititem)=>({
    type:actionTypes.ADD_KAYIT,
    payload:kayititem
});
const removeFromTable=(listitem)=>({
    type:actionTypes.REMOVE_FROM_TABLE,
    payload:listitem
})
const counter=(id)=>({
    type:actionTypes.COUNTER,
    payload:id
})
const coordinatEkle=(coordinats)=>({
    type:actionTypes.COORDINAT_EKLE,
    payload:coordinats
})
const editId=(id)=>({
    type:actionTypes.EDIT_ID,
    payload:id
})




export const popupAction = {
    completePopup,
    eklemeMenu,
    tabloGetir,
    addKayit,
    removeFromTable,
    counter,
    editItem,
    coordinatEkle,
    editId
}

export default popupAction;

