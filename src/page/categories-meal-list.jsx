import React from 'react';
import { FanMealItem } from './categories-meal-item';
import { useNavigate } from 'react-router-dom';

export const FanMealList = (props) => {
  const { meals} = props;

  const navigate = useNavigate();
  const back = () => {
    navigate(-1)
  };

  return (

    <div> 
      <button className='btn btn-list' onClick={back}>вернуться</button>  
      <div className='list'>
        {meals.map(item => (
          < FanMealItem key={item.idMeal} {...item} />
        ))}
      </div>

    </div>
   
  )
}
