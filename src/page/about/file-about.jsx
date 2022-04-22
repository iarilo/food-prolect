import React from 'react';
import { NavLink,Outlet} from 'react-router-dom';

export const FanAbout = () => {

  return (
    <div className='about-link'>
      <h4>Users:</h4>
      <ul>
        <li> <NavLink to="contacts">May</NavLink></li>
        <li> <NavLink to="user">User</NavLink></li>
      </ul>

       {/*  <Routes>
     <Route path='contacts' element={<p> May contacts</p>}/>
        <Route path='user' element={<p> User contacts</p>} />
   </Routes> */}

   <Outlet/>
      </div>
  )
}
