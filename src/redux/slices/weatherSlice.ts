import { WeatherSlice } from '@/models/weather';
import getGelocalization from '@/utils/getGeolocalization';
import { WatherAPI } from '@/utils/weatherAPI';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const asyncGeolocation = createAsyncThunk(
    'geolocation/asyncGeolocation',
    async (_, { dispatch }) => {
        try {
            const { latitude, longitude } = await getGelocalization();
            const weatherAPI = new WatherAPI(latitude, longitude);
            const weather = await weatherAPI.getWeather();
            dispatch(setWeather(weather));
        } catch (error) {
            console.log(error);
        } finally {
        }
    }
);

const initialState: WeatherSlice = {
    condition: {
        location: {
            name: '',
            region: '',
            country: '',
            lat: 0,
            lon: 0,
            tz_id: '',
            localtime_epoch: 0,
            localtime: '',
        },
        current: {
            last_updated_epoch: 0,
            last_updated: '',
            temp_c: 0,
            temp_f: 0,
            is_day: 0,
            condition: {
                text: '',
                icon: '',
                code: 0,
            },
            wind_mph: 0,
            wind_kph: 0,
            wind_degree: 0,
            wind_dir: '',
            pressure_mb: 0,
            pressure_in: 0,
            precip_mm: 0,
            precip_in: 0,
            humidity: 0,
            cloud: 0,
            feelslike_c: 0,
            feelslike_f: 0,
            vis_km: 0,
            vis_miles: 0,
            uv: 0,
            gust_mph: 0,
            gust_kph: 0,
        },
    },
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
