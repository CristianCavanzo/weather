import { Weather } from '@/models/weather';
import axios from 'axios';

export class WatherAPI {
    constructor(private latitud: number, private longitud: number) {}
    async getWeather(): Promise<unknown> {
        try {
            const weatherStorage = localStorage.getItem('weather');
            if (!weatherStorage) {
                const { data } = await axios<Weather>({
                    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
                    params: {
                        q: `${this.latitud},${this.longitud}`,
                    },
                    headers: {
                        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_APIKEY,
                    },
                });
                localStorage.setItem('weather', JSON.stringify(data));
                return data;
            }
            return JSON.parse(weatherStorage);
        } catch (error) {}
    }
}
