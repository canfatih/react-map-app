import React, { Component } from 'react';
import {Nav,Navbar,Container,NavDropdown} from 'react-bootstrap';
import { connect } from 'react-redux';
import { mapTool } from '../../mapTool';
import popupAction from '../redux/actions/popupActions';
import {FiCircle} from "react-icons/fi"
import {CgEditBlackPoint} from "react-icons/cg"
import {BiPolygon} from "react-icons/bi"
import {AiOutlineLine} from "react-icons/ai"



class Navi extends Component {

clearOp=()=>{
let myLayer=mapTool.findLayer("draw_layer")
myLayer.getSource().clear();


}

  render() {
    return <div  >
     
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container> 
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link  onClick={()=>this.props.tabloGetir(true)} >Kayıtlar</Nav.Link>
      <Nav.Link  onClick={()=>{
        this.clearOp();
        
        
      }} > Clear Map </Nav.Link>
      <NavDropdown title="Operasyonlar" id="collasible-nav-dropdown">
        <NavDropdown.Item outline onClick={() => this.toggleInteraction("circle_interaction")}  >
       <FiCircle></FiCircle> Circle
          </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item  outline onClick={() => this.toggleInteraction("point_interaction")}>
          <CgEditBlackPoint></CgEditBlackPoint>Point
          </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item outline onClick={() => this.toggleInteraction("polygon_interaction")} >
          <BiPolygon></BiPolygon>Polygon
          </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item outline onClick={() => this.toggleInteraction("line_interaction")} >
          <AiOutlineLine></AiOutlineLine>Line</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  </div>
  
  
  }
  toggleInteraction = (type) => {
    if (this.state?.activeInteraction) {
      mapTool.disableInteraction(this.state?.activeInteraction);
      this.setState({ activeInteraction: null });

      if (this.state?.activeInteraction === type) return;
    }

    mapTool.enableInteraction(type)
    this.setState({ activeInteraction: type });
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {

      tabloGetir: (setData) => dispatch(popupAction.tabloGetir(setData)),
      removeFromTable: (setData) => dispatch(popupAction.removeFromTable(setData)),
  };
};

export default Navi = connect(null, mapDispatchToProps)(Navi);

