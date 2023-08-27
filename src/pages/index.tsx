import { AppStore } from '@/models/store';
import {
    asyncGeolocation,
    setGeolocation,
} from '@/redux/slices/geolocationSlice';
import { AppDispatch } from '@/redux/store';
import { WatherAPI } from '@/utilities/weatherAPI';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    const geolocation = useSelector((state: AppStore) => state.geolocation);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(asyncGeolocation());
    }, []);
    const handleData = async () => {
        const weather = new WatherAPI(
            geolocation.latitude,
            geolocation.longitude
        );
        await weather.getWeather();
    };
    return (
        <div>
            <button onClick={handleData}>obtener información</button>
        </div>
    );
};

export default Home;
