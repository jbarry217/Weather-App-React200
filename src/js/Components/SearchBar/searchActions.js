import Axios from 'axios';

export function updateSearch(city) {
    return {
        type: 'UPDATE_SEARCH', 
        payload: { city }
    };
}

export function getWeather(city) {
    return {
      type: 'GET_WEATHER',
      payload: Axios.get(`/search/${city}`)
    }
}