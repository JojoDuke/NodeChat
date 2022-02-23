import './App.css';
import io from 'socket.io-client';
import { useState } from 'react';
import Chats from './components/Chats';

const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    if(username !== "" && room !== ""){
      socket.emit("join_room", room);
    }
  }

  return (
    <div className="App">
      <h3>Join A Chat</h3>
      <input type="text" placeholder="Name..." onChange={ (e) => {setUsername(e.target.value)} }/>
      <input type="text" placeholder="Room ID..." onChange={ (e) => {setRoom(e.target.value)} } />
      <button onClick={joinRoom}>Join A Room</button>

      <Chats socket={socket} userName={username} room={room}/>
    </div>
  );
}

export default App;
