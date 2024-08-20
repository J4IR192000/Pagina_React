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
          <Proyects/>
          <Blog/>
          <Footer/>
    </>
  )
}

function Header() {
  return (
    <>
      <div className='header-content' >
        <div className='Img_container'>
          <a href='#Body'><img src="/src/assets/logo.svg" className='Img_1'/></a>
        </div>
        <nav>
        <ul>  
          <li><a href='../blog.html' className='button-lu'>Blog</a></li>
          <li><a href='#Proyects' className='button-lu'>Proyectos</a></li>
          <li><a href='#Me' className='button-lu'>Sobre mi</a></li>
        </ul>
        </nav>
        <button className='Button-contact' id='Button-contact' onClick={() => alert('Se dio click a contacto')} >Contacto</button>
        </div>
    </>   
  )
}

function Body() {
  return (
    <>
      <div className='Body-container' id="Body">
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
      <div className='Body-container' id="Me">
        <br/>
        <div className='Body-content'>
          <h1 className='Tittle'>Sobre mi</h1>
          <div className='Me-content'>
            <p className='Body-text'>Hola, soy Jair Perez <br/> Informatico, desarrollador fullstack apasionado por la tecnologia.<br/>
            Siempre tengo curiosidad por aprender más sobre nuevas tecnologías y codificación creativa.</p>
            <img className='Img_photo' src="src/assets/foto.jpg" />
          </div>
          <div className='Buttons-content'>
            <button className='Button-contact Button-CV' onClick={() => alert('Se dio click a CV')}><i className="fa-regular fa-file"></i>Curriculum</button>
            <a href = 'https://github.com/J4IR192000' target="_blank" rel="noopener noreferrer"><button className='Button-contact Button-GitHub'><i className="fa-brands fa-github"></i>GitHub</button></a>
            <a href = 'https://www.linkedin.com/in/oscar-jair-perez-lopez-348944215/' target="_blank" rel="noopener noreferrer"><button className='Button-contact Button-LinkedIn'><i className="fa-brands fa-linkedin"></i>LinkdIn</button></a>
            <a href = 'https://www.instagram.com/jairp_coding/' target="_blank" rel="noopener noreferrer"><button className='Button-contact Button-Instagram'><i className="fa-brands fa-instagram"></i>Instagram</button></a>
          </div>
        </div>
      </div>
    </>
  )
}

function Proyects() {
  return (
    <>
      <div className='Body-container'id="Proyects">
        <br/>
        <div className='Body-content'>
          <h1 className='Tittle'>Proyectos</h1>
          <br/>
          <ul>
            <li>Titulo<a href='#'> <i className="fa-solid fa-caret-down"></i></a></li>
            <p>Descripcion <br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, hic ex quibusdam eius reiciendis illo quo unde dicta. Veritatis quia assumenda blanditiis alias asperiores consequatur maiores consectetur dolores repudiandae natus.</p>
            <button children='Open-button'><i className="fa-solid fa-play"></i> Abrir</button>
          </ul>
        </div>
      </div>
    </>
  )
}

function Blog() {
  return (
    <>
      <div className='Body-container'>
        <br/>
        <div className='Body-content'>
          <h1 className='Tittle'>Blog</h1>
        </div>
      </div>
    </>
  )
}

function Footer() {
  return (
    <>
      <footer>
          <p><i className ="fa-regular fa-copyright"></i> Copyright</p>
      </footer>
    </>
  )
}

export default App
