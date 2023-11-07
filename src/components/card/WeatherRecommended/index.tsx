import { Weather } from '@/models/weather';
import { Card } from './styled.component';
import Link from 'next/link';
import Image from 'next/image';
import { categoriasClima } from '@/utils/weatherCategories';
import styles from '@/styles/components/weatherCard/index.module.css';
import querystring from 'querystring';
interface Props {
    weather: Weather;
}
const WeatherRecommended = ({ weather }: Props) => {
    const locationName = weather.location.name;
    const condition = weather.current.condition;
    const weatherCategory = categoriasClima.find(
        (clima) => clima?.code === condition?.code
    );

    const icon = `/img/${weatherCategory?.iconLocal}`;
    return (
        <Link
            className={`a_withoutStyles ${styles['weather__card-icon']}`}
            href={`/location/${querystring.stringify({
                lat: weather.location.lat,
                lon: weather.location.lon,
            })}`}
        >
            <Card>
                <div>
                    <p>{locationName}</p>
                    <p>{weather.current.temp_c} </p>
                </div>
                <div className="weather__card-icon">
                    <Image
                        src={icon}
                        width={40}
                        height={40}
                        alt={weatherCategory?.iconLocal || 'icono del clima'}
                        quality={100}
                    />
                </div>
            </Card>
        </Link>
    );
};

export { WeatherRecommended };
