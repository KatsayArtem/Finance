import * as React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../redux/hooks/redux';
import { fetchValue } from '../redux/reducers/action';
import { add } from '../redux/reducers/storeSlice';
import usd from './img/Rectangle.png'
import eur from './img/Rectangle-1.png'
import gbp from './img/Rectangle-2.png'
import cny from './img/Rectangle-3.png'
import lir from './img/Rectangle-4.png'
import { Cart } from '../redux/models/Cart';

interface typesStore {
    main: any;
    isLoading: boolean;
    error: string;
}

const MainFinance = () => {
    const [values, setValues] = useState([]);
    const dispatch = useAppDispatch();
    const {main, isLoading, error}:typesStore = useAppSelector(state => state.storeReducer)

    useEffect(()=>{
        dispatch(fetchValue())
    }, [])

    useEffect(() => {
        (async () => {
            const value:never[] = Object.values(main.Valute);
            setValues(value)
        })();
    }, [main]);

  return (
    <main>
        <section className='section-finance'>
            <img src={usd} key={usd} className='img-main usd left'/>
            <img src={eur} key={eur} className='img-main eur right'/>
            <img src={lir} key={lir} className='img-main lir left'/>
            <div className='block'>
            <Link to='/briefcase' className='btn-log mr-btn'>
                Мониторинг
            </Link>
            {isLoading && <h5>is Loading...</h5>}
            {error && <h1>{error}</h1>}
            {values.map((el:Cart) =>
                <form key={el.ID} className='form-block'>
                    <div className='blocks'>
                        <div className='small-block'>
                        <h2 className='text-block black'>{el.CharCode}</h2>
                        </div>
                        <div className='ds-col'>
                        <h4 className='text-block price-low'>Последняя цена:</h4>
                        <h2 className='text-block value'>{Number(el.Value.toFixed(2))} ₽</h2>
                        </div>
                        <div className='ds-col'>
                        <h4 className='text-block price-low'>Старая цена:</h4>
                        <h2 className='text-block'>{Number(el.Previous.toFixed(2))} ₽</h2>
                        </div>
                        <div className='ds-col'>
                        <h4 className='text-block price-low'>Наминал:</h4>
                        <h2 className='text-block'>{el.Nominal}</h2>
                        </div>
                        {/* <input className='btn-block red' type='button' onClick={()=>{dispatch(remove(el.ID))}} value='Убрать'/> */}
                        <input className='btn-block' type='button' onClick={()=>{dispatch(add(el))}} value='Отслеживать'/>
                    </div>
                </form>
            )}
            </div>
            <img src={gbp} key={gbp} className='img-main gbp right'/>
            <img src={cny} key={cny} className='img-main cny left'/>
        </section>
    </main>
  )
}

export default MainFinance