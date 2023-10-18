import { HomeComponent } from '@/components/pages/Home';
import { useWeatherAPI } from '@/hooks/useWeather';
import { addWeatherTime } from '@/redux/slices/favoritePlacesWeatherSlice';
import { setWeather } from '@/redux/slices/weatherSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { getDate } from '@/utils/createDate';
import getGelocalization from '@/utils/getGeolocalization';
import { getWeather } from '@/utils/getWeather';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch<AppDispatch>();
    const weather = useSelector((store: RootState) => store.weather.condition);
    const places = useSelector(
        (store: RootState) => store.favoritePlacesWeather
    );
    const [geolocalization, setGeolocalization] = useState({
        longitude: 0,
        latitude: 0,
    });

    const weatherData = useWeatherAPI(
        geolocalization.latitude,
        geolocalization.longitude,
        'weather'
    );
    useEffect(() => {
        (async () => {
            const expiration = new Date(new Date().getTime() + 20 * 60 * 1000);
            const placesResponse = await Promise.all(
                places.map(async (place) => {
                    if (place.expiration && place.expiration > new Date())
                        return place;

                    const { data } = await getWeather(
                        place.location.lat,
                        place.location.lon
                    );
                    const newPlace = {
                        location: place.location,
                        weather: data,
                        expiration,
                    };
                    return newPlace;
                })
            );
            placesResponse.forEach((place) => {
                dispatch(addWeatherTime(place));
            });
        })();
    }, []);
    useEffect(() => {
        (async () => {
            const { latitude, longitude } = await getGelocalization();
            setGeolocalization({ latitude, longitude });
            dispatch(setWeather(weatherData.weather));
        })();
    }, [weatherData]);
    const condition = weather?.current?.condition;
    const date = getDate(new Date());
    if (weatherData.loading) return <h1>Loading...</h1>;
    if (weatherData.error) return <h1>error</h1>;

    return (
        <HomeComponent
            places={[]}
            condition={condition}
            date={date}
            weather={weather}
        />
    );
};

export default Home;
