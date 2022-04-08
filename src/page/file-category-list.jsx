import React from 'react';
import { FanCatecory } from './file-catecory';

export const FanCategoryList = (props) => {
  const { catalog = []} = props;

  return (
    <div className='list'>
      {catalog.map(item => (
        < FanCatecory key={item.idCategory} {...item}
      />))}
    </div>
  )
}
