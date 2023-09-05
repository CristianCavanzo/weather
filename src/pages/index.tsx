import { asyncGeolocation } from '@/redux/slices/weatherSlice';
import store, { AppDispatch, RootState } from '@/redux/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch<AppDispatch>();
    const weather = useSelector((store: RootState) => store.weather);
    useEffect(() => {
        (async () => {
            await dispatch(asyncGeolocation());
            console.log(weather);
        })();
    }, []);
    return <div>Bienvenido</div>;
};

export default Home;
