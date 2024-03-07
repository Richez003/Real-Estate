import React from 'react'
import './Header.css'
const Header = () => {
  return (
   <section className="h-wrapper">
<div className=" flexCenter innerWidth paddings h-container">
    <img src="./logo.png" alt="logo" width={100}/>
    <div className=" flexCenter h-menu">
        <a href="">Residences</a>
        <a href="">Our value</a>
        <a href="">Contact us</a>
        <a href="">Get started</a>
        <button className='button'>
        <a href="">Contact</a>
            
        </button>
    </div>
</div>
   </section>
  )
}

export default Header
