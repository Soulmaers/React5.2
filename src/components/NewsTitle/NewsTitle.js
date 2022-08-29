import { newsTitle } from '../Content'
import './NewsTitle.css'

/* новости основные*/

export default function NewsTitle() {

    return (
        <div className='newsTitle'>
            {newsTitle.map(el => (<a className='linkTitle' href={el.link} key={el.title}>{el.title}</a>))}
        </div>


    )
}