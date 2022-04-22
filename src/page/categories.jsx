import React, { useState, useEffect,useContext } from 'react';
import { useParams } from 'react-router';
import { getfilteredCategory } from '../api';
import { FanPreloader } from '../main sections/preloader';
import { FanMealList } from './categories-meal-list';
import { FanHome } from './file-catalog-home';


export const FanCategory = ({ dataValue, stateCheck}) => {
  //console.log('stateCheck FanCategory :', stateCheck);
 
  const { name } = useParams();
  const [mea, setMea] = useState();

  useEffect(() => {
    if (stateCheck) {
      getfilteredCategory(dataValue).then((data) => setMea(data.meals));
    } else {getfilteredCategory(name).then((data) => setMea(data.meals)); }
   
  }, [name, dataValue, stateCheck]);

  return (
    <div>

      <div>{!mea 
      ? (<FanPreloader />) 
        :  (<FanMealList meals={mea} />)}
      </div>;

       
      {/* {!mea 
        ? (<FanPreloader />)
        : (<div >
          {stateCheck
            ? (<FanMealList meals={mea} />)
            : (<FanHome/> )}
           </div>
        )}  */}




    </div>
  )
};
