import * as React from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../redux/hooks/redux';
import { clear, remove } from '../redux/reducers/storeSlice';
import { Cart } from '../redux/models/Cart';

interface briefcaseStore {
    cart: Cart[];
}

const BriefcaseFinance = () => {

    const dispatch = useAppDispatch();
    const {cart}:briefcaseStore = useAppSelector(state => state.storeReducer)

  return (
    <main>
        <section className='section-finance section-briefcase'>
            <div className='inventory'>
                <div className='block-inventory'>
                    <h1 className='text-block'>Мониторинг:</h1>
                    {cart.map((el:Cart) =>
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
                                <input className='btn-block red' type='button' onClick={()=>{dispatch(remove(el.ID))}} value='Убрать'/>
                            </div>
                        </form>
                    )}
                    <div className='blocks bot'>
                    <input className='btn-block red' type='button' onClick={()=>{dispatch(clear())}} value='Очистить'/>
                    </div>
                </div>
            <Link to='/finance' className='btn-log mr-btn'>
                Назад
            </Link>
            </div>
        </section>
    </main>
  )
}

export default BriefcaseFinance