import { Weather } from './weather';

export interface FavoriteWeatherSlice {
    expiration: null | String;
    location: {
        name: string;
        lat: number;
        lon: number;
    };
    weather: Weather;
}
