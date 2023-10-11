import { ReactNode } from 'react';
import { Card } from './styled.component';
interface Props {
    children: ReactNode;
}
const WeatherRecommended = ({ children }: Props) => {
    return <Card>{children}</Card>;
};

export { WeatherRecommended };
