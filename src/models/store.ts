import { FavoriteWeatherSlice } from './favoritePlacesWeather';
import { WeatherSlice } from './weather';

export interface AppStore {
    weather: WeatherSlice;
    favoritePlacesWeather: FavoriteWeatherSlice[];
}
