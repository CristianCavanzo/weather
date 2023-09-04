import { asyncGeolocation } from '@/redux/slices/weatherSlice';
import { AppDispatch } from '@/redux/store';
import getGelocalization from '@/utils/getGeolocalization';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(asyncGeolocation());
    }, []);
    return <div>Bienvenido</div>;
};

export default Home;
