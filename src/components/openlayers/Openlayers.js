import React, { Component } from 'react';
import Navi from '../nav/Navi';
import 'ol/ol.css';
import Map from './Map';
import Kayitlar from '../popup/Kayitlar';
import Kayit from '../popup/Kayit';
import EditItems from '../popup/EditItems';



export default class Openlayers extends Component {
    render() {
        return <div>
                <Navi>
      
                </Navi>
            <Map >
            </Map>
            <Kayitlar>
                   
            </Kayitlar>
          <Kayit></Kayit> 
          <EditItems></EditItems>
          
        
        </div>;
    }



}
