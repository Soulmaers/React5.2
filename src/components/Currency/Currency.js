import { currency } from '../Content'
import './Currency.css'




export default function Currency() {


    return (
        <section className='currency'>
            {currency.map(el =>
                <div className='currencyInfo' key={el.title}>
                    <a className='linkCurrency' href={el.link} >{el.title}</a>
                    <span className='spanCurrency'>{el.value}</span>
                    <span className='spanCurrencyDelta'>{el.delta}</span>
                </div>)}
        </section>


    )
}