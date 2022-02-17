import React, { Component } from 'react';
import 'ol/ol.css';
import { mapTool } from '../../mapTool';
import popupAction from '../redux/actions/popupActions';
import { connect } from 'react-redux';


class Map extends Component {

    render() {
        
        return <div id="map">


        </div>
    }


    componentDidMount = () => {
        mapTool.createMap();
        addDefaultLayers();
        this.addDefaultInteractions();
    }

    pointInteractionDrawend = (event) => {  
       this.props.setcoordinats(mapTool.convertToWkt(event.feature,'EPSG:4326','EPSG:4326')) 
        this.props.eklemeMenu(true);

        
    }
    
   
    
   

    addDefaultInteractions = () => {

        const infoInteraction = mapTool.createDrawInteraction(
            "point_interaction",
            "draw_layer",
            "Point",
        );

        infoInteraction.on("drawend", this.pointInteractionDrawend);

        mapTool.addInteraction(infoInteraction);

        const circleInteraction = mapTool.createDrawInteraction(
            "circle_interaction",
            "draw_layer",
            "Circle",
            
            
        );

        circleInteraction.on("drawend", this.pointInteractionDrawend);

        mapTool.addInteraction(circleInteraction);

        const polygonInteraction = mapTool.createDrawInteraction(
            "polygon_interaction",
            "draw_layer",
            "Polygon",
        );

        polygonInteraction.on("drawend", this.pointInteractionDrawend);

        mapTool.addInteraction(polygonInteraction);

        const lineInteraction = mapTool.createDrawInteraction(
            "line_interaction",
            "draw_layer",
            "LineString",  
        );

        lineInteraction.on("drawend", this.pointInteractionDrawend);

        mapTool.addInteraction(lineInteraction);
    }
    
}

const addDefaultLayers = () => {

    const drawLayer = mapTool.createVectorLayer({
        name: "draw_layer",
        source: mapTool.createVectorLayerSource(),
    });

    mapTool.addLayer(drawLayer);
    

    const editLayer = mapTool.createVectorLayer({
        name: "edit_layer",
        source: mapTool.createVectorLayerSource(),
    });

    mapTool.addLayer(editLayer);

  
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

        eklemeMenu: (setData) => dispatch(popupAction.eklemeMenu(setData)),
        setcoordinats:(setData)=>dispatch(popupAction.coordinatEkle(setData))
    };
};

export default Map = connect(null, mapDispatchToProps)(Map);

