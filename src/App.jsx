import { Routes, Route } from 'react-router';
import { FanHedar } from './main sections/Header';
import { FanFooter } from './main sections/Footer';
import { FanNotFound } from './page/file-not-found';

import { FanWrapperMain } from './main sections/file-wrapper-main';
import { FanHome } from './page/file-catalog-home';
import { FanAbout } from './page/about/file-about';
import { FanCategory } from './page/categories';
import { FanRecipe } from './page/recipe/file-recipe';

// about
import { FanAboutUsers } from './page/about/about-users';
import { FanAboutId } from './page/about/about-id';

import { WraperContext } from './main sections/wraper context';

import './App.css';

function App() {
  return (
    <div className="App">
  <WraperContext>
        <FanHedar />
        <Routes>
          <Route path="/" element={<FanWrapperMain />}>
            <Route index element={<FanHome />} />
            {/*  about */}
            <Route path="/*" element={<FanAbout />}>
              <Route path='contacts' element={<FanAboutUsers />} />
              <Route path='user' element={<FanAboutId />} />
            </Route>
            
            <Route path="/category/:name" element={<FanCategory  />} />
            <Route path="/meal/:id" element={<FanRecipe />} />
            <Route path="*" element={<FanNotFound />} />
          </Route>
        </Routes>
        <FanFooter />
  </WraperContext>
    </div>
  );
}

export default App;
