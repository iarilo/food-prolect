import { Routes, Route } from 'react-router';
import { FanHedar } from './main sections/Header';
import { FanFooter } from './main sections/Footer';
import { FanNotFound } from './page/file-not-found';

import { FanWrapperMain } from './main sections/file-wrapper-main';
import { FanHome } from './page/file-home';
import { FanAbout } from './page/file-about';
import { FanShow } from './page/file-show';
import './App.css';

function App() {
  return (
    <div className="App">
      <FanHedar />
      <Routes>
        <Route path="/" element={<FanWrapperMain />}>
          <Route index element={<FanHome />} />
          <Route path="about" element={<FanAbout />} />
          <Route path="/category/:name" element={<FanShow />} />
          <Route path="*" element={<FanNotFound />} />
        </Route>
      </Routes>
      <FanFooter />
    </div>
  );
}

export default App;
