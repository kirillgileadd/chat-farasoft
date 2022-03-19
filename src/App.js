import './App.css';
import {Route, Routes} from "react-router-dom";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Join/>}/>
        <Route path='/chat' element={<Chat/>}/>
      </Routes>
    </div>
  );
}

export default App;
