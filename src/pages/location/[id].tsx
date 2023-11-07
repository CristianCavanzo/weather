import { RootState } from '@/redux/store';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';

const Location = () => {
    const { query } = useRouter();
    const places = useSelector(
        (store: RootState) => store.favoritePlacesWeather
    );
    if (typeof query.id !== 'string') return <div>no hay id</div>;
    const [lat, lon] = query.id.split('&') as string[];
    console.log(lat, lon);
    
    return <div>Hola</div>;
};

export default Location;
