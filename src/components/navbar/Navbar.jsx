import React,{useState} from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

//BEM - Block Element Modifier naming convention
const Navbar = () => {
  const [toggleMenu,setToggleMenu] = useState(false);
  return (
    <div className='mugumo__navbar'>
      <div className='mugumo__navbar-links'>
        <div className='mugumo__navbar-links-logo'>
          <img src={logo} alt='mugumo logo' />
        </div>
        <div className='mugumo__navbar-links_container'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#aboutus'>About Mugumo.io</a></p>
          <p><a href='#possibility'>Case Studies</a></p>
          <p><a href='#featrures'>Products</a></p>
          <p><a href='#blog'>Library</a></p>
        </div>
      </div>
      <div className='mugumo__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className='mugumo__navbar-menu'>
      {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}      
          {toggleMenu && (
            <div className='mugumo__navbar-menu_container scale-up-center'>
              <div className='mugumo__navbar-menu_container-links'>
                <p><a href='#home'>Home</a></p>
                <p><a href='#aboutus'>About Mugumo.io</a></p>
                <p><a href='#possibility'>Case Studies</a></p>
                <p><a href='#featrures'>Products</a></p>
                <p><a href='#blog'>Library</a></p>
              </div>
              <div className='mugumo__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          )}
      </div>
    </div>
  )
}

export default Navbar