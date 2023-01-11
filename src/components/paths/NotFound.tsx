import * as React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <main className='ds-center'>
        <h1 className='notfound-st-word'>
            Ошибка 404
        </h1>
        <h2 className='notfound-st-word-small'>
            Такой страницы нет
        </h2>
        <Link className='btn-notfound' to='/'>
            ← На главную
        </Link>
    </main>
  )
}

export default NotFound