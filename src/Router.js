import React from 'react'
import Header from "./Common/Header";
import SideBar from "./Main/SideBar";
import ChatBox from "./Main/ChatBox";
import SideNav from "./Home/SideNav";
import Condant from "./Home/Condant";
import Login from './Login/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRouters from './PrivateRouters';
const Router = () => {
  return (
    <div>
        <BrowserRouter>
        <Header />
          <div className="container" style={{ marginTop: "70px" }}>
            <div className="row gx-0">
            <Routes>

            <Route element={<PrivateRouters/>} > 
            <Route path="/chatBox" element={<><SideBar/><ChatBox/></>} />
            <Route path="/" element={<><SideNav /><Condant /></>} />
            </Route>

            <Route path='login' element={<Login/>}/>
              </Routes>
            </div>
          </div>
      </BrowserRouter>
    </div>
  )
}

export default Router