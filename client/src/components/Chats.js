import React from 'react'
import { useState } from 'react';

function Chats({socket, username, room}) {
    const [currentMessage, setCurrentMessage] = useState("");

    const sendMessage = async () => {
        // Stop user from sending empty messages
        if(currentMessage !==""){
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
            };

            await socket.emit("send_message", messageData);
        };
    }

  return (
    <div>
        <div className="char-header">
            <p>Live Chat</p>
        </div>

        <div className="char-body">

        </div>

        <div className="chat-footer">
            <input type="text" placeholder='Type message' onChange={(e) => setCurrentMessage(e.target.value)}/>
            <button onClick={sendMessage}>&#9658;</button>
        </div>
    </div>
  )
}

export default Chats;