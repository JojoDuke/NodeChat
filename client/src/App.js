import './App.css';
import io from 'socket.io-client';

const socket = io.connect("http://3001");
socket();

function App() {
  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
