import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import "./component/header.css"
import LeftNav from './component/LeftNav';
import { createContext, useState } from 'react';
import Main from './component/Main';

export const createNav = createContext();

function App() {
  const [nav, setNav] = useState(true);

  const NavOpen = ()=>{
    setNav(!nav)
    console.log("first")
  }
  return (
    <div>
      <createNav.Provider value={{nav, NavOpen}}>
      <Header/>
      {
        nav && <LeftNav/>
      }
      <Main/>
      </createNav.Provider>
    </div>
  );
}

export default App;
