import React, { Component, } from "react";
import { Table, Button } from "react-bootstrap";
import { connect } from "react-redux";
import popupAction from "../redux/actions/popupActions";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import alertify from "alertifyjs";
import { IoMdNavigate } from "react-icons/io";
import { mapTool } from "../../mapTool";
import { Style, Text,Fill,Stroke } from "ol/style";

class Kayit extends Component {
   
  editItemOp = (item) => {
    this.props.editItem(true);
    this.props.editId(item.id);
    this.props.removeFromTable(item.id);
    this.props.tabloGetir(false);
  };
  removeFromTableOp = (item) => {
    this.props.removeFromTable(item.id);
    alertify.error(item.name + " kayit silindi.");
  };

  showFeature = (e) => {
    let coord = e.currentTarget.getAttribute("data-coord");
    let feature = mapTool.convertToFeature(coord , "EPSG:4326", "EPSG:4326");
    feature.setStyle(
      new Style({
        fill: new Fill({
          color: "rgba(255,255,255, 0.5)",
        
          width: 5
      }),
      stroke: new Stroke({
          color: "red",
          
          width: 3
      }),
        text: new Text({ text: e.currentTarget.getAttribute("data-name") }),
      })
    );
    feature.set("name",e.currentTarget.getAttribute("data-name"))
    feature.set("id",e.currentTarget.getAttribute("data-id"))
    mapTool.findLayer("draw_layer").getSource().addFeature(feature);
  };



  render() {
    const { visible } = this.props;

    return (
      <div
        className="kayit"
        style={{ display: `${visible ? "block" : "none"}` }}
      >
        <Table striped bordered hover>
          <thead>
            <Button
              id="bottons"
              size="sm"
              variant="danger"
              onClick={() => {
                this.props.tabloGetir(false);
              }}
            >
              X
            </Button>
            <tr>
              <th>İsim</th>
              <th>Aciklama</th>
              <th>Sil</th>
              <th>edit</th>
              <th>Features</th>
            </tr>
          </thead>
          <tbody>
            {this.props.list.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>
                    <Button
                      onClick={() => {
                        this.removeFromTableOp(item);
                      }}
                      size="sm"
                      variant="danger"
                    >
                      <BsFillTrashFill></BsFillTrashFill>
                    </Button>
                  </td>
                  <td>
                    <Button
                    
                      size="sm"
                      variant="warning"
                      onClick={() => {
                        this.editItemOp(item);
                      }}
                    >
                      <AiFillEdit></AiFillEdit>
                    </Button>
                  </td>
                  <td>
                    <Button
                      size="sm"
                      variant="info"
                      data-coord={item.coordinats}
                      data-name={item.name}
                      data-id={item.id}
                      onClick={this.showFeature}
                    >
                      <IoMdNavigate></IoMdNavigate>
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }

  
}
function mapDisPatchToProps(dispatch) {
  return {
    removeFromTable: (setData) =>
      dispatch(popupAction.removeFromTable(setData)),
    editItem: (setData) => dispatch(popupAction.editItem(setData)),
    tabloGetir: (setData) => dispatch(popupAction.tabloGetir(setData)),
    coordinatEkle: (setData) => dispatch(popupAction.coordinatEkle(setData)),
    editId:(setData)=>dispatch(popupAction.editId(setData)),
  };
}
const mapStateToProps = (state) => {
  const { list } = state.popupReducer;
  const { visible } = state.tabloReducer;
  const { id } = state.popupReducer;
  const { coordinats } = state.popupReducer;

  return { visible, list, id, coordinats };
};

export default Kayit = connect(mapStateToProps, mapDisPatchToProps)(Kayit);
