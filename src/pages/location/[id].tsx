import usePlace from '@/hooks/usePlace';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Location = () => {
    const [place, setPlace] = usePlace([]);
    const { query } = useRouter();

    useEffect(() => {
        if (typeof query.id !== 'string') {
            console.log('no hay id');
            return;
        }
        const [latQuery, lonQuery] = query.id.split('&') as string[];
        const lat = latQuery.split('=')[1];
        const lon = lonQuery.split('=')[1];
        console.log(lat, lon);

        setPlace({ lat, lon });
    }, [query.id]);
    console.log(place);
    return <div>Hola</div>;
};

export default Location;
