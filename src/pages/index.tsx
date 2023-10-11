import { HomeComponent } from '@/components/pages/Home';
import { useWeatherAPI } from '@/hooks/useWeather';
import { Weather } from '@/models/weather';
import { setWeather } from '@/redux/slices/weatherSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { getDate } from '@/utils/createDate';
import getGelocalization from '@/utils/getGeolocalization';
import { getWeather } from '@/utils/getWeather';
import popularPlaces from '@/utils/popularPlacesWeather';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const getStaticProps: GetStaticProps<{
    places: Weather[];
}> = async () => {
    try {
        const places = await Promise.all(
            popularPlaces.map(
                async (place) => (await getWeather(place.lat, place.lon)).data
            )
        );
        return { props: { places }, revalidate: 600 };
    } catch (error) {
        return { props: { places: [] } };
    }
};

const Home = ({ places }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const dispatch = useDispatch<AppDispatch>();
    const weather = useSelector((store: RootState) => store.weather.condition);
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
        <HomeComponent places={places} condition={condition} date={date} weather={weather} />
    );
};

export default Home;
