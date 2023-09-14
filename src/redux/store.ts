import { configureStore } from '@reduxjs/toolkit';

import { AppStore } from '@/models/store';
import weatherSlice from './slices/weatherSlice';

const store = configureStore<AppStore>({
    reducer: {
        weather: weatherSlice,
    },
    devTools: true,
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
