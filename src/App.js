import './App.css';
import {Route, Routes} from "react-router-dom";
import Join from "./components/Join";
import Chat from "./components/Chat";
import Rooms from "./components/Rooms";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AuthActionCreators} from "./store/reducers/auth/action-creators";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <div className={'main'}>

        {/*<Route path='/' element={<Join name={username} login={login} isAuth={isAuth}/>}/>*/}
        {/*<Route path='/rooms' element={<Rooms rooms={rooms} setRooms={setRooms} />}/>*/}
        {/*<Route path='/chat' element={<Chat/>}/>*/}
          <AppRouter/>
    </div>
  );
}

export default App;
