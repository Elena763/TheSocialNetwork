import React from "react";
import {Route,Routes, BrowserRouter} from "react-router-dom";
import appStyle from "./App.module.css";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Profile from './components/Profile/Profile.jsx';
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import Music from "./components/Music/Music.jsx";
import News from "./components/News/News.jsx";
import Settings from "./components/Settings/Settings.jsx"

function App(props) {

  return (
    <BrowserRouter>
      <div className={appStyle.appWrapper}>
        <Header />
        <Sidebar />
        <div className={appStyle.appWrapperContent}>
          <Routes>

          <Route path='/dialogs' element={<Dialogs

                state={props.state.dialogsPage}
                dispatch={props.dispatch}
                />} />
            <Route path='/profile'
              element={<Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
                />} />
            <Route path='/news' element={<News/>} />
            <Route path='/music' element={<Music/>} />
            <Route path='/settings' element={<Settings/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
