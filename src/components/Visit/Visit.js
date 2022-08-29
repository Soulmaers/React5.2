
import './Visit.css'


export default function Visit({ visit }) {



    return visit.map((item) => (
        <div className="popular" key={item.title}>
            <a href={item.link} className="popular_link">
                <span className="popular_title">{item.title}</span>
            </a>
            <span className="popular_description">{item.text}</span>
        </div>
    ));
}


Visit.defaultProps = {
    visit: [],
};