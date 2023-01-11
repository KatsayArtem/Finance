import * as React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
        <div className='container-header'>
            <Link className='btn-log' to='/login'>
            Войти
            </Link>
            <Link className='btn-reg' to='/registration'>
            Регистрация
            </Link>
        </div>
    </header>
  )
}

export default Header