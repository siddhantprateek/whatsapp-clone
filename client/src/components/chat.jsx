import React, { useState } from "react";
import "../styles/chat.css";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import { Avatar, IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import axios from "../config/axios";
function Chat({ messages }) {
  const [input, setInput ] = useState('')

  const sendMessage = async (e) => {
    e.preventDefault()

    await axios.post("/messages/new", {
      message: input,
      neme: "Siddhant",
      timestamp: "17:10",
      received: true
    })

    // empty after posting get empty
    setInput('')
  }
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
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat-body">
        {messages.map((message) => (
          <p className={`chat-msg ${message.received && "chat-recieved"}`}>
            <span className="chat-user-name">{message.name}</span>
            {message.message}
            <span className="chat-timestamp">
              {/* {new Date().getUTCHours() + ":" + new Date().getMinutes()} */}
              {message.timestamp}
            </span>
          </p>
        ))}
      </div>

      <div className="input-area">
        <IconButton>
          <InsertEmoticonOutlinedIcon />
        </IconButton>
        <IconButton>
          <AttachFileOutlinedIcon className="attach" />
        </IconButton>

          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
            }}
            type="text"
            className="chat-msg-input"
            placeholder="Type a message"
            required
          />
        <IconButton>
          <SendIcon className="send-btn" onClick={sendMessage} />
        </IconButton>

        <IconButton>
          <MicOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
