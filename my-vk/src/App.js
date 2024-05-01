import React from "react";
import {Route,Routes, BrowserRouter} from "react-router-dom";
import appStyle from "./App.module.css";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Profile from './components/Profile/Profile.jsx';
import Music from "./components/Music/Music.jsx";
import News from "./components/News/News.jsx";
import Settings from "./components/Settings/Settings.jsx"
import DialogsContainer from "./components/Dialogs/DialogsContainer.jsx";
import Users from "./components/Users/Users.jsx";

function App(props) {

  return (
    <BrowserRouter>
      <div className={appStyle.appWrapper}>
        <Header />
        <Sidebar />
        <div className={appStyle.appWrapperContent}>
          <Routes>

          <Route path='/dialogs'
              element={<DialogsContainer
                store={props.store}
                />} />
            <Route path='/profile'
              element={<Profile
                store={props.store}
                />} />
            <Route path='/news' element={<News/>} />
            <Route path='/music' element={<Music/>} />
            <Route path='/settings' element={<Settings/>} />
            <Route path='/users' element={<Users/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
