import rainyClouds from '../assets/weather_widgets/rainy.gif';
import lightRain from '../assets/weather_widgets/light_rain.gif';
import sun from '../assets/weather_widgets/sun.svg';
import sunnyRain from '../assets/weather_widgets/sunny_rainy.gif';
import snow from '../assets/weather_widgets/snowflake.gif';
import moon from '../assets/weather_widgets/moon.svg';

const weatherImageRenderer = (weatherDescription) => {
    // Assuming weatherDescription is a string
    if (weatherDescription.includes('rain')) {
        if (weatherDescription.includes('sun')) {
            return sunnyRain;
        } else if (weatherDescription.includes('light')) {
            return lightRain;
        } else {
            return rainyClouds;
        }
    } else if (weatherDescription.includes('clear')) {
        const currentHour = new Date().getHours();
        const icon = currentHour <= 19 ? sun : moon;
        return icon;
    } else {
        return moon;
    }
};

export default weatherImageRenderer;
