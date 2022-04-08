import React,{useState, useEffect} from 'react';
import { getAllCategories } from '../api';
import { FanPreloader } from '../main sections/preloader';
import { FanCategoryList } from './file-category-list';


export const FanHome = () => {
const[catalog, setCatalog] = useState([]);
  
useEffect(()=>{
  getAllCategories().then(data => 
    setCatalog(data.categories)
  )
},[])
  return (
    <div >
      {!catalog ? 
      (<FanPreloader/> ) 
      : (<FanCategoryList catalog={catalog}/>)  }
      </div>
  )
}
