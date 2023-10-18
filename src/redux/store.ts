import { configureStore } from '@reduxjs/toolkit';

import { AppStore } from '@/models/store';
import weatherSlice from './slices/weatherSlice';
import favoritePlacesWeatherSlice from './slices/favoritePlacesWeatherSlice';

const store = configureStore<AppStore>({
    reducer: {
        weather: weatherSlice,
        favoritePlacesWeather: favoritePlacesWeatherSlice
    },
    devTools: true,
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
