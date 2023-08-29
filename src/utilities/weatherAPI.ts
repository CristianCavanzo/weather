import axios from 'axios';

export class WatherAPI {
    constructor(private latitud: number, private longitud: number) {}
    async getWeather() {
        try {
            const { data } = await axios({
                url: 'https://weatherapi-com.p.rapidapi.com/current.json',
                params: {
                    q: `${this.latitud},${this.longitud}`,
                },
                headers: {
                    'X-RapidAPI-Key': process.env.APIKEY,
                },
            });
            console.log(data);
        } catch (error) {}
    }
}
