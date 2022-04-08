import React from 'react';
import { NavLink } from 'react-router-dom';

export const FanNotFound = () => {
  return (
    <div className='notFound'>
      <h4>Страница не найдена</h4>
      <NavLink to="/">главная</NavLink>
      </div>
  )
}
