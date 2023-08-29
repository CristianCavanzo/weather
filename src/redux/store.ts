import { configureStore } from '@reduxjs/toolkit';
import geolocationSlice from './slices/geolocationSlice';
import { AppStore } from '@/models/store';
import weatherSlice from './slices/weatherSlice';

const store = configureStore<AppStore>({
    reducer: {
        geolocation: geolocationSlice,
        weather: weatherSlice,
    },
});
export default store;
export type AppDispatch = typeof store.dispatch;
