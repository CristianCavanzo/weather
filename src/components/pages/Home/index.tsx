import React from 'react';
import { Map } from '@/components/SVG';
import { WeatherSlice } from '@/models/weather';
import { HomeStyled } from './styled-component';
interface Props {
    weather: WeatherSlice['condition'];
    condition: WeatherSlice['condition']['current']['condition'];
    date: string;
}
const HomeComponent = ({ weather, date, condition }: Props) => {
    return (
        <HomeStyled>
            <div className="home__header">
                <div className="home__header-location">
                    <Map width={24} height={24} />
                    <p>{weather.location.name}</p>
                </div>
                <div>
                    <p>{condition.text}</p>
                </div>
            </div>
            <div className="home__date">
                <p>{date}</p>
            </div>
            <div className="home__weather">
                <p className="home__weather-temp">{weather.current.temp_c}°c</p>
            </div>
            <p className="home__weather-feels">
                Feels like {weather.current.feelslike_c}°c
            </p>
        </HomeStyled>
    );
};

export { HomeComponent };