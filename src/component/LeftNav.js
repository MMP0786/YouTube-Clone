import React, {useContext} from 'react'
import "../component/LeftNav.css"
import {Icon }from "@mdi/react";
import {mdiHome, mdiMenu, mdiVideoPlusOutline} from "@mdi/js";
import { createNav } from '../App';

function LeftNav() {
  const {NavOpen} =useContext(createNav);
  return (
    <div className='left-nav'>
     <Icon path={mdiMenu} size={1.5} style={{ cursor: "pointer" }} onClick={NavOpen} />
      <div>
        <Icon path={mdiHome} size={1.3} />  
        <span>Home</span></div>
      <div>
        <Icon path={mdiHome} size={1.3} />  
        <span>Home</span></div>
    </div>
  )
}

{/* <svg viewBox="0 0 90 20" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"></svg> */}
export default LeftNav;