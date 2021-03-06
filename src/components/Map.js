import React from 'react';
import { withGoogleMap, GoogleMap, Marker, Circle } from 'react-google-maps';
const mapOptions = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#e9e9e9"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":60}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":60}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"color":"#e9e9e9"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":60}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];

const Map = ({ lat, lng, zoom, deliveryRadius }) => (
  <GoogleMap
    defaultZoom={zoom}
    defaultCenter={{lat, lng}}
    defaultOptions={{
      styles: mapOptions,
      draggable: false,
      zoomControl: false,
      scrollwheel: false,
      disableDoubleClickZoom: true,
      disableDefaultUI: true
    }}
  >
    <Marker
      position={{ lat, lng }}
      key={"CART-DRIVER"}
      defaultAnimation={2}
      icon="images/map-pointer.png"
    />
    {deliveryRadius && (
      <Circle
        center={{ lat, lng }}
        radius={1609.34 * deliveryRadius}
        options={{
          fillColor: '#AA0000',
          strokeColor: '#AA0000',
          strokeWeight: 1,
          fillOpacity: 0.1
        }}
        />
    )}
  </GoogleMap>
)

export default withGoogleMap(Map);

Map.defaultProps = {
  lat: 39.757643,
  lng: -104.986126,
};
