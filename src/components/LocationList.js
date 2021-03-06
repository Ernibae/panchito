import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './styles.css';


const LocationList = ({cities, onSelectedLocation}) => {
    const handWeatherLocationClick = city => {
        onSelectedLocation(city);
    };
    const strToComponents = cities => (
        cities.map( (city) => 
            (
                <WeatherLocation 
                    key={city} 
                    city={city} 
                    onWeatherLocationClick={() => handWeatherLocationClick(city)}/>))
    );
    return (<div className="locationList">
        {strToComponents(cities)}
    </div>);
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
};

export default LocationList;