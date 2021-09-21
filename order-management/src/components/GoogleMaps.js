import React, { Component } from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import { GoogleComponent } from 'react-google-location';
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
const ApiKey = "AIzaSyCjTOWTvU-3_qpW12GHY0V35EHcSzoPTIM";

class Map extends Component {

    constructor(props) {
        super(props);
        this.state = {
            place: null
        }
    }
    render() {
        return (
            <div><GoogleComponent apiKey={ApiKey} language={'en'}
                country={'country:in|country:us'}
                coordinates={true}
                locationBoxStyle={'custom-style'}
                locationListStyle={'custom-style-list'}
                onChange={(e) => {
                    this.setState({ place: e })
                    console.log(this.state.place)
                }}
            /> </div>
        )
    }
}
export default Map
/*
function Map() {
    return <GoogleMap defaultZoom={12.2} defaultCenter={{ lat: 42.698334, lng: 23.319941 }} onClick={(e) => handleClick(e)} />
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function handleClick(event) {
    console.log({adressssss:443});
    geocodeByAddress('ul. "Hristo Belchev" 16, 1000 Sofia Center, Sofia, Bulgaria')
        .then(results => {console.log(results);getLatLng(results[0])})
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