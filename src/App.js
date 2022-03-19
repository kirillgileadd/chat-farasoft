import './App.css';
import {Route, Routes} from "react-router-dom";
import Join from "./components/Join";
import Chat from "./components/Chat";
import Rooms from "./components/Rooms";
import {useState} from "react";

function App() {
    const [name, setName] = useState('')
    const [rooms, setRooms] = useState([
        {id: 1, title: 'react'}
    ])

  return (
    <div className={'main'}>
      <Routes>
        <Route path='/' element={<Join name={name} setName={setName} />}/>
        <Route path='/rooms' element={<Rooms rooms={rooms} setRooms={setRooms} />}/>
        <Route path='/chat' element={<Chat/>}/>
      </Routes>
    </div>
  );
}

export default App;
