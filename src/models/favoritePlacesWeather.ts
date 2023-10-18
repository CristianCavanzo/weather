import { Weather } from './weather';

export interface FavoriteWeatherSlice {
    expiration: null | Date;
    location: {
        name: string;
        lat: number;
        lon: number;
    };
    weather: Weather;
}
