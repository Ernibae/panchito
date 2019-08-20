import React from 'react';
import ForecastItem from './ForecastItem';

import './styles.css';

export const api_key = "a8e2b02d8dc10b478aa35193859b7f4b";
export const url = "http://api.openweathermap.org/data/2.5/forecast";

const renderForecastItemDays = (forecastData) => {
    return forecastData.map(forecast => (
        <ForecastItem 
        key={`${forecast.weekDay}${forecast.hour}`}
        weekDay={forecast.weekDay} 
        hour={forecast.hour} 
        data={forecast.data}>
        </ForecastItem>));
}

const renderProgress = () => {
    return <h3>"Cargando..."</h3>;
}

const ForecastExtended = ({city, forecastData}) => (
        <div>
            <h2 className='Forecast-title'>Pronostico Extendido para {city}</h2>
            {forecastData ?
                renderForecastItemDays(forecastData) :
                renderProgress()}
                
        </div>
);

export default ForecastExtended;