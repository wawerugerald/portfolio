import React from 'react'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const header = () => {
  return (
    <div className="mugumo__header section__padding" id="home">
    <div className="mugumo__header-content">
      <h1 className="gradient__text">A Farmer's take to the local <b>Food Retail and Logistics</b> Industry.</h1>
      <p>Sign up for our wait list</p>

      <div className="mugumo__header-content__input">
        <input type="email" class="form-action" placeholder="Enter Your Current Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="mugumo__header-content__people">
        <img src={people} alt='people on the program'/>
        <p>1600 people requested access to our pilot program in the last 24 hours</p>
      </div>
    </div>

    <div className="mugumo__header-image">
      <img src={ai} alt='farmerprofile'/>
    </div>
  </div>
  )
}

export default header