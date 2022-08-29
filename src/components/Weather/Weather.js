//import { weather } from '../Content'
import "./Weather.css";


export default function Weather({ weather }) {



    return (
        <div className="weather">
            <img src={weather.icon} className="weather_img" alt="..." />
            <div className="weather__temp">{weather.temp}°</div>
            <div className="weather__forecast">
                <span>Днём {weather.morning},</span>
                <span>вечером {weather.day}</span>
            </div>
        </div>



    )
}