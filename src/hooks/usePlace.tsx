import { FavoriteWeatherSlice } from '@/models/favoritePlacesWeather';
import { RootState } from '@/redux/store';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

interface Place {
    lat: string | number;
    lon: string | number;
}
type PlaceToFind = Place[] | Place;
type PlaceState = FavoriteWeatherSlice[] | FavoriteWeatherSlice;

const usePlace = (placeToFind: PlaceToFind): PlaceState => {
    const [placesState, setPlaceState] = useState<PlaceState>([]);
    const places = useSelector(
        (store: RootState) => store.favoritePlacesWeather
    );
    if (Array.isArray(placeToFind)) {
        const place = places.filter((place) =>
            placeToFind.find(
                (placeFind) =>
                    placeFind.lat === place.location.lat &&
                    placeFind.lon === place.location.lon
            )
        );
        setPlaceState(place);
    }
    if (typeof placeToFind === 'object' && 'lat' in placeToFind) {
        const place = places.find(
            (place) =>
                placeToFind.lat === place.location.lat &&
                placeToFind.lon === place.location.lon
        );
        place && setPlaceState(place);
    }
    return placesState;
};

export default usePlace;
