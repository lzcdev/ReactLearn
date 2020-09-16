import React from "react";
import { Link } from "react-router-dom";
import './app.scss'


export default function App () {

  return <div className="container">
    <h1>欢迎来到腾讯课堂</h1>
    <Link to="/login">点击跳转到Login页面</Link>
    <br />
    <Link to="/home">点击跳转到Home页面</Link>
    <br />
  </div>
}