
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <html>
        <Header/>
      </html>
    </>
  )
}

function Header() {
  return (
    <>
      <header>
        <div className='Img_container'>
          <img src="https://img.freepik.com/vector-gratis/cohete-volando-luna-dibujos-animados-vector-icono-ilustracion-tecnologia-transporte-icono-aislado_138676-5157.jpg?w=740&t=st=1722757563~exp=1722758163~hmac=f47eb2a7e2a4afed968e6b6c95aa447dc2781caf9df45c8ca3e3b85d42c31db6" className='Img_1'/>
        </div>
        <Nav/>
      </header>
    </>
  )
}

function Nav() {5
  return (
    <>
      <nav>
        <a href='#' className='Buttons'>Inicio</a>
        <a href='#' className='Buttons'>Proyectos</a>
        <a href='#' className='Buttons'>Informacion</a>
      </nav>
    </>
  )
}

export default App
