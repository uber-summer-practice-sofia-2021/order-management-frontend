import React from "react";
import GoogleMapReact from 'google-map-react';
import {Marker} from 'react-google-maps';
/*
function Map() {
    return <GoogleMap defaultZoom={12.2} defaultCenter={{ lat: 42.698334, lng: 23.319941 }} onClick={(e) => handleClick(e)} />
}
const WrappedMap = withScriptjs(withGoogleMap(Map));
function handleClick(event) {
    console.log({ adressssss: 443 });
    geocodeByAddress('ul. "Hristo Belchev" 16, 1000 Sofia Center, Sofia, Bulgaria')
        .then(results => { console.log(results); getLatLng(results[0]) })
        .then(({ lat, lng }) =>
            console.log('Successfully got latitude and longitude', { lat, lng })
        );
}
export default function App1() {
    return <div style={{ width: "100v", height: "100vh" }}>
        <WrappedMap googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCjTOWTvU-3_qpW12GHY0V35EHcSzoPTIM'}
            loadingElement={<div style={{ height: "100%" }} />}
            containerElement={<div style={{ height: "100%" }} />}
            mapElement={<div style={{ height: "100%" }}
            />}
        />
    </div>
}*/
const GoogleMaps = ({ fromIsMarkerShown, toIsMarkerShown, fromLatitude, fromLongitude, toLatitude, toLongitude }) => {
    const fromRenderMarkers = (map, maps) => {
        let marker = new maps.Marker({
            position: { lat: fromLatitude, lng: fromLongitude },
            map,
            title: 'From'
        });
        return marker;
    };

    const toRenderMarkers = (map, maps) => {
        let marker = new maps.Marker({
            position: { lat: toLatitude, lng: toLongitude },
            map,
            title: 'To'
        });
        return marker;
    };

    return (
        <div style={{ height: '50vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyCjTOWTvU-3_qpW12GHY0V35EHcSzoPTIM" }}
                defaultCenter={{ lat: 42.698334, lng: 23.319941 }}
                defaultZoom={12}
                yesIWantToUseGoogleMapApiInternals
            // onDrag={({ map, maps }) => {
            //     fromRenderMarkers(map, maps);
            //     toRenderMarkers(map, maps)
            // }}
            >
                {toIsMarkerShown && <Marker position={{ lat: fromLatitude, lng: fromLongitude }} />}
                {fromIsMarkerShown && <Marker position={{ lat: toLatitude, lng: toLongitude }} />}
            </GoogleMapReact>
        </div>
    );
};

export default GoogleMaps;