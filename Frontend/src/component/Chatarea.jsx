import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './mystyle.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Others_msg from './Others_msg';
import Self_msg from './Self_msg';
import { useSelector } from 'react-redux';

// Set up socket connection to the back-end server
const socket = io.connect('http://localhost:3000');

export default function Chatarea() {
  const LightMode = useSelector((state) => state.themekey);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const [roomId, setRoomId] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    socket.on("connect",()=>{
      console.log("connected",socket.id)
      setUserName(socket.id)
    })

    // Join the room when the component mounts or when roomId changes
    if (roomId) {
      socket.emit('joinRoom', roomId);
    }

    // Listen for chat messages from the server
    socket.on('chat', (payload) => {
      setChat((prevChat) => [...prevChat, payload]);
    });

    // Clean up the socket listeners when the component unmounts or roomId changes
    return () => {
      socket.off('chat');
    };
  }, [roomId]);

  const sendChat = (e) => {
    e.preventDefault();
    if (message.trim() && roomId.trim()) {
      // Emit a chat message with the roomId, message, and userName
      socket.emit('chat', { roomId, message, userName });
      setMessage('');
      setRoomId('')
    }
  };

  return (
    <div className='flex-[0.7] flex flex-col max-[425px]:flex-1'>
      {/*----------------------------------------------ChatArea Header---------------------------------------- */}
      <div className={LightMode ? "chatarea-header bg-white flex items-center gap-3 p-3 m-3 rounded-3xl shadow-md shadow-slate-500" : "bg-slate-800 flex items-center gap-3 p-3 m-3 rounded-3xl shadow-md shadow-slate-500"}>
        <p className="con-icon">{userName[0]}</p>
        <div className="header-text flex flex-col justify-center flex-1">
          <p className={LightMode ? "con-title" : "con-title-toggle"}>{userName}</p>  {/* Display roomId in the header */}
        </div>
        <IconButton>
          <DeleteIcon className={LightMode ? "" : "text-white"} />
        </IconButton>
      </div>

      {/*----------------------------------------------ChatArea Message Container---------------------------------------------- */}
      <div className={LightMode ? "message-container bg-white flex-1 m-2 p-1 rounded-3xl overflow-auto shadow-md shadow-slate-500" : "message-container bg-slate-800 flex-1 m-2 p-1 rounded-3xl overflow-auto shadow-md shadow-slate-500"}>
        {chat.map((payload, index) => (
          payload.userName === userName ? (
            <Self_msg key={index} message={payload.message} />
          ) : (
            <Others_msg key={index} message={payload.message} userName={payload.userName} />
          )
        ))}
      </div>

      {/*----------------------------------------------Text Input Area---------------------------------------------- */}
      <div className={LightMode ? "text-input-area bg-white p-[10px] m-[10px] rounded-3xl flex justify-between shadow-md shadow-slate-500" : "text-input-area bg-slate-800 p-[10px] m-[10px] rounded-3xl flex justify-between shadow-md shadow-slate-500"}>
        <input
          placeholder='Type a message'
          className={LightMode ? 'border-none outline-0 text-[1.25rem] ml-3' : 'border-none outline-0 text-[1.25rem] ml-3 bg-slate-800'}
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input
          placeholder='Type room id'
          className={LightMode ? 'border-none outline-0 text-[1.25rem] ml-3' : 'border-none outline-0 text-[1.25rem] ml-3 bg-slate-800'}
          type="text"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />
        <IconButton onClick={sendChat}>
          <SendIcon className={LightMode ? "" : "text-white"} />
        </IconButton>
      </div>
    </div>
  );
}
