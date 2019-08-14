import React, {Component} from 'react';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import './styles.css';
/*
const data = {
    temperature: 10,
    humidity: 12,
    weatherState: 'normal',
    wind: 'normal',
}

const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo',

];*/
export const api_key = "a8e2b02d8dc10b478aa35193859b7f4b";
export const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {
    constructor() {
        super();
        this.state = {
            forecastData: null,
        }
    }

    componentDidMount() {
        this.updateCity(this.props.city);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.city !== this.props.city) {
            this.setState({forecastData: null})
            this.updateCity(nextProps.city);
        }
    }

    updateCity = city => {
        const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;

        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({forecastData});
            }      
        );
    }

    renderForecastItemDays(forecastData) {
        return forecastData.map(forecast => (
            <ForecastItem 
            key={`${forecast.weekDay}${forecast.hour}`}
            weekDay={forecast.weekDay} 
            hour={forecast.hour} 
            data={forecast.data}>
            </ForecastItem>));
    }

    renderProgress = () => {
        return <h3>"Cargando..."</h3>;
    }


    render() {
        const {city} = this.props;
        const {forecastData} = this.state;
        return (
            <div>
                <h2 className='Forecast-title'>
                    Pronostico Extendido para {city}
                </h2>
                {forecastData ?
                this.renderForecastItemDays(forecastData) :
                this.renderProgress()}
                
            </div>
        );
    }
}

export default ForecastExtended;