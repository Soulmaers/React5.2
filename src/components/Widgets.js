import Widget from "./Widget.js";
import Weather from "./Weather/Weather.js";
import Visit from "./Visit/Visit";
import TVProgram from './TVProgram/TVProgram';
import Live from './Live/Live';
import { weather, visit, tvProgram, live } from "./Content";
import '../App.css'


/* компонент всех виджетов*/

export default function Widgets() {
    return (
        <section className="widgets">
            <Widget title="Погода" link="#">
                <Weather weather={weather} />
            </Widget>
            <Widget title="Посещаемое" link="#">
                <Visit visit={visit} />
            </Widget>
            <Widget title="Карта Германии" link="#">
                <div>Расписания</div>
            </Widget>
            <Widget title="Телепрограмма" link="#">
                <TVProgram tvProgram={tvProgram} />
            </Widget>
            <Widget title="Эфир" link="#">
                <Live live={live} />
            </Widget>
        </section>
    );
}