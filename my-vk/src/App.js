import appStyle from "./App.module.css";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
//import Profile from './components/Profile/Profile.jsx';
import Dialogs from "./components/Dialogs/Dialogs.jsx";

function App() {
  return (
    <div className={appStyle.appWrapper}>
      <Header />
      <Sidebar />
      {/*<Profile/>*/}
      <div className={appStyle.appWrapperContent}>
        <Dialogs />
      </div>
    </div>
  );
}

export default App;
