import React, { Component } from 'react';
import { Form,Button,FloatingLabel} from "react-bootstrap";
import { connect } from 'react-redux';
import popupAction from '../redux/actions/popupActions';
import alertify from "alertifyjs"




class Kayitlar extends Component {

 state={
   name:null,
   description:null,

 }

addkayitlar = () => {
   this.props.counter(+1)
   let coordinats=this.props.coordinats;
  this.props.addlist({id:this.props.id,name:this.state.name,description:this.state.description,coordinats:coordinats})
  alertify.success(this.state.name +" kayitlara eklendi.");
  this.props.eklemeMenu(false);
}


 
    render() {

        const { visible } = this.props;

        return <div className="test" style={{ display: `${visible ? 'block' : 'none'}` }}>
           <Form>
           <Button  id="bottons" size="sm"  variant="danger" onClick={()=>{
    this.props.eklemeMenu(false)
  }} >X</Button>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>İsim giriniz.</Form.Label>
    <Form.Control  onChange={(e)=>{
      this.setState({name:e.target.value})
    }}  placeholder="isim giriniz" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Aciklama giriniz</Form.Label>
    <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
    <Form.Control  onChange={(e)=>{
      this.setState({description:e.target.value})
    }} as="textarea" placeholder="Leave a comment here" />
  </FloatingLabel>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  </Form.Group>
  
  <Button  type="reset" value="Clear Form"  onClick={()=>
    this.addkayitlar()}  variant="primary">
    Ekle
  </Button>
 
</Form>
        </div>;
    }
}





const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      addlist: (setData) => dispatch(popupAction.addKayit(setData)),
      eklemeMenu: (setData) => dispatch(popupAction.eklemeMenu(setData)),
  counter:(setData)=>dispatch(popupAction.counter(setData)),
  coordinatEkle:(setData)=>dispatch(popupAction.coordinatEkle(setData)),
    };
};
const mapStateToProps = (state) => {
    const { visible } = state.popupReducer;
    const {id}=state.popupReducer
const {coordinats}=state.popupReducer
    return { visible ,id,coordinats};
}


export default Kayitlar = connect(mapStateToProps,mapDispatchToProps)(Kayitlar);

