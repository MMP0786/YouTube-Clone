import logo from './logo.svg';
import './App.css';
import "./component/header.css"
import { createContext, useState } from 'react';
import Header from './component/Header';
import LeftNav from './component/LeftNav';
import Main from './component/Main';
import Upload from "./component/Upload"
import {Routes, Route, BrowserRouter} from "react-router-dom"

export const createNav = createContext();

function App() {
  const [nav, setNav] = useState(false);

  const NavOpen = (val)=>{
    setNav(!val)
    console.log("first")
  }
  return (
    <div>
      <createNav.Provider value={{nav, NavOpen}}>
      <Header/>
      {nav && <LeftNav/>}
      <Main/>
      </createNav.Provider>
    </div>
  );
}

export default App;
