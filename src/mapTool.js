import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';
import { Draw } from 'ol/interaction';
import Projection from 'ol/proj/Projection';
import VectorLayer from 'ol/layer/Vector';
import WKT from 'ol/format/WKT';

let map;

const getMap = () => map;

const createMap = () => {
    map = new Map({
        view: new View({
            center: [3725652.9586418574, 4762123.969609488],
            zoom: 6
        }),
        layers: [
            new TileLayer({
                source: new OSM()
            })
        ],
        target: 'map'
    });

    return map;
}

const createVectorLayerSource = () => {
    return new VectorSource ({
        format: undefined,
        loader: function () {
            return undefined;
        },
        projection: new Projection({ code: 'EPSG:3857', units: undefined, extent: undefined })
    });
};

const convertToWkt = (feature, wktProjection, featureProjection) => {
    
    return new WKT().writeGeometry(feature.getGeometry(), {
        dataProjection: wktProjection,
        featureProjection: featureProjection,
    });
};


const addLayer = (layer) => map.addLayer(layer);

const enableInteraction = (name) => {
    const interaction = getInteraction(name);

    interaction.setActive(true);
};

const disableInteraction = (name) => {
    const interaction = getInteraction(name);

    interaction.setActive(false);
};

const getInteraction = (name) => {
    let interaction = map
        .getInteractions()
        .getArray()
        .find((x) => x.get("name") === name);

    return interaction;
};

const getLayerSource = (name) => {

    if (!name) {
        return;
    }

    return findLayer(name).getSource();
}

const findLayer = (name) => {
    return map.getLayers().getArray().find((x) => x.get("name") === name);
}
   

const createDrawInteraction = (name, layer, type, style = null, geometryFunction = null) => {
    const source = getLayerSource(layer);

    let interaction;

    interaction = new Draw({
        type: type.toString(),
        source: source,
    });

    if (style) {
        interaction = new Draw({
            type: type.toString(),
            source: source,
            style: style
        });
    }
    if (geometryFunction && geometryFunction !== null) {
        interaction = new Draw({
            type: type.toString(),
            source: source,
            geometryFunction: geometryFunction()
        });
    }

    interaction.set("name", name);

    interaction.setActive(false);

    return interaction;
};

const convertToFeature = (wkt, wktProjection, featureProjection) => {
    
    return new WKT().readFeature(wkt, {
        dataProjection: wktProjection,
        featureProjection: featureProjection,
    });
};



const createVectorLayer = (options) => {
    return new VectorLayer({
        name: options.name,
        visible: true,
        opacity: 1,
        source: options.source
    });
};


// const feature=new Feature({
//     geometry: new Polygon()

// })


const addInteraction = (interaction) => map.addInteraction(interaction);

export const mapTool = {
    createMap,
    getMap,
    createVectorLayerSource,
    createVectorLayer,
    addLayer,
    enableInteraction,
    disableInteraction,
    createDrawInteraction,
    findLayer,
    addInteraction,
    convertToWkt,
    convertToFeature
}