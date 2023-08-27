import { Geolocation } from '@/models/geolocation';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const asyncGeolocation = createAsyncThunk(
    'geolocation/asyncGeolocation',
    async (_, { dispatch }) => {
        try {
            const position = await new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(
                    ({ coords }) => {
                        const {
                            accuracy,
                            altitude,
                            altitudeAccuracy,
                            heading,
                            latitude,
                            longitude,
                            speed,
                        } = coords;
                        const newCoords = {
                            accuracy,
                            altitude,
                            altitudeAccuracy,
                            heading,
                            latitude,
                            longitude,
                            speed,
                        };
                        resolve(newCoords);
                    },
                    (error) => {
                        reject(error);
                    }
                );
            });

            dispatch(setGeolocation(position));
        } catch (error) {
        } finally {
        }
    }
);
const initialState: Geolocation = {
    accuracy: 0,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: 0,
    longitude: 0,
    speed: null,
};
const geolocatinoSlide = createSlice({
    name: 'geolocation',
    initialState,
    reducers: {
        setGeolocation: (state, action) => {
            state = action.payload;
            return action.payload;
        },
    },
});

export default geolocatinoSlide.reducer;
export const { setGeolocation } = geolocatinoSlide.actions;
