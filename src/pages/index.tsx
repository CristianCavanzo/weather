import { HomeComponent } from '@/components/pages/Home';
import { useWeatherAPI } from '@/hooks/useWeather';
import { asyncGeolocation, setWeather } from '@/redux/slices/weatherSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { getDate } from '@/utils/createDate';
import getGelocalization from '@/utils/getGeolocalization';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch<AppDispatch>();
    const weather = useSelector((store: RootState) => store.weather.condition);
    const [geolocalization, setGeolocalization] = useState({
        longitude: 0,
        latitude: 0,
    });

    const weatherConditions = useWeatherAPI(
        geolocalization.latitude,
        geolocalization.longitude,
        'weather'
    );
    console.log(weatherConditions);

    useEffect(() => {
        (async () => {
            const { latitude, longitude } = await getGelocalization();
            setGeolocalization({ latitude, longitude });
            await dispatch(setWeather(weatherConditions));
            console.log(weatherConditions);
        })();
    }, []);
    const condition = weather.current.condition;
    const date = getDate(new Date());
    return (
        <HomeComponent condition={condition} date={date} weather={weather} />
    );
};

export default Home;
