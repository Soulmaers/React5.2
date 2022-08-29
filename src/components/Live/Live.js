import './Live.css'



export default function Live({ live }) {

    return live.map((item) => (
        <div className="live" key={item.title}>
            <img src="http://dummyimage.com/20x20" className="live_img" alt="..." />
            <a href={item.link} className="live_link">
                <span className="live_title">{item.title}</span>
            </a>
            <span className="live_description">{item.text}</span>
        </div>
    ));
}

Live.defaultProps = {
    live: [],
};