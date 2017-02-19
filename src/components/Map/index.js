import React from 'react';
import { Map, TileLayer, LayersControl, GeoJSON } from 'react-leaflet';
import { GoogleLayer } from 'react-leaflet-google';

const { BaseLayer } = LayersControl;
const key = 'AIzaSyCjfK-LuqlohGpxKCYZVXwg43GMQwZ9KFU'; // temp demo key
const terrain = 'TERRAIN';
const road = 'ROADMAP';
const position = [45.504094, -122.6046037];
const zoom = 11;

// static test data from lines in leaflet friendly format
// @todo: formatter
const lineFeatures = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        dateRange: { lower: '2016-08-01', upper: '2017-10-01' },
        coordinates: [
          [-122.5747233253109, 45.55404608862442],
          [-122.5712370220837, 45.55546814153171],
          [-122.5682305216262, 45.55669265053297],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        dateRange: { lower: '2016-09-01', upper: '2017-01-01' },
        coordinates: [
          [-122.6450679284365, 45.46432339252824],
          [-122.6450629805159, 45.46768870933636],
          [-122.6455406686514, 45.47210324880245],
          [-122.6461913489544, 45.47751271044741],
          [-122.6463766094138, 45.47905268909113],
          [-122.6464042415919, 45.48003084806272],
          [-122.6464037412303, 45.4816733032515],
          [-122.6464082094505, 45.483920958148],
          [-122.6463944616334, 45.48526001251474],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        dateRange: {},
        coordinates: [
          [-122.6203761410378, 45.5483063111835],
          [-122.6197873627427, 45.54830549021177],
        ],
      },
    },

  ],
};

const style = {
  color: '#999',
  weight: 5,
  opacity: 0.85,
};

function TransportationMap() {
  return (
    <Map center={position} zoom={zoom} style={{ height: '500px' }}>
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
      <GeoJSON data={lineFeatures} style={style} />
    </Map>
  );
}

export default TransportationMap;
