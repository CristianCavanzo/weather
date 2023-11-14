import { FavoriteWeatherSlice } from '@/models/favoritePlacesWeather';
import { Weather } from '@/models/weather';
import { initialWeather } from '@/utils/initialWeather';
import popularPlaces from '@/utils/popularPlacesWeather';
import { createSlice } from '@reduxjs/toolkit';
const initialState: FavoriteWeatherSlice[] = popularPlaces.map((place) => ({
    expiration: null,
    location: { ...place },
    weather: initialWeather,
}));

interface AddWeatherTime {
    payload: FavoriteWeatherSlice;
}
interface AddWeathersTime {
    payload: FavoriteWeatherSlice[];
}

const favoritePlacesWeather = createSlice({
    name: 'favoriteWeather',
    initialState,
    reducers: {
        addWeatherTime: (state, action: AddWeatherTime) => {
            const location = action.payload.location;
            const weatherIndex = state.findIndex(
                (weather) =>
                    weather.location.lat === location.lat &&
                    weather.location.lon === location.lon
            );
            if (weatherIndex !== -1) {
                state[weatherIndex].weather = action.payload.weather;
            } else {
                const newWeather: FavoriteWeatherSlice = {
                    expiration: action.payload.expiration,
                    location: {
                        name: location.name,
                        lat: location.lat,
                        lon: location.lon,
                    },
                    weather: action.payload.weather,
                };
                state.push(newWeather);
            }
        },
        addWeathersTime: (state, action: AddWeathersTime) => {
            const newWeathers = action.payload;
            newWeathers.forEach((newWeather) => {
                const location = newWeather.location;
                const weatherIndex = state.findIndex(
                    (weather) =>
                        Number(weather.location.lat.toFixed(2)) ===
                            location.lat &&
                        Number(weather.location.lon.toFixed(2)) === location.lon
                );
                if (weatherIndex !== -1) {
                    state[weatherIndex].weather = newWeather.weather;
                    state[weatherIndex].expiration = newWeather.expiration;
                } else {
                    state.push(newWeather);
                }
            });
        },
        getAllWeather: (state) => {
            return state;
        },
    },
});

export default favoritePlacesWeather.reducer;
export const { addWeatherTime, getAllWeather, addWeathersTime } =
    favoritePlacesWeather.actions;
