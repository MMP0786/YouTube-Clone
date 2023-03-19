import React, { useState, useEffect, useContext } from "react";
import Icon from "@mdi/react";
import {
  mdiMenu,
  mdiYoutube,
  mdiMagnify,
  mdiMicrophone,
  mdiBellOutline,
} from "@mdi/js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { app } from "../Firebase.js";
import { createNav } from "../App.js";

function Header() {
  const {NavOpen} =useContext(createNav);
  const [user, setUser] = useState();

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

  return (
    <div className="containor">
      {/* <img src="download.png" alt="" /> */}
      <div className="header-left">
        <Icon path={mdiMenu} size={1.5} style={{ cursor: "pointer" }} onClick={NavOpen} />
        <Icon
          className="icon"
          path={mdiYoutube}
          size={1.5}
          color={"red"}
        />{" "}
        <span style={{ cursor: "pointer" }}>
          {" "}
          Youtube{" "}
          <sup style={{ fontSize: "10px", display: "inlineBlock" }}>IN</sup>
        </span>
      </div>

      <div className="header-center">
        <input className="search" type="search" placeholder="Search" />
        <Icon className="s-icon" path={mdiMagnify} size={1.5} />
        <Icon path={mdiMicrophone} size={1.5} style={{ cursor: "pointer" }} />
      </div>
      <div className="header-right">
        <Icon
          path={mdiBellOutline}
          size={1.4}
          style={{ cursor: "pointer", marginRight: "15px" }}
        />
        {user ? (
          <img
            style={{ height: "35px", width: "35px", borderRadius: "50%" }}
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
