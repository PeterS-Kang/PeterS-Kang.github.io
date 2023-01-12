import './styles/App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Pages from './pages/Pages';
import { useEffect, useRef } from 'react';
import Resume from './pages/Resume';


function App() {

  return (
    <div className="App" id='home'>
      <Router>
        
        <Navbar/>
        <Routes>
          <Route path='/' element={<Pages/>}></Route>
          <Route path='/#about-me' element={<Portfolio/>}></Route>
          <Route path='/#projects' element={<Projects/>}></Route>
          <Route path='/#experience' element={<Experience/>}></Route>
          <Route path='/#contact' element={<Contact/>}></Route>
          <Route path='/resume' element={<Resume/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
