import { Weather } from '@/models/weather';
import { getWeather } from '@/utils/getWeather';
import { initialWeather } from '@/utils/initialWeather';
import { useEffect, useState } from 'react';
interface StateWeather {
    weather: Weather;
    error: boolean;
    loading: boolean;
}
export const useWeatherAPI = (
    latitud: number,
    longitud: number,
    item: string
) => {
    const [weatherData, setWeatherData] = useState<StateWeather>({
        weather: initialWeather,
        error: false,
        loading: true,
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
                setWeatherData({
                    ...weatherData,
                    loading: true,
                });
                getWeather(latitud, longitud)
                    .then(({ data }) => {
                        const expirationDate = new Date(
                            new Date().getTime() + 20 * 60 * 1000
                        );
                        const dataToSave = {
                            ...data,
                            expirationDate,
                        };

                        localStorage.setItem(item, JSON.stringify(dataToSave));
                        setWeatherData({
                            ...weatherData,
                            weather: data,
                            loading: false,
                        });
                    })
                    .catch((e) => {
                        setWeatherData({
                            ...weatherData,
                            error: true,
                            loading: false,
                        });
                    });
            } else {
                setWeatherData({
                    ...weatherData,
                    weather: weatherStorage,
                    loading: false,
                });
            }
        } catch (error) {
            setWeatherData({
                ...weatherData,
                loading: false,
                error: true,
            });
        }
    }, [latitud, longitud]);
    return weatherData;
};
