import axios from 'axios';
/**
 * Queries openWeather api
 */
export default async function weather(place) {
    return new Promise((resolve, reject) => {
        try {
            if (!place || place.length === 0) {
                place = 'Nairobi';
            }

            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=278ed619f00f0b61b769cfc96676e8af`)
                .then(response => {
                    if (response.status !== 200) {
                        reject(new Error('Place not found'));
                    }
                    const result = apiResponseFormatter(response.data);
                    resolve(result);
                })
                .catch(error => {
                    console.error("Unable to resolve request");
                    throw error;
                });
        } catch (error) {
            reject(error);
        }
    });
};

const apiResponseFormatter = (openWeatherApiData) => {
    /**
     * Formats the response from the openWeather api
     *  response will contain:
     *                          wind
     *                          pressure
     *                          humidity
     *                          rain (probability of rain)
     *                          title of place
     *                          temperature (in celsius)
     *                          weather description
     *                          Date (example Nov 14)
     *                          Day (example Sunday)
     */
    const result = {
        wind: openWeatherApiData.wind.speed + ' km/h',
        pressure: openWeatherApiData.main.pressure + ' mbar',
        humidity: openWeatherApiData.main.humidity + '%',
        rain: openWeatherApiData.clouds.all + '%',
        title: openWeatherApiData.name,
        temperature: Math.round(openWeatherApiData.main.temp - 273.15) + '°',
        weatherDescription: openWeatherApiData.weather[0].description,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        day: new Date().toLocaleDateString('en-US', { weekday: 'long' }),
    };

    return result;
}