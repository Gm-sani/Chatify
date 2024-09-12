import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, duration } from "@mui/material";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion"

export default function User_grp() {
  const LightMode = useSelector((state) => state.themekey);
  return (
    <AnimatePresence>
    <motion.div 
    initial ={{opacity:0,scale:0}}
    animate={{opacity:1,scale:1}} 
    exit = {{opacity:0,scale:0}}
    transition={{ease : "anticipate",duration : "0.3"}}
     className="list-container bg-white-500 flex-[0.7] rounded-3xl flex flex-col max-[425px]:flex-1">
      {/*-------------------------------------------User Groups Header------------------------------------- */}
      <div
        className={
          LightMode
            ? "ug-header bg-white rounded-3xl m-3 p-3 flex  items-center shadow-md shadow-slate-500"
            : "  bg-slate-800 rounded-3xl m-3 p-3 flex items-center shadow-md shadow-slate-500"
        }
      >
        <img src="" alt="" />
        <p
          className={
            LightMode
              ? "text-blue-900 font-serif mx-3"
              : "text-white font-serif mx-3"
          }
        >
          Online Grp
        </p>
      </div>
      {/*-------------------------------------------User group Search ------------------------------------- */}
      <div
        className={
          LightMode
            ? "sb-search bg-white border rounded-3xl m-[7px] p-[5px] flex items-center shadow-md shadow-slate-500"
            : "bg-slate-800 flex items-center  rounded-3xl m-[7px] p-[5px] shadow-md shadow-slate-500"
        }
      >
        <IconButton>
          <SearchIcon className={"" + (LightMode ? "" : "text-white")} />
        </IconButton>
        <input
          placeholder="Search"
          className={
            "border-none outline-0" +
            (LightMode ? "" : "text-white bg-slate-800")
          }
        />
      </div>
      {/*-------------------------------------------User group List------------------------------------- */}
      <div className="ug-list flex-1 overflow-auto">
        <motion.div whileHover={{scale : 1.01}} 
        whileTap={{scale : 0.95}}
        className={LightMode ? "list-tem bg-white rounded-3xl m-3 p-3 flex duration-500 items-center shadow-md shadow-slate-500 gap-3 hover:bg-blue-100 hover:shadow-xl hover:shadow-slate-700": " list-tem bg-slate-800 rounded-3xl m-3 p-3 flex duration-500 items-center shadow-md shadow-slate-500 gap-3 hover:bg-blue-100 hover:shadow-xl hover:shadow-slate-700" }>
          <p className="con-icon">T</p>
          <p className={LightMode ? "con-title" : "con-title-toggle"}>Test1</p>
        </motion.div> 

         <motion.div whileHover={{scale : 1.01}} 
        whileTap={{scale : 0.95}}
        className={LightMode ? "list-tem bg-white rounded-3xl m-3 p-3 flex duration-500 items-center shadow-md shadow-slate-500 gap-3 hover:bg-blue-100 hover:shadow-xl hover:shadow-slate-700": " list-tem bg-slate-800 rounded-3xl m-3 p-3 flex duration-500 items-center shadow-md shadow-slate-500 gap-3 hover:bg-blue-100 hover:shadow-xl hover:shadow-slate-700" }>
          <p className="con-icon">T</p>
          <p className={LightMode ? "con-title" : "con-title-toggle"}>Test2</p>
        </motion.div>

         <motion.div whileHover={{scale : 1.01}} 
        whileTap={{scale : 0.95}}
        className={LightMode ? "list-tem bg-white rounded-3xl m-3 p-3 flex duration-500 items-center shadow-md shadow-slate-500 gap-3 hover:bg-blue-100 hover:shadow-xl hover:shadow-slate-700": " list-tem bg-slate-800 rounded-3xl m-3 p-3 flex duration-500 items-center shadow-md shadow-slate-500 gap-3 hover:bg-blue-100 hover:shadow-xl hover:shadow-slate-700" }>
          <p className="con-icon">T</p>
          <p className={LightMode ? "con-title" : "con-title-toggle"}>Test3</p>
        </motion.div>

         <motion.div whileHover={{scale : 1.01}} 
        whileTap={{scale : 0.95}}
        className={LightMode ? "list-tem bg-white rounded-3xl m-3 p-3 flex duration-500 items-center shadow-md shadow-slate-500 gap-3 hover:bg-blue-100 hover:shadow-xl hover:shadow-slate-700": " list-tem bg-slate-800 rounded-3xl m-3 p-3 flex duration-500 items-center shadow-md shadow-slate-500 gap-3 hover:bg-blue-100 hover:shadow-xl hover:shadow-slate-700" }>
          <p className="con-icon">T</p>
          <p className={LightMode ? "con-title" : "con-title-toggle"}>Test4</p>
        </motion.div>

         <motion.div whileHover={{scale : 1.01}} 
        whileTap={{scale : 0.95}}
        className={LightMode ? "list-tem bg-white rounded-3xl m-3 p-3 flex duration-500 items-center shadow-md shadow-slate-500 gap-3 hover:bg-blue-100 hover:shadow-xl hover:shadow-slate-700": " list-tem bg-slate-800 rounded-3xl m-3 p-3 flex duration-500 items-center shadow-md shadow-slate-500 gap-3 hover:bg-blue-100 hover:shadow-xl hover:shadow-slate-700" }>
          <p className="con-icon">T</p>
          <p className={LightMode ? "con-title" : "con-title-toggle"}>Test5</p>
        </motion.div> 
       </div>
    </motion.div>
    </AnimatePresence>
  );
}
