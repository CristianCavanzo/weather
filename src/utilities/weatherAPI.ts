import axios from 'axios';
export interface Weather {
    location: Location;
    current: Current;
}

export interface Current {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: Condition;
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
}

export interface Condition {
    text: string;
    icon: string;
    code: number;
}

export interface Location {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
}

export class WatherAPI {
    constructor(private latitud: number, private longitud: number) {}
    async getWeather() {
        try {
            const { data } = await axios({
                url: 'https://weatherapi-com.p.rapidapi.com/current.json',
                params: {
                    q: `${this.latitud},${this.longitud}`,
                },
            });
            console.log(data);
        } catch (error) {}
    }
}
