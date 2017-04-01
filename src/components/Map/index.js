import React from 'react';
import { Map, TileLayer, LayersControl, GeoJSON, Popup } from 'react-leaflet';
import { GoogleLayer } from 'react-leaflet-google';
import request from '../../utils/request';

const { BaseLayer } = LayersControl;
const key = 'AIzaSyCjfK-LuqlohGpxKCYZVXwg43GMQwZ9KFU'; // temp demo key
const terrain = 'TERRAIN';
const road = 'ROADMAP';
const position = [45.504094, -122.6046037];
const zoom = 11;

// static test data from lines in leaflet friendly format
// @todo: formatter
// const lineFeatures = {
//   type: 'FeatureCollection'
// }

const style = {
  color: 'red',
  weight: 5,
  opacity: 0
}

class TransportationMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      features: {
        type: 'FeatureCollection',
        features: []
      }
    };
  }

  componentDidMount() {
    let self = this;
    request("http://localhost:8000/api/lines/", {})
    .then(function(parsedData) {
      self.setState({
        features: parsedData
      });
    });
  }

  render() {
    return (
      <Map center={position} zoom={zoom} style={{ height: '500px' }}>
        <LayersControl position="topright">
          <BaseLayer name="OpenStreetMap.Mapnik">
            <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
          </BaseLayer>
          <BaseLayer checked name="Google Maps Roads">
            <GoogleLayer googlekey={key} maptype={road} />
          </BaseLayer>
          <BaseLayer name="Google Maps Terrain">
            <GoogleLayer googlekey={key} maptype={terrain} />
          </BaseLayer>
        </LayersControl>
        <GeoJSON data={this.state.features} style={style} onEachFeature={onEachFeature}/>
      </Map>
    );
  }
}

function onEachFeature(feature, layer) {
    if (feature.properties) {
      var fp = feature.properties;
      layer.bindPopup(fp.sourceRef + " " + fp.dateRange + " " + fp.data.Contact.Name);
    }
}

export default TransportationMap;
