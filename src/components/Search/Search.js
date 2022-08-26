import './Search.css'


export default function Search() {



    return (
        <>
            <div className='search'>
                <img className='imgLogo' src="http://via.placeholder.com/100x50" alt='...' />
                <input className="input" type='text' placeholder="Текст для поиска" />
                <button className='btn' type='submit'>Найти</button>
            </div>
            <div className='down'>
                <p className='textHolder'>Найдется все. Например,</p>
                <p className='spanHolder'>фаза луны сегодня</p>
            </div>
        </>

    )
}