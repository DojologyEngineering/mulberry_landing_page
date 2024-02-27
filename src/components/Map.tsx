'use client';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React from 'react';

function Map() {
  const containerStyle = {
    width: '100%',
    height: '300px',
  };
  const mapOptions = {
    zoom: 15,
    center: {
      lat: 11.5627958,
      lng: 104.9064597,
    },
  };
  const libraries: ('places' | 'visualization' | 'drawing' | 'geometry')[] = [
    'places',
    'visualization',
  ];
  return (
    <div>
      <LoadScript
        id='script-loader'
        googleMapsApiKey={'AIzaSyAvQvanOfyr5a0qtcDmWrvtE3uFWRqt_lw' || ''}
        libraries={libraries}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={mapOptions.center}
          zoom={mapOptions.zoom}
        >
          <Marker position={mapOptions.center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Map;
