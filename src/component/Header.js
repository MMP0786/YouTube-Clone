import React from "react";
import Icon from "@mdi/react";
import { mdiMenu, mdiYoutube, mdiMagnify, mdiMicrophone, mdiBellOutline } from "@mdi/js";
// import {  } from '@mdil/js';
function Header() {
  return (
    <div className="containor">
      <div className="header-left"> <Icon path={mdiMenu} size={1.5} />
      <Icon className="icon" path={mdiYoutube} size={1.5} color={"red"} /> <span> Youtube <sup>IN</sup></span>
      </div>

      <div className="header-center">
      <input className="search" type="search" placeholder="Search" />
      <Icon className="s-icon" path={mdiMagnify} size={1.5} />
      <Icon  path={mdiMicrophone} size={1.5} />
    </div>
    <div className="header-right">
        <Icon path={mdiBellOutline} size={1.5} />
        <button>Sign In</button>

    </div>
    </div>
  );
}

export default Header;
