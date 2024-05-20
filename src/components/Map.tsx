'use client';

import {
  GoogleMap,
  LoadScript,
  Marker,
  useJsApiLoader,
} from '@react-google-maps/api';
import React from 'react';

const libraries: ('places' | 'visualization' | 'drawing' | 'geometry')[] = [
  'places',
  'visualization',
];
function Map() {
  const containerStyle = {
    width: '100%',
    height: '300px',
  };
  const mapOptions = {
    zoom: 17,
    center: {
      lat: 11.5246018,
      lng: 104.9524343,
    },
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAvQvanOfyr5a0qtcDmWrvtE3uFWRqt_lw',
    libraries,
  });
  if (!isLoaded) return null;
  return (
    <div>
      {/* <LoadScript
        id='script-loader'
        googleMapsApiKey={'AIzaSyAvQvanOfyr5a0qtcDmWrvtE3uFWRqt_lw' || ''}
        libraries={libraries}
      > */}
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapOptions.center}
        zoom={mapOptions.zoom}
        onClick={() => {
          window.open(
            'https://maps.app.goo.gl/63c9WtJHULsmnZ289?g_st=ic',
            '_blank',
          );
        }}
      >
        <Marker position={mapOptions.center} />
      </GoogleMap>
      {/* </LoadScript> */}
    </div>
  );
}

export default Map;
