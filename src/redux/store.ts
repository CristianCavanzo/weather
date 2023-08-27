import { configureStore } from '@reduxjs/toolkit';
import geolocationSlice from './slices/geolocationSlice';
import { AppStore } from '@/models/store';

const store = configureStore<AppStore>({
    reducer: {
        geolocation: geolocationSlice,
    },
});
export default store;
export type AppDispatch = typeof store.dispatch
