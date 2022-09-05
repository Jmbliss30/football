import React from 'react';
import './App.css';
import './Css/Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './components/pages/Homepage';
import Roster from './components/pages/Roster';
import Schedule from './components/pages/Schedule';
import Score from './components/pages/Score';
import Coaches from './components/pages/Coaches';
import GameRecap from './components/pages/GameRecap';
import FundRiser from './components/pages/FundRiser';
import Information from './components/pages/Information';
import PlayerStatus from './components/pages/PlayerStatus';
import Menu from './components/pages/Menu';
import FooterOne from './components/pages/FooterOne';
import PlayerStatusTwo from './components/pages/PlayerStatusTwo';
import { AppContext } from './context';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

function App() {
  const [data, setData] = useState([]);
  const DispatchUserEvent = () => {
    const url = 'https://umaru-api.herokuapp.com/api/players';

    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error));
  };
  console.log('CHECKTHIS', data);
  useEffect(() => {
    DispatchUserEvent();
  }, []);
  return (
    <div className='App'>
      <div className='wrap-app'>
        <AppContext.Provider value={{ data }}>
          <Router>
            <Header />

            <Menu />
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/roster' element={<Roster />} />
              <Route path='/schedule' element={<Schedule />} />
              <Route path='/score' element={<Score />} />
              <Route path='/coaches' element={<Coaches />} />
              <Route path='/gamerecap' element={<GameRecap />} />
              <Route path='/fundriser' element={<FundRiser />} />
              <Route path='/information' element={<Information />} />
              <Route path='/playerstatus' element={<PlayerStatus />} />
              <Route path='/playerstatustwo' element={<PlayerStatusTwo />} />
            </Routes>
            <FooterOne />
            <Footer />
          </Router>
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
