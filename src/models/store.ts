import { Geolocation } from './geolocation';
import { Weather } from './weather';

export interface AppStore {
    geolocation: Geolocation;
    weather: Weather;
}
