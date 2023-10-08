import { WeatherSlice } from '@/models/weather';
import { initialWeather } from '@/utils/initialWeather';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const asyncGeolocation = createAsyncThunk(
    'geolocation/asyncGeolocation',
    async (params, { dispatch }) => {
        try {
            dispatch(setWeather(params));
        } catch (error) {
            console.log(error);
        } finally {
        }
    }
);

const initialState: WeatherSlice = {
    condition: initialWeather,
    loading: false,
    error: false,
};
const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setWeather: (state, action) => {
            state.condition = action.payload;
        },
    },
});

export default weatherSlice.reducer;
export const { setWeather } = weatherSlice.actions;
