import React, { Component } from 'react'
import Maps from 'google-map-react'
import GoogleApiWrapper from 'google-map-react'


 class MapContainer extends Component {
  render() {
    return (
      <>
        <div>MapContainer</div>
        <Maps google={this.props.google}
          style={{ width: "100%", height: "100%" }}
          zoom={10}
          initialCenter={ {
            lat : 28.704060,
            lng: 77.102493,
          }
          }
        />
      </>
    )
  }
}

export default GoogleApiWrapper({
  apikey: "AIzasyC3mZg6P7r2Aze0dm4XiQTmHora9Zs3fGQ"
}) (MapContainer)