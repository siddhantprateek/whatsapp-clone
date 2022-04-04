import React from "react";
import "../styles/chat.css";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import { Avatar, IconButton } from "@mui/material";
function Chat() {

  return (
    <div className="chat">
      <div className="chat-header">
        <div className="chat-header-left">
          <Avatar />
          <div className="chat-user-header">
            <h3>Avatar Name</h3>
            <p>last seen at</p>
          </div>
        </div>
        <div className="chat-header-right">
          <IconButton>
            <SearchOutlinedIcon/>
          </IconButton>
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
        </div>
      </div>
      <div className="chat-body">
        <p className="chat-msg">
          <span className="chat-user-name">Siddhant</span>
          This is your Message
          <span className="chat-timestamp">
          {new Date().getUTCHours() + ":" + new Date().getMinutes()}
          </span>
        </p>

        <p className="chat-msg chat-recieved ">
          <span className="chat-user-name">Martinez</span>
          This is your Message
          <span className="chat-timestamp">
            {new Date().getUTCHours() + ":" + new Date().getMinutes()}
          </span>
        </p>
      </div>

      <div className="input-area">
        <IconButton>
          <InsertEmoticonOutlinedIcon />
        </IconButton>
        <IconButton>
          <AttachFileOutlinedIcon className="attach" />
        </IconButton>
        <input type="text" className="chat-msg-input" placeholder="Type a message" />
        <IconButton>
          <MicOutlinedIcon />
        </IconButton>

      </div>
    </div>
  );
}

export default Chat;
