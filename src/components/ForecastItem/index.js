import React from 'react';
import WeatherData from './../WeatherLocation/WeatherData';



const ForecastItem = ({weekDay, hour, data}) => (
    <div>
        <h2>{weekDay} - {hour} hs</h2>
        <WeatherData data={data}></WeatherData>
    </div>
);

export default ForecastItem;