import React from 'react'
import { Avatar } from '@mui/material'
import '../styles/sidechats.css'
function Sidechats({ message }) {
  return (
    <div className='side-chats'>
        <Avatar src=''/>
        <div className="user-logs">
            <h3>Users Name</h3>
            <p>got a message</p>
        </div>
    </div>
  )
}

export default Sidechats