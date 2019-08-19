import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCity } from './../actions';
import LocationList from './../components/LocationList';


class LocationListContainer extends Component {
    handSelectionLocation = city => {
        this.props.setCity(city);
      }
    render() {
        return (
            <LocationList 
              cities={this.props.cities} 
              onSelectedLocation={this.handSelectionLocation}></LocationList>
        );
    }
}
const mapDispatchToPops = dispatch => ({
    setCity: value => dispatch(setCity(value))
  });

  export default connect(null, mapDispatchToPops)(LocationListContainer);