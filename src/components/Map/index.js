import React from 'react';
import { Map, TileLayer, LayersControl } from 'react-leaflet';
import { GoogleLayer } from 'react-leaflet-google';

const { BaseLayer } = LayersControl;
const key = 'AIzaSyCjfK-LuqlohGpxKCYZVXwg43GMQwZ9KFU'; // temp demo key
const terrain = 'TERRAIN';
const road = 'ROADMAP';
const position = [51.505, -0.09];
const zoom = 18;

function TransportationMap() {
  return (
    <Map center={position} zoom={zoom} style={{ height: "500px" }}>
      <LayersControl position="topright">
        <BaseLayer name="OpenStreetMap.Mapnik">
          <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        </BaseLayer>
        <BaseLayer checked name="Google Maps Roads">
          <GoogleLayer googlekey={key}  maptype={road} />
        </BaseLayer>
        <BaseLayer name="Google Maps Terrain">
          <GoogleLayer googlekey={key}  maptype={terrain} />
        </BaseLayer>
      </LayersControl>
    </Map>
  );
}

export default TransportationMap;