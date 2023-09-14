import { Weather } from '@/models/weather';
import axios from 'axios';
import Cookies from 'js-cookie';

export class WatherAPI {
    constructor(private latitud: number, private longitud: number) {}
    async getWeather(): Promise<unknown> {
        try {
            const weatherStorage = Cookies.get('weather');

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
                var twentyMinutes = new Date(
                    new Date().getTime() + 20 * 60 * 1000
                );

                Cookies.set('weather', JSON.stringify(data), {
                    expires: twentyMinutes,
                });
                return data;
            }
            return JSON.parse(weatherStorage);
        } catch (error) {}
    }
}
