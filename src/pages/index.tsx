import { HomeComponent } from '@/components/pages/Home';
import { asyncGeolocation } from '@/redux/slices/weatherSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { getDate } from '@/utils/createDate';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch<AppDispatch>();
    const weather = useSelector((store: RootState) => store.weather.condition);
    useEffect(() => {
        (async () => {
            await dispatch(asyncGeolocation());
        })();
    }, []);
    const condition = weather.current.condition;
    const date = getDate(new Date());
    return (
        <HomeComponent condition={condition} date={date} weather={weather} />
    );
};

export default Home;
