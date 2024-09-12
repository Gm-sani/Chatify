import React from 'react'
import Main_container from './component/Main_container'
import "./App.css";
import Login from './component/Login';
import { Route, Routes } from 'react-router-dom';
import Welcome from './component/Welcome';
import Chatarea from './component/Chatarea';
import Group from './component/Group';
import User_grp from './component/User_grp';
import User_single from './component/User_single';

import { useSelector } from "react-redux";

function App() {
  
  const LightMode = useSelector((state) => state.themekey);
  return (    
      <div className={LightMode ? "bg-slate-200 h-screen flex justify-center items-center" : "bg-slate-950 h-screen flex justify-center items-center"}>
       
       {/* */}
         <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='app' element={<Main_container/>}>
            <Route path='welcome' element={<Welcome/>}/>
            <Route path='chat' element={<Chatarea/>}/>
            <Route path='creategrp' element={<Group/>}/>
            <Route path='grp' element={<User_grp/>}/>
            <Route path='user' element={<User_single/>}/>
          </Route>

         </Routes>
        </div> 
  )
}

export default App
