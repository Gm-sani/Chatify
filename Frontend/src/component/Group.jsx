import React from 'react'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { IconButton } from '@mui/material';
import { AnimatePresence, motion } from "framer-motion"

import { useSelector } from "react-redux";
export default function Group() {
  
  const LightMode = useSelector((state) => state.themekey);
  return (
  <AnimatePresence>
    <motion.div 
    
    initial ={{opacity:0,scale:0}}
    animate={{opacity:1,scale:1}} 
    exit = {{opacity:0,scale:0}}
    transition={{ease : "anticipate",duration : "0.3"}}
    className={LightMode ? 'create-grp-container flex flex-[0.7] p-5 m-5 bg-white rounded-3xl justify-between self-center shadow-lg shadow-slate-500 max-[425px]:flex-1' : "create-grp-container flex flex-[0.7] p-5 m-5 bg-slate-800 rounded-3xl justify-between self-center shadow-lg shadow-slate-500 max-[425px]:flex-1 "}>
      <input placeholder='Type Group Name'
       className={LightMode ? "border-none outline-0" : "text-white bg-slate-800"}/>
      <IconButton >
      <DoneOutlineIcon className={"" + (LightMode ? "" : "text-white")}/>
      </IconButton>
    </motion.div>
    </AnimatePresence>
  )
}
