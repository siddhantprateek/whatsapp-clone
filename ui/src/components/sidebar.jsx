import React from "react";
import "../styles/sidebar.css";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import { IconButton, Avatar } from "@mui/material";
import Sidechats from "./sidechats";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header-container">
        <Avatar src="https://www.hollywoodreporter.com/wp-content/uploads/2019/03/avatar-publicity_still-h_2019.jpg" />

        <div className="sidebar-right-section">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="search-container">
        <div className="search-section">
          <SearchOutlinedIcon/>
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="sidebar-chats-container">
       <div className="archived-header">
         <ArchiveOutlinedIcon/>
         <h4>Archived</h4>
       </div>
       <div className="side-chats-container">
         <Sidechats/>
         <Sidechats/>
         <Sidechats/>
         <Sidechats/>
       </div>
      </div>
    </div>
  );
}

export default Sidebar;
