import './News.css'
import { news } from '../Content'

/* новости список*/

export default function News() {


    return (

        <ul className="news">
            {news.map(el => <li className="itemNews" key={el.title}><img src={el.img} className="imgNews" alt="..." />
                <a href={el.link} className="linkNews">{el.title}</a></li>)}

        </ul>
    )
}