import { Weather } from '@/models/weather';
import axios from 'axios';

export const getWeather = async (
    latitud: number,
    longitud: number
): Promise<{ data: Weather }> =>
    await axios<Weather>({
        url: `${process.env.NEXT_PUBLIC_URL}/current.json`,
        params: {
            q: `${latitud},${longitud}`,
        },
        headers: {
            'X-RapidAPI-Key': process.env.NEXT_PUBLIC_APIKEY,
        },
    });
