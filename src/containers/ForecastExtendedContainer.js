import React, { Component } from 'react';
import {connect} from 'react-redux';
import ForecastExtended from './../components/ForecastExtended';

class ForecastExtendedContainer extends Component {
    render() {
        return (
            this.props &&
            <ForecastExtended city={this.props.city}/>
        );
    }
}

const mapStateToProps = ({city}) => ({city})
export default connect(mapStateToProps, null)(ForecastExtendedContainer);