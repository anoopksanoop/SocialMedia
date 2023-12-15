import{React,useEffect} from 'react'
import { footContext } from './Context';
import Header from "./Common/Header";
import SideBar from "./Main/SideBar";
import ChatBox from "./Main/ChatBox";
import SideNav from "./Home/SideNav";
import Condant from "./Home/Condant";
import Login from './Login/Login';
import SignupForm from './LSiginupPage/Siginup';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import GroupForm from './Home/CreateGroup/GroupForm';
import ProfileAdd from './Home/ProfileAdd';
import RoomPage from './Main/Videocall/RoomPage';
// server side
import io from "socket.io-client"


const socketIO = io.connect("http://localhost:3001");

const Router = () => {
  // server side
  const [showChat, setShowChat] = useState(false);
  const [socket, setSocket] = useState(null);
  const [messageList, setMessageList] = useState([]);




  const [login, setLogin] = useState(false)
  const [password, setPassword] = useState([])
  const [Loginuser, setLoginUser] = useState([])
  const [value, setvalue] = useState();
const user={
  login,
  setLogin,
  password,
  setPassword,
  Loginuser,
  setLoginUser,
value,
setvalue,


// server side
  showChat,
  setShowChat,
  socket,
  setSocket,
messageList,
setMessageList
}

useEffect(() => {
  if(!socket){
    setSocket(socketIO);
  }
  
  return () => {
    setSocket(null)
  }
}, [])

  return (
    <div>
        <BrowserRouter>
        <footContext.Provider value={user}>
        <Header/>
          <div className="container" style={{ marginTop: "70px" }}>
            <div className="row gx-0">
            <Routes>
           
            {/* {login ? ( */}
            <Route path="/chatBox/:id?" element={<><SideBar/><ChatBox/></>} />,
            <Route path="/Home/:id" element={<><SideNav /><Condant /><Header/></>} />
               {/* ):( */}
        
            <Route path='login' element={<Login/>}/>
           
              {/* )} */}
              <Route  path='/GroupForm' element={<GroupForm/>}/>
            <Route path='/ProfileAdd' element={<ProfileAdd/>}/>
            <Route path='/' element={<SignupForm/>}/>
            <Route path='/room/:RoomId' element={<RoomPage/>}/>
              </Routes>
            </div>
          </div>
          </footContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default Router