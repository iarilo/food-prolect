import React from 'react';
import { FanMealItem } from './show-meal-item';

export const FanMealList = (props) => {
  const { meals} = props;

  return (
    <div className='list'>
      {meals.map(item => (
        < FanMealItem key={item.idMeal} {...item}/> 
      ))}
    </div>
  )
}
