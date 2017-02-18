import React from 'react';
// import { Map, TileLayer, LayersControl } from 'react-leaflet';
import { Map, LayersControl } from 'react-leaflet';
import { GoogleLayer } from 'react-leaflet-google';

const { BaseLayer } = LayersControl;
const key = 'AIzaSyCjfK-LuqlohGpxKCYZVXwg43GMQwZ9KFU'; // temp demo key
const terrain = 'TERRAIN';
const road = 'ROADMAP';

function TransportationMap() {
  return (
    <div>
        <Map>
            <BaseLayer checked name="Google Maps Roads">
                <GoogleLayer googlekey={key}  maptype={road} />
            </BaseLayer>
            <BaseLayer  name="Google Maps Terrain">
                <GoogleLayer googlekey={key}  maptype={terrain} />
            </BaseLayer>
        </Map>
    </div>
  );
}

export default TransportationMap;