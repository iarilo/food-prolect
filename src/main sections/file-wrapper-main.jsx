import React from 'react';
import { Outlet } from 'react-router-dom';

export const FanWrapperMain = () => {
  return (
    <main className='conteiner_main'>
       <Outlet/> 
    </main>
  )
}
