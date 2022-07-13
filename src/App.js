import React from 'react'

import{Footer,Blog,Possibility,Feature,whatisMugumo,Header} from './containers';
import{Cta,Brand,Navbar} from './components'; 
import './app.css'; 
const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <whatisMugumo />
      < Feature />
      < Possibility />
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App