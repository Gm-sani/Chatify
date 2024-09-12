import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Chatarea from './Chatarea'
import Welcome from './Welcome';
import Group from './Group';
import User_grp from './User_grp';
import { Outlet } from 'react-router-dom';
import { useSelector } from "react-redux";

export default function Main_container() {
  const LightMode = useSelector((state) => state.themekey);
 
  return (
    <div className={LightMode ? 'bg-blue-200 h-[90vh] w-[90vw] flex rounded-3xl max-[425px]:h-screen max-[425px]:w-screen ' : "bg-slate-900 h-[90vh] w-[90vw] flex rounded-3xl max-[425px]:h-screen max-[425px]:w-screen "}>
      
      <Sidebar/>
      <Outlet/>
      {/*<Welcome/>
      <Chatarea props={conversations[0]}/>
      <Group/>
      <User_grp/>*/}
    </div>
  )
}
