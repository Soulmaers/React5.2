import './Menu.css'
import { menu } from '../Content'

/* меню */
export default function Menu() {



    return (

        <ul className='menuList'>
            {menu.map(el => <li className='menuItem'><a className='linkMenu' href={el.link} key={el.title}>{el.title}</a></li>)}

        </ul>


    )
}