import { useState } from 'react'
import viteLogo from '/logo.svg'
import './App.css'

function App() {
  return (
    <>
        <header>
          <Header/>
        </header>
          <Body/>
    </>
  )
}

function Header() {
  return (
    <>
      <div className='header-content'>
        <div className='Img_container'>
          <img src="/src/assets/logo.svg" className='Img_1'/>
        </div>
        <nav>
        <ul>  
          <li><a href='#' className='button-lu'>Proyectos</a></li>
          <li><a href='#' className='button-lu'>Sobre mi</a></li>
        </ul>
        </nav>
          <a href='#' ><button className='Button-contact'>Contacto</button></a>
      </div>
    </>   
  )
}

function Body() {
  return (
    <>
      <div className='Body-container'>
        <br/>
        <h1 className='Tittle'>Bienvenido</h1>
      </div>
    </>
  )
}


export default App
