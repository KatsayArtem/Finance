import * as React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Registration = () => {
    const [name, setName]:any = useState('')
    const [email, setEmail]:any = useState('')
    const [password, setPassword]:any = useState('')
    const [repeatPas, setRepeatPas]:any = useState('')

    const hiddenTr:any = document.getElementById('hidTr')
    const hidden:any = document.getElementById('hid')

    const navigate = useNavigate();

    const hendlerRegistration = async (e:any) => {
        e.preventDefault()
        if (password !== repeatPas) {
            hiddenTr.style.display = 'block'
            hidden.style.display = 'flex'
            setTimeout(()=>{
                hiddenTr.style.display = 'none'
                hidden.style.display = 'none'
            }, 2000)
            return;
        } else {
            hiddenTr.style.display = 'none'
            hidden.style.display = 'none'
        }
        navigate('/finance')
    }

    function check() {
        const typeInput:any = document.getElementById('typeChange')
        const checkboxInput:any = document.getElementById('check')
        if (checkboxInput.checked) {
            typeInput.type = 'text'
        } else {
            typeInput.type = 'password'
        }
    }

  return (
    <main className='container-reg'>
        <Link to='/' className='back'>
            Назад
        </Link>
        <form className='card-reg' onSubmit={(e:any)=>hendlerRegistration(e)}>
            <h1 className='word-reg'>Регистрация</h1>
            <input type='text' className='input-reg' placeholder='Имя*' required value={name} name='name' onChange={(e:any)=>setName(e.target.value)} />
            <input type='email' className='input-reg' placeholder='Почта*' required value={email} name='email' onChange={(e:any)=>setEmail(e.target.value)}/>
            <input type='password' className='input-reg' id='typeChange' placeholder='Пароль*' required value={password} name='password' onChange={(e:any)=>setPassword(e.target.value)}/>
            <input type='checkbox' className='checkbox-reg-pas' id='check' onClick={check}/>
            <div className='triangle-pas' id='hidTr'></div>
            <div className='error-pas' id='hid'>Пароли не совпадают</div>
            <input type='password' className='input-reg' placeholder='Повторите пароль*' required value={repeatPas}
            name='repeatPas' onChange={(e:any)=>setRepeatPas(e.target.value)}/>
                <button className='btn-reg'>
                    Зарегистрироваться
                </button>
        </form>
    </main>
  )
}

export default Registration