import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SearchIcon from "@mui/icons-material/Search";
import Conversation_item from "./Conversation_item";
import "./mystyle.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/Slice";
import io from "socket.io-client";

// Set up socket connection
const socket = io.connect('http://localhost:3000');

export default function Sidebar() {
  const LightMode = useSelector((state) => state.themekey);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    // Listening for incoming chats to update conversation list
    socket.on('chat', (payload) => {
      setConversations((prevConversations) => {
        const existingConversation = prevConversations.find(conv => conv.name === payload.userName);
        if (existingConversation) {
          // Update the last message and timestamp for an existing conversation
          return prevConversations.map(conv =>
            conv.name === payload.userName
              ? { ...conv, lastmsg: payload.message, timestamp: new Date().toLocaleTimeString() }
              : conv
          );
        } else {
          // Add a new conversation
          return [...prevConversations, { name: payload.userName, lastmsg: payload.message, timestamp: new Date().toLocaleTimeString() }];
        }
      });
    });

    // Clean up on unmount
    return () => {
      socket.off('chat');
    };
  }, []);

  return (
    <div className="flex flex-[0.3] flex-col max-[425px]:flex-[0]">
      {/*-------------------------------------------Side bar header ------------------------------------- */}
      <div
        className={
          LightMode
            ? "bg-white flex justify-between rounded-3xl m-[7px] p-[5px] shadow-md shadow-slate-500 max-[425px]:flex-col max-[425px]:flex-1  max-[425px]:w-min"
            : "bg-slate-800 flex justify-between rounded-3xl m-[7px] p-[5px] shadow-md shadow-slate-500 max-[425px]:flex-col max-[425px]:flex-1  max-[425px]:w-min"
        }
      >
        <IconButton>
          <AccountCircleIcon className={LightMode ? "" : "text-white"} />
        </IconButton>

        <div className="max-[425px]:flex-col">
          <IconButton
            onClick={() => {
              navigate("user");
            }}
          >
            <PersonAddIcon className={LightMode ? "" : "text-white"} />
          </IconButton>

          <IconButton
            onClick={() => {
              navigate("grp");
            }}
          >
            <GroupAddIcon className={LightMode ? "" : "text-white"} />
          </IconButton>

          <IconButton
            onClick={() => {
              navigate("creategrp");
            }}
          >
            <AddCircleOutlineIcon className={LightMode ? "" : "text-white"} />
          </IconButton>

          <IconButton
            onClick={() => {
              dispatch(toggleTheme());
            }}
          >
            {LightMode ? <DarkModeIcon /> : <LightModeIcon className="text-white" />}
          </IconButton>
        </div>
      </div>

      {/*-------------------------------------------Side bar Search ------------------------------------- */}
      <div
        className={
          LightMode
            ? "side-search bg-white flex items-center rounded-3xl m-[7px] p-[5px] shadow-md shadow-slate-500 max-[425px]:hidden"
            : "side-search bg-slate-800 flex items-center rounded-3xl m-[7px] p-[5px] shadow-md shadow-slate-500 max-[425px]:hidden"
        }
      >
        <IconButton>
          <SearchIcon className={LightMode ? "" : "text-white"} />
        </IconButton>
        <input
          placeholder="Search"
          className={"border-none outline-0" + (LightMode ? "" : "text-white bg-slate-800")}
        />
      </div>

      {/*-------------------------------------------Side bar Converstion ------------------------------------- */}
      <div
        className={
          LightMode
            ? "sb-conversation bg-white rounded-3xl p-[5px] m-[5px] flex-1 shadow-md shadow-slate-600 "
            : "bg-slate-800 rounded-3xl p-[5px] m-[5px] flex-1 shadow-md shadow-slate-200 "
        }
      >
        {conversations.map((convpara) => (
          <Conversation_item key={convpara.name} props={convpara} />
        ))}
      </div>
    </div>
  );
}
