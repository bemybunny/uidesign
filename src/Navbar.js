import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';


import './navbar.css'
function Navbar() {
  return (
    <div className="navbar">
        <div class="search">
          <SearchIcon/>
          <input class="text" type="text" placeholder="Type to search.." />
        </div>
        <div class="container1">
          <div class="box">
          <ToggleOffIcon/>
          <div class="gap">
          <NotificationsIcon/>
          </div>
          <ChatIcon/>
          </div>
          <div class ="para">
            <p>Thomas Anree</p>
            <p>UI Designer</p>
          </div>
          <div class="ava">
          <img src="ava.jpg" alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
