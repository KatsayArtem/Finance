import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from './paths/NotFound'
import Main from './paths/Main'
import Login from './paths/auth/Login'
import Registration from './paths/auth/Registration'
import MainFinance from './paths/finance/MainFinance'
import BriefcaseFinance from './paths/finance/BriefcaseFinance'

const MainRouter = () => {
  return (
    <Routes>
        <Route path='/*' element={<NotFound />}/>
        <Route path='/' element={<Main />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/registration' element={<Registration />}/>
        <Route path='/finance' element={<MainFinance />}/>
        <Route path='/briefcase' element={<BriefcaseFinance />}/>
    </Routes>
  )
}

export default MainRouter
