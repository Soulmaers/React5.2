import './TVProgram.css'



export default function TVProgram({ tvProgram }) {


    /* блок программ*/


    return tvProgram.map((item) => (
        <div className="tv" key={item.title}>
            <span className="tv_time">{item.time}</span>
            <a href={item.link} className="tv_link">
                <span className="tv_title">{item.title}</span>
            </a>
            <span className="tv_description">{item.text}</span>
        </div>
    ));


}
