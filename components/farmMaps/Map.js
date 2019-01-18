import {Component} from 'react';

import ReactMapGL, {Marker} from 'react-map-gl';
class Map extends Component {
    state = {
        viewport: {
            width:  '80%', //'100vw'
            height: 300, //'100vh'
            latitude: 10.709760,
            longitude: 122.575394,
            zoom: 10
        }
    };

    render() {
        return (
            <ReactMapGL
                mapStyle="mapbox://styles/mapbox/streets-v9"
                mapboxApiAccessToken="pk.eyJ1IjoibWlvY2hlbiIsImEiOiJjanF3OTI1MDMwdDV3M3htdWExY2RwcmM4In0.7T9fKMlH6QtDUjCsf6SBOA"
                onViewportChange={(viewport) => this.setState({viewport})}
                {...this.state.viewport}
            >
              {/*<Marker latitude={10.709760} longitude={122.575394}>
                <p>iloilo farm</p>
                <img src="/static/pin/location_pin.png" width="25" height="25"/>
                </Marker>*/}
            </ReactMapGL>
        );
    }
}

export default Map;