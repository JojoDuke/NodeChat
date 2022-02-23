import React from 'react'

function Chats({socket, userName, room}) {
  return (
    <div>
        <div className="char-header">
            <p>Live Chat</p>
        </div>

        <div className="char-body">

        </div>

        <div className="chat-footer">
            <input type="text" placeholder='Type message'/>
            <button>&#9658;</button>
        </div>
    </div>
  )
}

export default Chats;