import { Weather } from '@/models/weather';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useWeatherAPI = (
    latitud: number,
    longitud: number,
    item: string
) => {
    console.log(latitud, longitud);
    const [weatherData, setWeatherData] = useState<Weather>({
        location: {
            name: 'Soacha',
            region: 'Cundinamarca',
            country: 'Colombia',
            lat: 4.61,
            lon: -74.19,
            tz_id: 'America/Bogota',
            localtime_epoch: 1696198011,
            localtime: '2023-10-01 17:06',
        },
        current: {
            last_updated_epoch: 1696197600,
            last_updated: '2023-10-01 17:00',
            temp_c: 19,
            temp_f: 66.2,
            is_day: 1,
            condition: {
                text: 'Partly cloudy',
                icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
                code: 1003,
            },
            wind_mph: 8.1,
            wind_kph: 13,
            wind_degree: 120,
            wind_dir: 'ESE',
            pressure_mb: 1024,
            pressure_in: 30.24,
            precip_mm: 1.23,
            precip_in: 0.05,
            humidity: 56,
            cloud: 75,
            feelslike_c: 19,
            feelslike_f: 66.2,
            vis_km: 10,
            vis_miles: 6,
            uv: 4,
            gust_mph: 1.5,
            gust_kph: 2.4,
        },
    });

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const storage = localStorage.getItem(item) as string;
                const weatherStorage = JSON.parse(storage);

                if (
                    (!weatherStorage ||
                        weatherStorage.expirationDate < new Date()) &&
                    latitud &&
                    longitud
                ) {
                    const { data } = await axios<Weather>({
                        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
                        params: {
                            q: `${latitud},${longitud}`,
                        },
                        headers: {
                            'X-RapidAPI-Key': process.env.NEXT_PUBLIC_APIKEY,
                        },
                    });

                    const expirationDate = new Date(
                        new Date().getTime() + 20 * 60 * 1000
                    );
                    const dataToSave = {
                        ...data,
                        expirationDate,
                    };

                    localStorage.setItem(item, JSON.stringify(dataToSave));
                    setWeatherData(data);
                } else {
                    setWeatherData(weatherStorage);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchWeather();
    }, [latitud, longitud]);

    return weatherData;
};
