import React from 'react'
import "./mystyle.css"
import { useNavigate } from 'react-router-dom'

import { useSelector } from "react-redux";

export default function Conversation_item({props}) {
  
  const LightMode = useSelector((state) => state.themekey);
 
 const navigate = useNavigate();
  return (
    <div onClick={()=>{navigate('chat')}}>
      <div className='conversation-container shadow-md shadow-slate-300 hover:bg-blue-100 hover:shadow-lg  hover:shadow-slate-500'>
      <p className='con-icon'>{props.name}</p>
      <p className={LightMode ? "con-title" : "con-title-toggle"}>{props.name}</p>
      <p className={LightMode ? "con-lastmsg" : "con-lastmsg-toggle"}>{props.lastmsg}</p>
      <p className={LightMode ? "con-timestamp" : "con-timestamp-toggle"}>{props.timestamp}</p>
    </div>
    </div>
  )
}
