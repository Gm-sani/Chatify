import React from "react";
import Logo from "./Pics/Chatify_logo.png";
import { Button, TextField } from "@mui/material";

export default function Login() {
  return (
    <div className="bg-blue-300 h-[90vh] w-[90vw] rounded-3xl flex">
      <div className="image-cont flex-[0.3] bg-blue-300 rounded-3xl flex justify-center items-center m-3">
        <img src={Logo} className="" />
      </div>
      <div className="login-cont flex-[0.7] bg-blue-100 rounded-3xl m-3 font-serif text-green-900 font-bold flex justify-center items-center flex-col gap-6  text-3xl border-b-4 border-blue-800 shadow-2xl shadow-zinc-800">
        <p>Login to your account</p>
        <TextField id="standard-basic" label="User Name" variant="outlined" />
        <TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password" variant="outlined"/>
        <Button variant="outlined" >Login</Button>
      </div>
    </div>
  );
}
