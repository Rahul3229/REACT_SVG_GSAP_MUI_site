import './App.css';


import { BrowserRouter,Routes,Route, NavLink } from 'react-router-dom';


import Landing from './Components/Landing1/Landing2.js';

import Results from './Components/Results/Results.js';

import Reservations from './Components/Reservations/Reservations.js';

import Nav from './Components/Landing1/Nav.js';

function App() {
  return (
    <div className="App">
      <Nav />
    

    <Routes>

    <Route index element={<Landing />} />
    <Route path="/Menu" element={<Results />} />
    <Route path="/Reservations" element={<Reservations />} />

    </Routes>

    
    </div>
  );
}

export default App;
