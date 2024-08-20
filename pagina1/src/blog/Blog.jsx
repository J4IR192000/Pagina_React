import { useState } from 'react'
import viteLogo from '/logo.svg'
import './Blog.css'
import '../App'

function Blog() {
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
export default Blog