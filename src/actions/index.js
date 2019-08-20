import transformForecast from './../services/transformForecast';
export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({type: SET_FORECAST_DATA, payload});

export const api_key = "a8e2b02d8dc10b478aa35193859b7f4b";
export const url = "http://api.openweathermap.org/data/2.5/forecast";

export const setSelectedCity = payload => {
    return dispatch => {
        const url_forecast = `${url}?q=${payload}&appid=${api_key}`;

        dispatch(setCity(payload));

        return fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                dispatch(setForecastData({city: payload, forecastData}));
            }      
        );
    };
};