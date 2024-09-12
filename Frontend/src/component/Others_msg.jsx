import React from 'react';
import { useSelector } from 'react-redux';

export default function Others_msg({ userName, message, timestamp = '12:00pm' }) {
  const LightMode = useSelector((state) => state.themekey);

  return (
    <div className='Others-msg'>
      <div className="conversation-container flex items-start gap-2">
        <p className='con-icon'>{userName[0]}</p>
        <div className={LightMode ? "other-text-content flex flex-col bg-purple-400 p-3 m-3 rounded-3xl font-serif w-max shadow-md shadow-slate-700" : "other-text-content flex flex-col bg-purple-800 p-3 m-3 rounded-3xl font-serif w-max shadow-md shadow-slate-300"}>
          <p className={LightMode ? 'con-title' : 'con-title-toggle'}>{userName}</p>
          <p className={LightMode ? 'con-lastmsg' : 'con-lastmsg-toggle'}>{message}</p>
          <p className={LightMode ? 'self-timestamp flex justify-end font-serif font-thin text-xs' : 'text-white flex justify-end font-serif font-thin text-xs'}>{timestamp}</p>
        </div>
      </div>
    </div>
  );
}
