import { ReactNode } from 'react';
import { Card } from './styled.component';
interface Props {
    children: ReactNode;
    lat: number;
    lon: number;
}
const WeatherRecommended = ({ children, lat, lon }: Props) => {
    return <Card>{children}</Card>;
};

export { WeatherRecommended };
