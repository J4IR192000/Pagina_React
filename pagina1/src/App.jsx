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
          <Me/>
    </>
  )
}

function Header() {
  return (
    <>
      <div className='header-content'>
        <div className='Img_container'>
          <a href='#'><img src="/src/assets/logo.svg" className='Img_1'/></a>
        </div>
        <nav>
        <ul>  
          <li><a href='#' className='button-lu'>Blog</a></li>
          <li><a href='#' className='button-lu'>Proyectos</a></li>
          <li><a href='#' className='button-lu'>Sobre mi</a></li>
        </ul>
        </nav>
          <button className='Button-contact'>Contacto</button>
      </div>
    </>   
  )
}

function Body() {
  return (
    <>
      <div className='Body-container'>
        <br/>
        <div className='Body-content'>
          <h1 className='Tittle'>Bienvenido</h1>
        </div>
      </div>
    </>
  )
}

function Me() {
  return (
    <>
      <div className='Body-container'>
        <br/>
        <div className='Body-content'>
          <h1 className='Tittle'>Sobre mi</h1>
          <br/>
          <div className='Me-content'>
            <p className='Body-text'>Hola, soy Jair Perez <br/> Informatico, desarrollador fullstack. Apasionado de la tecnologia.<br/>
            Siempre tengo curiosidad por aprender más sobre nuevas tecnologías y codificación creativa.</p>
            <img className='Img_photo' src="src/assets/foto.jpg"></img>
          </div>
          <button className='Button-contact'>CV</button>
        </div>
      </div>
    </>
  )
}


export default App
