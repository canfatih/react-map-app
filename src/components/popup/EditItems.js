import React, { Component } from 'react'
import {Form,FloatingLabel,Button} from "react-bootstrap"
import { connect } from 'react-redux';
import popupAction from '../redux/actions/popupActions';
import { mapTool } from "../../mapTool";
import {Style,Fill,Stroke,Text} from "ol/style"

 class EditItems extends Component {


  addNewItem=()=>{
    this.props.counter(+1);
    this.props.addlist({id:this.props.id,name:this.state.name,description:this.state.description});
    this.props.editItem(false);
    this.props.tabloGetir(true);
    
    let features=mapTool.findLayer("draw_layer").getSource().getFeatures()
    

   let feature=features.find(i=>i.get("id")==this.props.editId)
    feature.setStyle(
      new Style({
        fill: new Fill({
          color: "rgba(255,255,255, 0.5)",
          width: 5
      }),
      stroke: new Stroke({
          color: "#f00",
          width: 3
      }),
        text: new Text({ text: this.state.name}),
      })
    );
   
  }






  render() {

    const { visible } = this.props;

    return (
      <div className="editpopup" style={{ display: `${visible ? 'block' : 'none'}` }}>
                 <Form>
           <Button  id="bottons" size="sm"  variant="danger" onClick={()=>{
    this.props.editItem(false)
  }} >X</Button>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Yeni ismi giriniz.</Form.Label>
    <Form.Control  onChange={(e)=>{
      this.setState({name:e.target.value})
    }}  placeholder="isim giriniz" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label> Yeni Aciklama giriniz</Form.Label>
    <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
    <Form.Control onChange={(e)=>{
      this.setState({description:e.target.value})
    }} as="textarea" placeholder="Leave a comment here" />
  </FloatingLabel>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  </Form.Group>
  
  <Button  type="reset" value="Clear Form"  variant="primary"  onClick={()=>{
    this.addNewItem();
  }}>
    Ekle
  </Button>
 
</Form>
      </div>
    )
  }


  
   
  
  

}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      addlist: (setData) => dispatch(popupAction.addKayit(setData)),
        editItem: (setData) => dispatch(popupAction.editItem(setData)),
        counter:(setData)=>dispatch(popupAction.counter(setData)),
        tabloGetir: (setData) => dispatch(popupAction.tabloGetir(setData)),
      };
  };

  const mapStateToProps = (state) => {
    const { visible } = state.editItemReducer;
    const {id,editId}=state.popupReducer;
    const { coordinats } = state.popupReducer;
    return { visible , id,coordinats,editId};
}





  export default EditItems = connect(mapStateToProps,mapDispatchToProps)(EditItems)