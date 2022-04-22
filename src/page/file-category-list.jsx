import React from 'react';
import { FanCatecory } from './file-catalog-item';

export const FanCategoryList = (props) => {
  const { catalog = []} = props;
  return (
    <div className='container_list'>
          <div className='list'>
              {catalog.map(item => (
          < FanCatecory key={item.idCategory} {...item}
          />))}
      </div>
    </div>
 
  )
}
