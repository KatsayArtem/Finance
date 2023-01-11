import * as React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail]:any = useState('');
    const [password, setPassword]:any = useState('');

    const navigate = useNavigate();

    const hendlerLogin = (e:any) => {
        e.preventDefault()
        navigate('/finance')
    }   

  return (
    <main className='container-log'>
        <Link to='/' className='back'>
            Назад
        </Link>
        <form className='card-log' onSubmit={(e:any)=>hendlerLogin(e)}>
            <h1 className='word-log'>Вход в аккаунт</h1>
            <input type='email' className='input-log' placeholder='Почта:' required value={email} name='email' onChange={(e:any)=>setEmail(e.target.value)}/>
            <input type='password' className='input-log' placeholder='Пароль:' required value={password} name='password' onChange={(e:any)=>setPassword(e.target.value)}/>
            <input type='checkbox' className='checkbox-log-pas'/>
            <button className='btn-reg'>
                Войти
            </button>
        </form>
    </main>
  )
}

export default Login