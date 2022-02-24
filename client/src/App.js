import './App.css';
import io from 'socket.io-client';
import { useState } from 'react';
import Chats from './components/Chats';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Box } from '@mui/system';
import { Container } from '@mui/material';



const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if(username !== "" && room !== ""){
      socket.emit("join_room", room);
      setShowChat(true);
    }
  }

  return (
    <div className="App">
    {/* NAV-BAR */}
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: "black", }}>
            NodeChat
          </Typography>
          <div>
            <button className='nav-btns white'>How to use</button>
            <button className='nav-btns black'>Follow me on Twitter...</button>
          </div>
        </Toolbar>
      </AppBar>

      {/* HERO SECTION */}
      <Container maxWidth="xl" sx={{ textAlign: "center", }}>
        <Typography variant='h4'>NodeChat is a simple live chat app made with React and Node</Typography>
        <Typography variant='h6'>Just open the app in another window and make sure to join the same room</Typography>
      </Container>

      {!showChat ? (
        <div className='joinChat-div'>
          <h3>Join A Chat</h3>
        <input type="text" placeholder="Name..." onChange={ (e) => {setUsername(e.target.value)} }/>
        <input type="text" placeholder="Room ID..." onChange={ (e) => {setRoom(e.target.value)} } />
        <button onClick={joinRoom}>Join A Room</button>
      </div>) : (<Chats socket={socket} username={username} room={room}/>)}
    </div>
  );
}

export default App;
