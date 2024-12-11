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
        <Navbar friends = {props.state.profilePage.dialogs} />
        <div class='app-wrapper-content'>
          <Routes>
          <Route exact path='/dialogs' element={<Dialogs  dialogs = {props.state.profilePage.dialogs} messages = {props.state.messagePage.messages}  updateMessageInputWindow={props.store.updateMessageInputWindow}  updateMessageWindow= {props.store.updateMessageWindow} messageTextInputValue = {props.state.messagePage.messageTextInputValue}/>} />
          <Route path='/profile' element={<Profile posts = {props.state.profilePage.posts} addPost = {props.store.addPost}  newPostText = {props.store.newPostText} updateNewPostText = {props.store.updateNewPostText}/>} />
          <Route path = '/news' element = {<News/>}/>
          <Route path = '/music' element = {<Music/>} />
          <Route path = '/settings' element = {<Settings/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>);
}





export default App;
