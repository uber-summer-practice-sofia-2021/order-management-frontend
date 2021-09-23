import React from 'react'
import {withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker} from "react-google-maps";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyCjTOWTvU-3_qpW12GHY0V35EHcSzoPTIM");

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toAddress: this.props.toAddressName,
            fromAddress: this.props.fromAddressName,
            mapPosition: {
                lat: this.props.center.lat,
                lng: this.props.center.lng
            },
            markerFromPosition: {
                lat: this.props.from.lat,
                lng: this.props.from.lng
            },
            markerToPosition: {
                lat: this.props.to.lat,
                lng: this.props.to.lng
            },
        }
    }

    componentDidMount() {
        Geocode.fromLatLng(this.state.markerFromPosition.lat, this.state.markerFromPosition.lng).then(
            response => {
                const fromAddress = response.results[0].formatted_address;
                this.setState({
                    fromAddress: fromAddress
                })
            },
            error => {
                console.error(error);
            }
        );
        Geocode.fromLatLng(this.state.markerToPosition.lat, this.state.markerToPosition.lng).then(
            response => {
                const toAddress = response.results[0].formatted_address;
                this.setState({
                    toAddress: toAddress
                })
            },
            error => {
                console.error(error);
            }
        );
    };

    shouldComponentUpdate(nextProps, nextState) {
        if (
            this.state.markerFromPosition.lat !== this.props.center.lat ||
            this.state.fromAddress !== nextState.fromAddress ||
            this.state.toAddress !== nextState.toAddress
        ) {
            return true
        } else if (this.props.center.lat === nextProps.center.lat) {
            return false
        }
    }


    render() {
        const AsyncMap = withScriptjs(
            withGoogleMap(
                props => (
                    <GoogleMap google={this.props.google}
                               defaultZoom={this.props.zoom}
                               defaultCenter={{lat: 42.698334, lng: 23.319941}}
                    >

                        <InfoWindow
                            position={{
                                lat: (this.state.markerFromPosition.lat + 0.0014),
                                lng: this.state.markerFromPosition.lng
                            }}
                        >
                            <div>
                                {this.state.fromAddress}
                            </div>
                        </InfoWindow>
                        <InfoWindow
                            position={{
                                lat: (this.state.markerToPosition.lat + 0.0014),
                                lng: this.state.markerToPosition.lng
                            }}
                        >
                            <div>
                                {this.state.toAddress}
                            </div>
                        </InfoWindow>
                        <Marker google={this.props.google}
                                draggable={false}
                                position={{
                                    lat: this.state.markerFromPosition.lat,
                                    lng: this.state.markerFromPosition.lng
                                }}
                        />
                        <Marker google={this.props.google}
                                draggable={false}
                                position={{lat: this.state.markerToPosition.lat, lng: this.state.markerToPosition.lng}}
                        />
                    </GoogleMap>
                )
            )
        );
        let map;
        if (this.props.center.lat !== undefined) {
            map = <div>
                <AsyncMap
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCjTOWTvU-3_qpW12GHY0V35EHcSzoPTIM&libraries=places"
                    loadingElement={
                        <div style={{height: `100%`}}/>
                    }
                    containerElement={
                        <div style={{height: this.props.height}}/>
                    }
                    mapElement={
                        <div style={{height: `100%`}}/>
                    }
                />
            </div>
        } else {
            map = <div style={{height: this.props.height}}/>
        }
        return (map)
    }
}

function LoadMap(props) {
    const showMap = props.showMap;

    if (showMap) {
        return <Map
            google={this}
            center={{lat:  42.698334, lng: 23.319941}}
            from={{lat: props.fromLat, lng: props.fromLng}}
            to={{lat: props.toLat, lng: props.toLng}}
            height='400px'
            zoom={15}
        />
    } else {
        return <div></div>;
    }
}

export {Map, LoadMap}