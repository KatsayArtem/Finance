import * as React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <main>
    <Header/>
        <section className='main-section'>
            <h1 className='main-title'>KatsayFinance</h1>
            <Link to='/registration' className='main-text'>
                <h2>Зарегистрируйся, чтобы начать →</h2>
            </Link>
        </section>
    </main>
  )
}

export default Main
