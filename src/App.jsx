import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componets/Navbar'
import Add from './componets/Add'
import View from './componets/View'
import { Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>WELCOME TO MOVIE SUGGESTIONS</h1>
      <Navbar/>
     
      <Routes>
    <Route path='/' element={<View/>}></Route>
    <Route path='/add' element={<Add/>}></Route>
   </Routes>
    </>
  )
}

export default App
