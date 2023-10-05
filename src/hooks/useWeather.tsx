import { Weather } from '@/models/weather';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useWeatherAPI = (
    latitud: number,
    longitud: number,
    item: string
) => {
    const [weatherData, setWeatherData] = useState<Weather>({
        location: {
            name: '',
            region: '',
            country: '',
            lat: 0,
            lon: 0,
            tz_id: '',
            localtime_epoch: 0,
            localtime: '',
        },
        current: {
            last_updated_epoch: 0,
            last_updated: '',
            temp_c: 0,
            temp_f: 0,
            is_day: 0,
            condition: {
                text: '',
                icon: '',
                code: 0,
            },
            wind_mph: 0,
            wind_kph: 0,
            wind_degree: 0,
            wind_dir: '',
            pressure_mb: 0,
            pressure_in: 0,
            precip_mm: 0,
            precip_in: 0,
            humidity: 0,
            cloud: 0,
            feelslike_c: 0,
            feelslike_f: 0,
            vis_km: 0,
            vis_miles: 0,
            uv: 0,
            gust_mph: 0,
            gust_kph: 0,
        },
    });

    useEffect(() => {
        try {
            const storage = localStorage.getItem(item) as string;
            const weatherStorage = JSON.parse(storage);

            if (
                (!weatherStorage ||
                    weatherStorage.expirationDate < new Date()) &&
                latitud &&
                longitud
            ) {
                axios<Weather>({
                    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
                    params: {
                        q: `${latitud},${longitud}`,
                    },
                    headers: {
                        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_APIKEY,
                    },
                }).then(({ data }) => {
                    const expirationDate = new Date(
                        new Date().getTime() + 20 * 60 * 1000
                    );
                    const dataToSave = {
                        ...data,
                        expirationDate,
                    };

                    localStorage.setItem(item, JSON.stringify(dataToSave));
                    setWeatherData(data);
                });
            } else {
                setWeatherData(weatherStorage);
            }
        } catch (error) {
            console.log(error);
        }
    }, [latitud, longitud]);
    return weatherData;
};
