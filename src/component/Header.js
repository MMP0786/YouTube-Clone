import React, { useState, useEffect, useContext } from "react";
import Icon from "@mdi/react";
import {
  mdiMenu,
  mdiYoutube,
  mdiMagnify,
  mdiMicrophone,
  mdiBellOutline,
  mdiVideoPlusOutline
} from "@mdi/js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

import { Link } from "react-router-dom";
import { app } from "../Firebase.js";
import { createNav } from "../App.js";

function Header() {
  const {NavOpen, nav } =useContext(createNav);
  const [ user, setUser] = useState()
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user);
      }
    });
  }, []);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleClick = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      
      console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
      });
  };

  // console.log(first)
  return (
    <div className="containor">
      <div className="header-left">
        <Icon path={mdiMenu} size={1.5} style={{ cursor: "pointer" }} onClick={()=>NavOpen(nav) } />
        <Icon
          className="icon"
          path={mdiYoutube}
          size={1.5}
          color={"red"}
          />{" "}
        <div style={{ cursor: "pointer",  marginTop:"5px", marginLeft:"3px"}}>
          Youtube
          <sup style={{ fontSize: "10px", display: "inlineBlock" }}>IN</sup>
        </div>
      </div>

      <div className="header-center">
        <input className="search" type="search" placeholder="Search" />
        <Icon className="s-icon" path={mdiMagnify} size={1.5} />
        <Icon path={mdiMicrophone} size={1.5} style={{ cursor: "pointer" }} />
      </div>
      <div className="header-right">
        



     
      <a href="upload">
      <Icon  path={mdiVideoPlusOutline} size={1.6} style={{marginLeft:"15px"}}/>
      </a>
        <Icon
          path={mdiBellOutline}
          size={1.3}
          style={{ cursor: "pointer", marginRight: "15px" }}
        />
        {user ? (
          <img
            style={{ height: "30px", width: "30px", borderRadius: "50%" }}
            src={user.photoURL}
            alt="image"
          />
        ) : (
          <button style={{ cursor: "pointer" }} onClick={handleClick}>
            Sign in
          </button>

        )}
      </div>
    
    </div>
  );
}

export default Header;
