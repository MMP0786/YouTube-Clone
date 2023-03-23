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
  const [user, setUser] = useState();
  const NavOpen = (val)=>{
    setNav(!val)
  }
  return (
    <div>
      <createNav.Provider value={{nav, NavOpen, user, setUser}}>
      <Header/>
      {nav && <LeftNav/>}
      </createNav.Provider>

      <BrowserRouter>
      <Routes>
        <Route path='upload' element={<Upload/>}/>
        <Route path='/' element={<Main/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
