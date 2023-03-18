import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiMenu, mdiYoutube, mdiMagnify, mdiMicrophone, mdiBellOutline } from "@mdi/js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from "../Firebase.js"

function Header() {
  const [user, setUser] =useState();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleClick = ()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
      
      const user = result.user;
      setUser(user);
      console.log(user)
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      console.log(error)
    });
  }





  return (
    <div className="containor">
      <div className="header-left"> <Icon path={mdiMenu} size={1.5} style={{cursor: "pointer"}} />
      <Icon className="icon" path={mdiYoutube} size={1.5} color={"red"} /> <span style={{cursor: "pointer"}}> Youtube <sup>IN</sup></span>
      </div>

      <div className="header-center">
      <input className="search" type="search" placeholder="Search" />
      <Icon className="s-icon" path={mdiMagnify} size={1.5} />
      <Icon  path={mdiMicrophone} size={1.5} style={{cursor: "pointer"}}/>
    </div>
    <div className="header-right">
        <Icon path={mdiBellOutline} size={1.5} style={{cursor: "pointer"}}/>
        {
        user ? <img style={{height:"30px", width:"30px", borderRadius:"50%"}} src={user.photoURL} alt="image" />: 
        <button style={{cursor: "pointer"}} onClick={handleClick}>Sign in</button>
}
    </div>
    </div>
  );
}

export default Header;
