import React from 'react';
import { NavLink } from 'react-router-dom';

const styleLink = ({isActive})=>({color:isActive ? 'red' : 'black'})

export const FanHedar = () => {
  return (
    <nav>
      <div className="nav-content">
        <a href="https://iarilo.github.io/React_showcase/" className="nav-logo">Блюда</a>

        <ul id="nav-mobile" className="nav-list">
          <li><NavLink to="/" style={styleLink} >главная</NavLink></li>
          <li><NavLink to="/about" style={styleLink} >о нас</NavLink></li>

          <li><NavLink style={styleLink}   to="https://iarilo.github.io/React_showcase/ ">Репозиторий</NavLink></li> 
         {/*  <li><a href=" https://iarilo.github.io/React_showcase/ ">Репозиторий</a></li>  */}
        
        </ul>

      </div>
    </nav> 

   


  )
}

