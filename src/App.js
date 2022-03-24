import logo from './logo.svg';
import { Link, Routes, Route } from 'react-router-dom';
import Top from './components/Top';
import Home from './components/Home';
import Current from './components/Current';
import Prevent from './components/Prevent';
import Guide from './components/Guide';
import Symptom from './components/Symptom';
import Vaccine from './components/Vaccine';
import Manage from './components/Manage';
import Isolation from './components/Isolation';
import MaskGuide from './components/MaskGuide';
import Hospital from './components/Hospital';
import About from './components/About';

import './App.css';

function App() {

  return (
    <div className="App">
      <Top />

      <div className='rightSideDiv'>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/current" element={<Current />} />
          <Route path="/prevent" element={<Prevent />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/symptom" element={<Symptom />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/isolation" element={<Isolation />} />
          <Route path="/maskGuide" element={<MaskGuide />} />
          <Route path="/hospital" element={<Hospital />} />
          <Route path="/about" element={<About />} />
          <Route path="/vaccine/*" element={<Vaccine />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
