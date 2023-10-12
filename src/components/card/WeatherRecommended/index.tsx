import { Weather } from '@/models/weather';
import { Card } from './styled.component';
import Link from 'next/link';
interface Props {
    weather: Weather;
}
const WeatherRecommended = ({ weather }: Props) => {
    const locationName = weather.location.name;
    return (
        <Link className="a_withoutStyles" href={`/location/${locationName}`}>
            <Card>
                <p>{locationName}</p>
                <p>{weather.current.temp_c} </p>
            </Card>
        </Link>
    );
};

export { WeatherRecommended };
