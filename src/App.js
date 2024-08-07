import React from 'react'
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';





function App(props) {
  return (
    <BrowserRouter>
      <div class='app-wrapper'>
        <Header />
        <Navbar />
        <div class='app-wrapper-content'>
          <Routes>
          <Route path='/dialogs' element={<Dialogs />} />
          <Route path='/profile' element={<Profile />} />
          <Route path = '/news' element = {<News/>}/>
          <Route path = '/music' element = {<Music/>} />
          <Route path = '/settings' element = {<Settings/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>);
}





export default App;
