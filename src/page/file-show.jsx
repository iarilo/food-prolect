import React,{ useState,useEffect} from 'react';
import { useParams } from 'react-router';
import { getfilteredCategory } from '../api'
import { FanPreloader } from '../main sections/preloader';
import { FanMealList } from './show-meal-list';

export const FanShow = () => {
  const{name} = useParams();
  const [meals, setMeals] = useState();

  useEffect(()=>{
    getfilteredCategory(name).then(data => setMeals(data.meals))
  },[name]);
  return (
    <div>
      {!meals 
      ?( <FanPreloader />) : (<FanMealList meals={meals}/>)}
    </div>
  )
}
