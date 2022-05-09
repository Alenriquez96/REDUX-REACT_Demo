// import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import './styles/styles.scss'
import { useState } from 'react';
import { userContext } from './context/userContext';
import { themeContext } from './context/themeContext';
import {Provider} from 'react-redux';
import store from './redux/store';


//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {

  const [user, setUser] = useState("Alvaru"); // hook useState
  const [theme, setTheme] = useState("");

  //login
  const login = (name) => {
    setUser(name);
  }
  //logout

  const logout = () => {
    setUser("");
  }
  const toggleTheme = () => theme===""?setTheme("-dark"):setTheme("");
  

  const userData = {
    user,
    login,
    logout
  }

  const themeData = {
    theme,
    toggleTheme
  }

  return (
    <div className="App">
      <Provider store={store}>
        <themeContext.Provider value={themeData}>
          <BrowserRouter>
            <userContext.Provider value={userData}>
              <Header />
              <Main />
            </userContext.Provider>
          </BrowserRouter>
          <Footer />
        </themeContext.Provider>
      </Provider>
    </div>
  );
}

export default App;
