import { FavoriteWeatherSlice } from '@/models/favoritePlacesWeather';
import { RootState } from '@/redux/store';
import React, { Dispatch, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

interface Place {
    lat: string | number;
    lon: string | number;
}
type PlaceToFind = Place[] | Place;
type PlaceState = FavoriteWeatherSlice[] | FavoriteWeatherSlice;

const usePlace = (
    placeToFind: PlaceToFind
): [PlaceState, Dispatch<React.SetStateAction<PlaceToFind>>] => {
    const [initialPlace, setInitialPlace] = useState<PlaceToFind>(placeToFind);
    const [placesState, setPlaceState] = useState<PlaceState>([]);
    const places = useSelector(
        (store: RootState) => store.favoritePlacesWeather
    );
    useEffect(() => {
        if (Array.isArray(initialPlace)) {
            const place = places.filter((place) =>
                initialPlace.find(
                    (placeFind) =>
                        placeFind.lat === place.location.lat &&
                        placeFind.lon === place.location.lon
                )
            );
            setPlaceState(place);
        }
        if (typeof initialPlace === 'object' && 'lat' in initialPlace) {
            const place = places.find((place) => {
                console.log(
                    place.weather.location.lat,
                    Number(initialPlace.lat)
                );
                return (
                    Number(initialPlace.lat) === place.weather.location.lat &&
                    Number(initialPlace.lon) === place.weather.location.lon
                );
            });
            place && setPlaceState(place);
        }
    }, []);

    return [placesState, setInitialPlace];
};

export default usePlace;
