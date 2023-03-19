import React, {useContext} from 'react'
import "../component/LeftNav.css"
import {Icon }from "@mdi/react";
import {mdiMenu} from "@mdi/js";
import { createNav } from '../App';

function LeftNav() {
  const {NavOpen} =useContext(createNav);
  return (
    <div className='left-nav'>
     <Icon path={mdiMenu} size={1.5} style={{ cursor: "pointer" }} onClick={NavOpen} />
      
    </div>
  )
}

{/* <svg viewBox="0 0 90 20" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"></svg> */}
export default LeftNav;